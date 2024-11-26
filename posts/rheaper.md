# Rheap what you sow; your heap is ripe

Greetings Visitor! Have you ever pulled you hairs profiling/debugging memory issues in your rust program? Uncle Adhoc may have just the right tool for you!

No, no, it's not your standard Valgrind/Massif/Heaptrack... blog post (all those tools are fantastic by the way, you should absolutely have them in your belt!). No, today it's all about new stuff! Exciting!

Alright Visitor, I hear you say: "Yikes, another heap profiler? I've been using X for more than 20 years, _it just works_™". But bear with me for a few more lines, I might just change your mind.

Before anything, let me paint you the fuller picture. It was some time ago, a nice day so far, I am hacking on libsql-server, when I get a message from my colleague: there seems to be a leak in some of our production instances. That's not looking good, it's a very small leak, that only shows up on instances that receive the most traffic. It takes hours to become noticeable, and after days, the instance gets killed  with an out-of-memory(OOM) error. Already, I know that this is not going to be a pleasant experience for debug. I spin a new machine on the platform, instrument it with a bunch of tools, and I start looking for the leak.
Valgrind doesn't find anything, but that's expected, we're writing rust here, so allocated memory gets freed, _eventually_ (albeit, maybe at the end of the program...). Massif and heaptrack are not very helpful either, The leak is too small to show up after collecting data for a couple dozen of minutes, and I quickly loose myself desperately taking guesses, exploring backtraces, peeling flamegraphs. It just feels like looking for a needle in a haystack (or should I say a hay_heap_?). I think to myself "I know _what_ I'm looking for, I just don't know _how_ to find it". The _what_, here are a bunch of small allocation that get allocated over time, and are never reclaimed after a long period of time. I even have a rough idea of how much we're leaking, that _should_ be helpful! The _how_, so far, is taking guesses. But there has to be a better way. Then, it strikes me. What if I could just query my heap? If instead of looking for patterns, I could describe them, and let the computer find them for me?

The idea for rheaper is very simple, and yet, very effective. It records allocation events at runtime (nothing new), dump them to files (boring...), and then it structures that data in a SQLite3 file for you to query (Ah!). With that SQLite file handy, you can now have a chat with your heap, and ask it all the question you ever wanted to ask it. You want to know what's the biggest contributor to allocation in byte size, grouped by callsite? I got you. You want to know what's the average size of strings allocated by some function is your program? Not sure why you'd want that, but I got you! You want to know what are all the allocation that lived for more than some amount of time, and that were never deallocated at the end of the recording session? I. GOT. YOU. because, really, the only limit is your imagination.

If you're still reading now, it probably means that I picked your interest, so let's reward it, and dive right into how rheaper works, and how to use.

Rheaper works by wrapping you global allocator in rust, and tracking calls to alloc and dealloc. It records metadata about those allocation, such as the size, the time of the event, the type of the event, backtraces..., and occasionally, it dumps that data to disk, in a raw format. When you enable Rheaper at runtime, it starts collecting event, and when you stop it, it flushes all events to disk. Then, the rheaper CLI takes events data, and writes it to a sqlite file, and voila, you can start analyzing. Let's see it in action:

First, create a new rust project, add the dependencies we'll need and install the rheaper cli:


```
cargo new lets-rheap && cd lets-rheap
cargo add rheaper rand rand_dist
cargo install rheaper
```

In `main.rs`, we first need to setup the allocator:

```rust
use std::alloc::System;
use rheaper::Allocator;

#[global_allocator]
static GLOBAL: Allocator<System> = Allocator::from_allocator(System);
```

By default, this doesn't do much. Rheaper just passes alloc call to the system alloc.

For it to actually do anything, we need to enable sampling, let's do that in our main function:

```rust
fn main() {
    // this enables sampling
    rheaper::enable_tracking(rheaper::TrackerConfig {
        // how deep do we want to sample the stack (for backtraces)
        max_stack_depth: 50,
        // How many tracker do we want to install (there one per thread)
        // if not tracker are available, then this thread will be ignored
        max_trackers: 50,
        // how many events to buffer per tracker, before flushing to disk
        tracker_event_buffer_size: 8196,
        // how often to probe for backtraces on allocation
        sample_rate: 1.0,
        // where to dump profile data
        profile_dir: current_dir().unwrap(),
    }).unwrap();

    /// your code here

    rheaper::disable_tracking();
}
```

OK, simple enough. Now we need something to profile, let's add two small functions:

```rust
fn alloc_random_string_1() {
    let normal = Normal::new(256.0, 30.0).unwrap();
    for _ in 0..100_000 {
        let v = normal.sample(&mut rand::thread_rng());
        let _s = String::with_capacity(v as usize);
    }
}

fn alloc_random_string_2() {
    let normal = Normal::new(1024.0, 70.0).unwrap();
    for _ in 0..121_042 {
        let v = normal.sample(&mut rand::thread_rng());
        let _s = String::with_capacity(v as usize);
    }
}
```

Maybe you see where this is going now. Let's call them from main:

```rust
// in main, between enable and disable
alloc_random_string_1();
alloc_random_string_2();
```

Let's run it
```
❯ cargo r
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.02s
     Running `target/debug/rheap`
recorded 442086 allocation events
```

So easy...! A file named `rip-*` should have been created in you current directory (mine was called `rip-1732638119 `). Let's analyze it! (Assuming you followed my instruction you should have rheaper installed by now):

```
❯ rheaper rip-1732638119 analyzed
analyzing backtraces:
3
analyzing events:
442086
```

This takes the `rip` profile, and it turns into a SQLite db file, named `analyzed`. neat.

Let's explore this database content:

```
sqlite3 analyzed
SQLite version 3.43.2 2023-10-10 13:08:14
Enter ".help" for usage hints.
sqlite> .mode column
sqlite> .tables
allocations  backtraces
```

Ok, so we have two tables, one for `backtraces`, another for `allocations`. Let's start with the `allocations` table:
```
sqlite> SELECT * FROM allocations LIMIT 1;
alloc_after  dealloc_after  bt                    size  addr        alloc_thread  dealloc_thread
-----------  -------------  --------------------  ----  ----------  ------------  --------------
1027958                     16576367168930818410  352   5174739072  0
```

Let's review the columns:
- `alloc_after` is the duration in ns, from the instant enabled tracing, until that allocation event
- `dealloc_after`, same as `alloc_after`, but tracks the time of deallocation. It remains null if that address was not deallocated after we disabled tracking.
- `bt` is the id of the backtrace in the `bactraces` tables
- `size` of the allocation, in bytes
- `addr` of the allocation
- `alloc_thread`, the thread id of the thread were this allocation happened
- `dealloc_thread`, the thread id where this allocation was freed

So if I wanted to know what's the top 5 biggest allocations, I could simply do:
```
sqlite> SELECT * FROM allocations ORDER BY size DESC LIMIT 5;
alloc_after  dealloc_after  bt                   size  addr        alloc_thread  dealloc_thread
-----------  -------------  -------------------  ----  ----------  ------------  --------------
5188100667   5188101542     7413617783252415393  1028  5184202240  0             0
7235852000   7235852875     7413617783252415393  1028  5175808000  0             0
3657573917   3657574792     7413617783252415393  1027  5175808000  0             0
3697842417   3697843250     7413617783252415393  1027  5175808000  0             0
3697948875   3697949750     7413617783252415393  1027  5175808000  0             0
```

Now, the `backtraces` tables:

```
sqlite> SELECT * FROM backtraces LIMIT 1;
id                    frame_no  file                                                          line  sym                                                
--------------------  --------  ------------------------------------------------------------  ----  ---------------------------------------------------------
12859899604404670524  0         /Users/mpostma/.cargo/registry/src/index.crates.io-6f17d22bb  116   backtrace::backtrace::libunwind::trace::h4e12738fc424d2e6
                                a15001f/backtrace-0.3.74/src/backtrace/libunwind.rs 
```
Each row in the table represent a frame in a backtrace
- `id` is the id of the backtrace, all frames belonging to the same backtrace share the same id. Each id identifies a unique call location in the code.
- `frame_no` is, well, the number of the frame in that backtrace
- `file` is the file containing the symbol for that frame
- `line` is the line number in the `file` for that frame symbol
- `sym` is the actual symbol of the frame

Ok, let's see if we can find the call site for the string we allocate in `alloc_random_string_1`. In my file, this happens on `main.rs:14`, let's look for that:

```
sqlite> SELECT * FROM backtraces WHERE file like '%main.rs%' AND line = 14;
id                    frame_no  file                            line  sym
--------------------  --------  ------------------------------  ----  -----------------------------------------------
12859899604404670524  22        /private/tmp/rheap/src/main.rs  14    rheap::alloc_random_string_1::hdff30355f85537cf
```

NICE! We have a hit, let's print the full trace:

```
sqlite> sqlite> SELECT frame_no, sym FROM backtraces WHERE id = '12859899604404670524';
frame_no|sym
// ...
16|alloc::alloc::alloc::ha249d6f6decc7684
17|alloc::alloc::Global::alloc_impl::h4241c0e86c1ac201
18|<alloc::alloc::Global as core::alloc::Allocator>::allocate::h87ee1cd7432ecc7d
19|alloc::raw_vec::RawVecInner<A>::try_allocate_in::hc342c4e837d1ada9
20|alloc::raw_vec::RawVecInner<A>::with_capacity_in::h208964fd8497813c
21|alloc::raw_vec::RawVec<T,A>::with_capacity_in::hf96fd8a2d8ecdb17
22|rheap::alloc_random_string_1::hdff30355f85537cf
23|rheap::main::hd9803745442049e5
// ...
```

Yes that's it! `String::with_capacity` is probably inlined, which is why we get `RawVec::with_capacity` instead...

OK, let's now answer the question that's burning everyone's lips: what is the average size of the allocation of a string in from the `alloc_random_string_1`??

```
sqlite> SELECT avg(size), min(size), max(size) FROM allocations WHERE bt = '12859899604404670524';
avg(size)  min(size)  max(size)
---------  ---------  ---------
255.54804  118        386
```

(I even threw in min and max, because I'm so nice). Hey! That average is pretty much what we'd expect, wouldn't we?

Here I took it step by step for you, novice Visitor, but let's do a one-liner to get the stats for `alloc_random_string_1`:
```
sqlite> SELECT avg(size), min(size), max(size) FROM allocations where bt = (SELECT id FROM backtraces WHERE file LIKE '%main%' AND line = 22);
avg(size)         min(size)  max(size)
----------------  ---------  ---------
1023.75045851853  727        1344
```

Just like that.

As a final example, Visitor, let compute the total memory allocated for all these string, the average duration of those allocations (in ns), and the average size:
```
sqlite> SELECT sum(size), avg(size), avg(dealloc_after - alloc_after) as live_for FROM allocations, backtraces as bt WHERE bt.sym LIKE '%RawVec%';
sum(size)  avg(size)         live_for
---------  ----------------  ----------------
896831754  676.212135195414  1007.67419766379
```

There it is Visitor, next time you're debugging memory in rust, you should give rheaper a shot.

On a concluding note, rheaper has been put together in a busy Sunday afternoon. I'm sure there's a thousand ways to improve it, like building some nice UI on top of it, improving its performance, porting it to other languages... If you feel like contributing to the project, or just follow what's going on there, you can check it out at https://github.com/MarinPostma/rheaper

On another note, I'm note really the social media type, but I still enjoy a good chat. If you wanna say hi, you can join my [discord salon here](https://discord.gg/VYVZzqvc). Looking forward to chatting with you :)

Ah, yes, for those of you that I kept hanging this long with my memory leak, I did find it with rheaper in the end! I recorded execution for about an hour, and it then took me less than half an hour to locate the source of the issue.
