goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__61841 = arguments.length;
switch (G__61841) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61845 = (function (f,blockable,meta61846){
this.f = f;
this.blockable = blockable;
this.meta61846 = meta61846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61847,meta61846__$1){
var self__ = this;
var _61847__$1 = this;
return (new cljs.core.async.t_cljs$core$async61845(self__.f,self__.blockable,meta61846__$1));
}));

(cljs.core.async.t_cljs$core$async61845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61847){
var self__ = this;
var _61847__$1 = this;
return self__.meta61846;
}));

(cljs.core.async.t_cljs$core$async61845.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61845.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61845.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async61845.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async61845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta61846","meta61846",-1629283560,null)], null);
}));

(cljs.core.async.t_cljs$core$async61845.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61845");

(cljs.core.async.t_cljs$core$async61845.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async61845");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61845.
 */
cljs.core.async.__GT_t_cljs$core$async61845 = (function cljs$core$async$__GT_t_cljs$core$async61845(f__$1,blockable__$1,meta61846){
return (new cljs.core.async.t_cljs$core$async61845(f__$1,blockable__$1,meta61846));
});

}

return (new cljs.core.async.t_cljs$core$async61845(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__61893 = arguments.length;
switch (G__61893) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__61904 = arguments.length;
switch (G__61904) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__61912 = arguments.length;
switch (G__61912) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_63957 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_63957) : fn1.call(null,val_63957));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_63957) : fn1.call(null,val_63957));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__61927 = arguments.length;
switch (G__61927) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___63978 = n;
var x_63979 = (0);
while(true){
if((x_63979 < n__4666__auto___63978)){
(a[x_63979] = (0));

var G__63982 = (x_63979 + (1));
x_63979 = G__63982;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__63986 = (i + (1));
i = G__63986;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61952 = (function (flag,meta61953){
this.flag = flag;
this.meta61953 = meta61953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61954,meta61953__$1){
var self__ = this;
var _61954__$1 = this;
return (new cljs.core.async.t_cljs$core$async61952(self__.flag,meta61953__$1));
}));

(cljs.core.async.t_cljs$core$async61952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61954){
var self__ = this;
var _61954__$1 = this;
return self__.meta61953;
}));

(cljs.core.async.t_cljs$core$async61952.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async61952.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async61952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta61953","meta61953",-1537929271,null)], null);
}));

(cljs.core.async.t_cljs$core$async61952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61952");

(cljs.core.async.t_cljs$core$async61952.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async61952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61952.
 */
cljs.core.async.__GT_t_cljs$core$async61952 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async61952(flag__$1,meta61953){
return (new cljs.core.async.t_cljs$core$async61952(flag__$1,meta61953));
});

}

return (new cljs.core.async.t_cljs$core$async61952(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61961 = (function (flag,cb,meta61962){
this.flag = flag;
this.cb = cb;
this.meta61962 = meta61962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61963,meta61962__$1){
var self__ = this;
var _61963__$1 = this;
return (new cljs.core.async.t_cljs$core$async61961(self__.flag,self__.cb,meta61962__$1));
}));

(cljs.core.async.t_cljs$core$async61961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61963){
var self__ = this;
var _61963__$1 = this;
return self__.meta61962;
}));

(cljs.core.async.t_cljs$core$async61961.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async61961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async61961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta61962","meta61962",1539173680,null)], null);
}));

(cljs.core.async.t_cljs$core$async61961.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61961");

(cljs.core.async.t_cljs$core$async61961.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async61961");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61961.
 */
cljs.core.async.__GT_t_cljs$core$async61961 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async61961(flag__$1,cb__$1,meta61962){
return (new cljs.core.async.t_cljs$core$async61961(flag__$1,cb__$1,meta61962));
});

}

return (new cljs.core.async.t_cljs$core$async61961(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61966_SHARP_){
var G__61968 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61966_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61968) : fret.call(null,G__61968));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61967_SHARP_){
var G__61969 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61967_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61969) : fret.call(null,G__61969));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__64037 = (i + (1));
i = G__64037;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___64039 = arguments.length;
var i__4790__auto___64040 = (0);
while(true){
if((i__4790__auto___64040 < len__4789__auto___64039)){
args__4795__auto__.push((arguments[i__4790__auto___64040]));

var G__64042 = (i__4790__auto___64040 + (1));
i__4790__auto___64040 = G__64042;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__61973){
var map__61974 = p__61973;
var map__61974__$1 = (((((!((map__61974 == null))))?(((((map__61974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61974):map__61974);
var opts = map__61974__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq61971){
var G__61972 = cljs.core.first(seq61971);
var seq61971__$1 = cljs.core.next(seq61971);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61972,seq61971__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__61977 = arguments.length;
switch (G__61977) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__61745__auto___64065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_62038){
var state_val_62040 = (state_62038[(1)]);
if((state_val_62040 === (7))){
var inst_62025 = (state_62038[(2)]);
var state_62038__$1 = state_62038;
var statearr_62055_64077 = state_62038__$1;
(statearr_62055_64077[(2)] = inst_62025);

(statearr_62055_64077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62040 === (1))){
var state_62038__$1 = state_62038;
var statearr_62057_64080 = state_62038__$1;
(statearr_62057_64080[(2)] = null);

(statearr_62057_64080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62040 === (4))){
var inst_61992 = (state_62038[(7)]);
var inst_61992__$1 = (state_62038[(2)]);
var inst_62002 = (inst_61992__$1 == null);
var state_62038__$1 = (function (){var statearr_62058 = state_62038;
(statearr_62058[(7)] = inst_61992__$1);

return statearr_62058;
})();
if(cljs.core.truth_(inst_62002)){
var statearr_62059_64081 = state_62038__$1;
(statearr_62059_64081[(1)] = (5));

} else {
var statearr_62060_64082 = state_62038__$1;
(statearr_62060_64082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62040 === (13))){
var state_62038__$1 = state_62038;
var statearr_62061_64086 = state_62038__$1;
(statearr_62061_64086[(2)] = null);

(statearr_62061_64086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62040 === (6))){
var inst_61992 = (state_62038[(7)]);
var state_62038__$1 = state_62038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62038__$1,(11),to,inst_61992);
} else {
if((state_val_62040 === (3))){
var inst_62030 = (state_62038[(2)]);
var state_62038__$1 = state_62038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62038__$1,inst_62030);
} else {
if((state_val_62040 === (12))){
var state_62038__$1 = state_62038;
var statearr_62062_64093 = state_62038__$1;
(statearr_62062_64093[(2)] = null);

(statearr_62062_64093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62040 === (2))){
var state_62038__$1 = state_62038;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62038__$1,(4),from);
} else {
if((state_val_62040 === (11))){
var inst_62015 = (state_62038[(2)]);
var state_62038__$1 = state_62038;
if(cljs.core.truth_(inst_62015)){
var statearr_62064_64094 = state_62038__$1;
(statearr_62064_64094[(1)] = (12));

} else {
var statearr_62065_64095 = state_62038__$1;
(statearr_62065_64095[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62040 === (9))){
var state_62038__$1 = state_62038;
var statearr_62066_64096 = state_62038__$1;
(statearr_62066_64096[(2)] = null);

(statearr_62066_64096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62040 === (5))){
var state_62038__$1 = state_62038;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62067_64097 = state_62038__$1;
(statearr_62067_64097[(1)] = (8));

} else {
var statearr_62068_64098 = state_62038__$1;
(statearr_62068_64098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62040 === (14))){
var inst_62023 = (state_62038[(2)]);
var state_62038__$1 = state_62038;
var statearr_62069_64099 = state_62038__$1;
(statearr_62069_64099[(2)] = inst_62023);

(statearr_62069_64099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62040 === (10))){
var inst_62012 = (state_62038[(2)]);
var state_62038__$1 = state_62038;
var statearr_62070_64100 = state_62038__$1;
(statearr_62070_64100[(2)] = inst_62012);

(statearr_62070_64100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62040 === (8))){
var inst_62009 = cljs.core.async.close_BANG_(to);
var state_62038__$1 = state_62038;
var statearr_62071_64101 = state_62038__$1;
(statearr_62071_64101[(2)] = inst_62009);

(statearr_62071_64101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61262__auto__ = null;
var cljs$core$async$state_machine__61262__auto____0 = (function (){
var statearr_62072 = [null,null,null,null,null,null,null,null];
(statearr_62072[(0)] = cljs$core$async$state_machine__61262__auto__);

(statearr_62072[(1)] = (1));

return statearr_62072;
});
var cljs$core$async$state_machine__61262__auto____1 = (function (state_62038){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_62038);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e62073){if((e62073 instanceof Object)){
var ex__61265__auto__ = e62073;
var statearr_62074_64102 = state_62038;
(statearr_62074_64102[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62073;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64104 = state_62038;
state_62038 = G__64104;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$state_machine__61262__auto__ = function(state_62038){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61262__auto____1.call(this,state_62038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61262__auto____0;
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61262__auto____1;
return cljs$core$async$state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_62075 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_62075[(6)] = c__61745__auto___64065);

return statearr_62075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__62076){
var vec__62077 = p__62076;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62077,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62077,(1),null);
var job = vec__62077;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__61745__auto___64112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_62084){
var state_val_62085 = (state_62084[(1)]);
if((state_val_62085 === (1))){
var state_62084__$1 = state_62084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62084__$1,(2),res,v);
} else {
if((state_val_62085 === (2))){
var inst_62081 = (state_62084[(2)]);
var inst_62082 = cljs.core.async.close_BANG_(res);
var state_62084__$1 = (function (){var statearr_62086 = state_62084;
(statearr_62086[(7)] = inst_62081);

return statearr_62086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62084__$1,inst_62082);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0 = (function (){
var statearr_62087 = [null,null,null,null,null,null,null,null];
(statearr_62087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__);

(statearr_62087[(1)] = (1));

return statearr_62087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1 = (function (state_62084){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_62084);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e62088){if((e62088 instanceof Object)){
var ex__61265__auto__ = e62088;
var statearr_62089_64116 = state_62084;
(statearr_62089_64116[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62088;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64117 = state_62084;
state_62084 = G__64117;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__ = function(state_62084){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1.call(this,state_62084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_62090 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_62090[(6)] = c__61745__auto___64112);

return statearr_62090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__62091){
var vec__62092 = p__62091;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62092,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62092,(1),null);
var job = vec__62092;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___64118 = n;
var __64119 = (0);
while(true){
if((__64119 < n__4666__auto___64118)){
var G__62095_64122 = type;
var G__62095_64123__$1 = (((G__62095_64122 instanceof cljs.core.Keyword))?G__62095_64122.fqn:null);
switch (G__62095_64123__$1) {
case "compute":
var c__61745__auto___64126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64119,c__61745__auto___64126,G__62095_64122,G__62095_64123__$1,n__4666__auto___64118,jobs,results,process,async){
return (function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = ((function (__64119,c__61745__auto___64126,G__62095_64122,G__62095_64123__$1,n__4666__auto___64118,jobs,results,process,async){
return (function (state_62110){
var state_val_62111 = (state_62110[(1)]);
if((state_val_62111 === (1))){
var state_62110__$1 = state_62110;
var statearr_62116_64127 = state_62110__$1;
(statearr_62116_64127[(2)] = null);

(statearr_62116_64127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (2))){
var state_62110__$1 = state_62110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62110__$1,(4),jobs);
} else {
if((state_val_62111 === (3))){
var inst_62108 = (state_62110[(2)]);
var state_62110__$1 = state_62110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62110__$1,inst_62108);
} else {
if((state_val_62111 === (4))){
var inst_62098 = (state_62110[(2)]);
var inst_62099 = process(inst_62098);
var state_62110__$1 = state_62110;
if(cljs.core.truth_(inst_62099)){
var statearr_62121_64130 = state_62110__$1;
(statearr_62121_64130[(1)] = (5));

} else {
var statearr_62122_64131 = state_62110__$1;
(statearr_62122_64131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (5))){
var state_62110__$1 = state_62110;
var statearr_62124_64134 = state_62110__$1;
(statearr_62124_64134[(2)] = null);

(statearr_62124_64134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (6))){
var state_62110__$1 = state_62110;
var statearr_62129_64137 = state_62110__$1;
(statearr_62129_64137[(2)] = null);

(statearr_62129_64137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (7))){
var inst_62106 = (state_62110[(2)]);
var state_62110__$1 = state_62110;
var statearr_62130_64139 = state_62110__$1;
(statearr_62130_64139[(2)] = inst_62106);

(statearr_62130_64139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__64119,c__61745__auto___64126,G__62095_64122,G__62095_64123__$1,n__4666__auto___64118,jobs,results,process,async))
;
return ((function (__64119,switch__61261__auto__,c__61745__auto___64126,G__62095_64122,G__62095_64123__$1,n__4666__auto___64118,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0 = (function (){
var statearr_62133 = [null,null,null,null,null,null,null];
(statearr_62133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__);

(statearr_62133[(1)] = (1));

return statearr_62133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1 = (function (state_62110){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_62110);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e62137){if((e62137 instanceof Object)){
var ex__61265__auto__ = e62137;
var statearr_62138_64145 = state_62110;
(statearr_62138_64145[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64146 = state_62110;
state_62110 = G__64146;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__ = function(state_62110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1.call(this,state_62110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__;
})()
;})(__64119,switch__61261__auto__,c__61745__auto___64126,G__62095_64122,G__62095_64123__$1,n__4666__auto___64118,jobs,results,process,async))
})();
var state__61747__auto__ = (function (){var statearr_62140 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_62140[(6)] = c__61745__auto___64126);

return statearr_62140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
});})(__64119,c__61745__auto___64126,G__62095_64122,G__62095_64123__$1,n__4666__auto___64118,jobs,results,process,async))
);


break;
case "async":
var c__61745__auto___64149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__64119,c__61745__auto___64149,G__62095_64122,G__62095_64123__$1,n__4666__auto___64118,jobs,results,process,async){
return (function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = ((function (__64119,c__61745__auto___64149,G__62095_64122,G__62095_64123__$1,n__4666__auto___64118,jobs,results,process,async){
return (function (state_62157){
var state_val_62158 = (state_62157[(1)]);
if((state_val_62158 === (1))){
var state_62157__$1 = state_62157;
var statearr_62162_64151 = state_62157__$1;
(statearr_62162_64151[(2)] = null);

(statearr_62162_64151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62158 === (2))){
var state_62157__$1 = state_62157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62157__$1,(4),jobs);
} else {
if((state_val_62158 === (3))){
var inst_62155 = (state_62157[(2)]);
var state_62157__$1 = state_62157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62157__$1,inst_62155);
} else {
if((state_val_62158 === (4))){
var inst_62145 = (state_62157[(2)]);
var inst_62148 = async(inst_62145);
var state_62157__$1 = state_62157;
if(cljs.core.truth_(inst_62148)){
var statearr_62170_64152 = state_62157__$1;
(statearr_62170_64152[(1)] = (5));

} else {
var statearr_62171_64153 = state_62157__$1;
(statearr_62171_64153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62158 === (5))){
var state_62157__$1 = state_62157;
var statearr_62172_64155 = state_62157__$1;
(statearr_62172_64155[(2)] = null);

(statearr_62172_64155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62158 === (6))){
var state_62157__$1 = state_62157;
var statearr_62174_64157 = state_62157__$1;
(statearr_62174_64157[(2)] = null);

(statearr_62174_64157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62158 === (7))){
var inst_62153 = (state_62157[(2)]);
var state_62157__$1 = state_62157;
var statearr_62179_64158 = state_62157__$1;
(statearr_62179_64158[(2)] = inst_62153);

(statearr_62179_64158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__64119,c__61745__auto___64149,G__62095_64122,G__62095_64123__$1,n__4666__auto___64118,jobs,results,process,async))
;
return ((function (__64119,switch__61261__auto__,c__61745__auto___64149,G__62095_64122,G__62095_64123__$1,n__4666__auto___64118,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0 = (function (){
var statearr_62181 = [null,null,null,null,null,null,null];
(statearr_62181[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__);

(statearr_62181[(1)] = (1));

return statearr_62181;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1 = (function (state_62157){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_62157);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e62183){if((e62183 instanceof Object)){
var ex__61265__auto__ = e62183;
var statearr_62184_64159 = state_62157;
(statearr_62184_64159[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62183;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64161 = state_62157;
state_62157 = G__64161;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__ = function(state_62157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1.call(this,state_62157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__;
})()
;})(__64119,switch__61261__auto__,c__61745__auto___64149,G__62095_64122,G__62095_64123__$1,n__4666__auto___64118,jobs,results,process,async))
})();
var state__61747__auto__ = (function (){var statearr_62189 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_62189[(6)] = c__61745__auto___64149);

return statearr_62189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
});})(__64119,c__61745__auto___64149,G__62095_64122,G__62095_64123__$1,n__4666__auto___64118,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62095_64123__$1)].join('')));

}

var G__64163 = (__64119 + (1));
__64119 = G__64163;
continue;
} else {
}
break;
}

var c__61745__auto___64166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_62221){
var state_val_62222 = (state_62221[(1)]);
if((state_val_62222 === (7))){
var inst_62215 = (state_62221[(2)]);
var state_62221__$1 = state_62221;
var statearr_62230_64169 = state_62221__$1;
(statearr_62230_64169[(2)] = inst_62215);

(statearr_62230_64169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62222 === (1))){
var state_62221__$1 = state_62221;
var statearr_62232_64170 = state_62221__$1;
(statearr_62232_64170[(2)] = null);

(statearr_62232_64170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62222 === (4))){
var inst_62199 = (state_62221[(7)]);
var inst_62199__$1 = (state_62221[(2)]);
var inst_62200 = (inst_62199__$1 == null);
var state_62221__$1 = (function (){var statearr_62237 = state_62221;
(statearr_62237[(7)] = inst_62199__$1);

return statearr_62237;
})();
if(cljs.core.truth_(inst_62200)){
var statearr_62238_64178 = state_62221__$1;
(statearr_62238_64178[(1)] = (5));

} else {
var statearr_62239_64179 = state_62221__$1;
(statearr_62239_64179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62222 === (6))){
var inst_62204 = (state_62221[(8)]);
var inst_62199 = (state_62221[(7)]);
var inst_62204__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_62206 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62207 = [inst_62199,inst_62204__$1];
var inst_62208 = (new cljs.core.PersistentVector(null,2,(5),inst_62206,inst_62207,null));
var state_62221__$1 = (function (){var statearr_62243 = state_62221;
(statearr_62243[(8)] = inst_62204__$1);

return statearr_62243;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62221__$1,(8),jobs,inst_62208);
} else {
if((state_val_62222 === (3))){
var inst_62217 = (state_62221[(2)]);
var state_62221__$1 = state_62221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62221__$1,inst_62217);
} else {
if((state_val_62222 === (2))){
var state_62221__$1 = state_62221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62221__$1,(4),from);
} else {
if((state_val_62222 === (9))){
var inst_62212 = (state_62221[(2)]);
var state_62221__$1 = (function (){var statearr_62247 = state_62221;
(statearr_62247[(9)] = inst_62212);

return statearr_62247;
})();
var statearr_62250_64189 = state_62221__$1;
(statearr_62250_64189[(2)] = null);

(statearr_62250_64189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62222 === (5))){
var inst_62202 = cljs.core.async.close_BANG_(jobs);
var state_62221__$1 = state_62221;
var statearr_62253_64192 = state_62221__$1;
(statearr_62253_64192[(2)] = inst_62202);

(statearr_62253_64192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62222 === (8))){
var inst_62204 = (state_62221[(8)]);
var inst_62210 = (state_62221[(2)]);
var state_62221__$1 = (function (){var statearr_62254 = state_62221;
(statearr_62254[(10)] = inst_62210);

return statearr_62254;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62221__$1,(9),results,inst_62204);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0 = (function (){
var statearr_62260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62260[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__);

(statearr_62260[(1)] = (1));

return statearr_62260;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1 = (function (state_62221){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_62221);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e62261){if((e62261 instanceof Object)){
var ex__61265__auto__ = e62261;
var statearr_62262_64194 = state_62221;
(statearr_62262_64194[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64195 = state_62221;
state_62221 = G__64195;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__ = function(state_62221){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1.call(this,state_62221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_62263 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_62263[(6)] = c__61745__auto___64166);

return statearr_62263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


var c__61745__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_62301){
var state_val_62302 = (state_62301[(1)]);
if((state_val_62302 === (7))){
var inst_62297 = (state_62301[(2)]);
var state_62301__$1 = state_62301;
var statearr_62305_64201 = state_62301__$1;
(statearr_62305_64201[(2)] = inst_62297);

(statearr_62305_64201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (20))){
var state_62301__$1 = state_62301;
var statearr_62308_64202 = state_62301__$1;
(statearr_62308_64202[(2)] = null);

(statearr_62308_64202[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (1))){
var state_62301__$1 = state_62301;
var statearr_62310_64203 = state_62301__$1;
(statearr_62310_64203[(2)] = null);

(statearr_62310_64203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (4))){
var inst_62266 = (state_62301[(7)]);
var inst_62266__$1 = (state_62301[(2)]);
var inst_62267 = (inst_62266__$1 == null);
var state_62301__$1 = (function (){var statearr_62312 = state_62301;
(statearr_62312[(7)] = inst_62266__$1);

return statearr_62312;
})();
if(cljs.core.truth_(inst_62267)){
var statearr_62313_64208 = state_62301__$1;
(statearr_62313_64208[(1)] = (5));

} else {
var statearr_62314_64212 = state_62301__$1;
(statearr_62314_64212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (15))){
var inst_62279 = (state_62301[(8)]);
var state_62301__$1 = state_62301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62301__$1,(18),to,inst_62279);
} else {
if((state_val_62302 === (21))){
var inst_62292 = (state_62301[(2)]);
var state_62301__$1 = state_62301;
var statearr_62315_64213 = state_62301__$1;
(statearr_62315_64213[(2)] = inst_62292);

(statearr_62315_64213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (13))){
var inst_62294 = (state_62301[(2)]);
var state_62301__$1 = (function (){var statearr_62316 = state_62301;
(statearr_62316[(9)] = inst_62294);

return statearr_62316;
})();
var statearr_62317_64217 = state_62301__$1;
(statearr_62317_64217[(2)] = null);

(statearr_62317_64217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (6))){
var inst_62266 = (state_62301[(7)]);
var state_62301__$1 = state_62301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62301__$1,(11),inst_62266);
} else {
if((state_val_62302 === (17))){
var inst_62287 = (state_62301[(2)]);
var state_62301__$1 = state_62301;
if(cljs.core.truth_(inst_62287)){
var statearr_62318_64218 = state_62301__$1;
(statearr_62318_64218[(1)] = (19));

} else {
var statearr_62319_64219 = state_62301__$1;
(statearr_62319_64219[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (3))){
var inst_62299 = (state_62301[(2)]);
var state_62301__$1 = state_62301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62301__$1,inst_62299);
} else {
if((state_val_62302 === (12))){
var inst_62276 = (state_62301[(10)]);
var state_62301__$1 = state_62301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62301__$1,(14),inst_62276);
} else {
if((state_val_62302 === (2))){
var state_62301__$1 = state_62301;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62301__$1,(4),results);
} else {
if((state_val_62302 === (19))){
var state_62301__$1 = state_62301;
var statearr_62320_64223 = state_62301__$1;
(statearr_62320_64223[(2)] = null);

(statearr_62320_64223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (11))){
var inst_62276 = (state_62301[(2)]);
var state_62301__$1 = (function (){var statearr_62321 = state_62301;
(statearr_62321[(10)] = inst_62276);

return statearr_62321;
})();
var statearr_62322_64230 = state_62301__$1;
(statearr_62322_64230[(2)] = null);

(statearr_62322_64230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (9))){
var state_62301__$1 = state_62301;
var statearr_62323_64232 = state_62301__$1;
(statearr_62323_64232[(2)] = null);

(statearr_62323_64232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (5))){
var state_62301__$1 = state_62301;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62324_64235 = state_62301__$1;
(statearr_62324_64235[(1)] = (8));

} else {
var statearr_62325_64238 = state_62301__$1;
(statearr_62325_64238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (14))){
var inst_62279 = (state_62301[(8)]);
var inst_62279__$1 = (state_62301[(2)]);
var inst_62280 = (inst_62279__$1 == null);
var inst_62281 = cljs.core.not(inst_62280);
var state_62301__$1 = (function (){var statearr_62326 = state_62301;
(statearr_62326[(8)] = inst_62279__$1);

return statearr_62326;
})();
if(inst_62281){
var statearr_62327_64241 = state_62301__$1;
(statearr_62327_64241[(1)] = (15));

} else {
var statearr_62328_64242 = state_62301__$1;
(statearr_62328_64242[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (16))){
var state_62301__$1 = state_62301;
var statearr_62329_64243 = state_62301__$1;
(statearr_62329_64243[(2)] = false);

(statearr_62329_64243[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (10))){
var inst_62273 = (state_62301[(2)]);
var state_62301__$1 = state_62301;
var statearr_62333_64247 = state_62301__$1;
(statearr_62333_64247[(2)] = inst_62273);

(statearr_62333_64247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (18))){
var inst_62284 = (state_62301[(2)]);
var state_62301__$1 = state_62301;
var statearr_62334_64248 = state_62301__$1;
(statearr_62334_64248[(2)] = inst_62284);

(statearr_62334_64248[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62302 === (8))){
var inst_62270 = cljs.core.async.close_BANG_(to);
var state_62301__$1 = state_62301;
var statearr_62335_64254 = state_62301__$1;
(statearr_62335_64254[(2)] = inst_62270);

(statearr_62335_64254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0 = (function (){
var statearr_62339 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__);

(statearr_62339[(1)] = (1));

return statearr_62339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1 = (function (state_62301){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_62301);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e62340){if((e62340 instanceof Object)){
var ex__61265__auto__ = e62340;
var statearr_62341_64262 = state_62301;
(statearr_62341_64262[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62340;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64263 = state_62301;
state_62301 = G__64263;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__ = function(state_62301){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1.call(this,state_62301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__61262__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_62342 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_62342[(6)] = c__61745__auto__);

return statearr_62342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));

return c__61745__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__62345 = arguments.length;
switch (G__62345) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__62352 = arguments.length;
switch (G__62352) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__62356 = arguments.length;
switch (G__62356) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__61745__auto___64306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_62383){
var state_val_62384 = (state_62383[(1)]);
if((state_val_62384 === (7))){
var inst_62379 = (state_62383[(2)]);
var state_62383__$1 = state_62383;
var statearr_62385_64310 = state_62383__$1;
(statearr_62385_64310[(2)] = inst_62379);

(statearr_62385_64310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62384 === (1))){
var state_62383__$1 = state_62383;
var statearr_62388_64314 = state_62383__$1;
(statearr_62388_64314[(2)] = null);

(statearr_62388_64314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62384 === (4))){
var inst_62360 = (state_62383[(7)]);
var inst_62360__$1 = (state_62383[(2)]);
var inst_62361 = (inst_62360__$1 == null);
var state_62383__$1 = (function (){var statearr_62390 = state_62383;
(statearr_62390[(7)] = inst_62360__$1);

return statearr_62390;
})();
if(cljs.core.truth_(inst_62361)){
var statearr_62393_64318 = state_62383__$1;
(statearr_62393_64318[(1)] = (5));

} else {
var statearr_62394_64319 = state_62383__$1;
(statearr_62394_64319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62384 === (13))){
var state_62383__$1 = state_62383;
var statearr_62396_64320 = state_62383__$1;
(statearr_62396_64320[(2)] = null);

(statearr_62396_64320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62384 === (6))){
var inst_62360 = (state_62383[(7)]);
var inst_62366 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62360) : p.call(null,inst_62360));
var state_62383__$1 = state_62383;
if(cljs.core.truth_(inst_62366)){
var statearr_62397_64322 = state_62383__$1;
(statearr_62397_64322[(1)] = (9));

} else {
var statearr_62398_64323 = state_62383__$1;
(statearr_62398_64323[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62384 === (3))){
var inst_62381 = (state_62383[(2)]);
var state_62383__$1 = state_62383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62383__$1,inst_62381);
} else {
if((state_val_62384 === (12))){
var state_62383__$1 = state_62383;
var statearr_62399_64325 = state_62383__$1;
(statearr_62399_64325[(2)] = null);

(statearr_62399_64325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62384 === (2))){
var state_62383__$1 = state_62383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62383__$1,(4),ch);
} else {
if((state_val_62384 === (11))){
var inst_62360 = (state_62383[(7)]);
var inst_62370 = (state_62383[(2)]);
var state_62383__$1 = state_62383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62383__$1,(8),inst_62370,inst_62360);
} else {
if((state_val_62384 === (9))){
var state_62383__$1 = state_62383;
var statearr_62402_64333 = state_62383__$1;
(statearr_62402_64333[(2)] = tc);

(statearr_62402_64333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62384 === (5))){
var inst_62363 = cljs.core.async.close_BANG_(tc);
var inst_62364 = cljs.core.async.close_BANG_(fc);
var state_62383__$1 = (function (){var statearr_62403 = state_62383;
(statearr_62403[(8)] = inst_62363);

return statearr_62403;
})();
var statearr_62404_64337 = state_62383__$1;
(statearr_62404_64337[(2)] = inst_62364);

(statearr_62404_64337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62384 === (14))){
var inst_62377 = (state_62383[(2)]);
var state_62383__$1 = state_62383;
var statearr_62405_64338 = state_62383__$1;
(statearr_62405_64338[(2)] = inst_62377);

(statearr_62405_64338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62384 === (10))){
var state_62383__$1 = state_62383;
var statearr_62406_64339 = state_62383__$1;
(statearr_62406_64339[(2)] = fc);

(statearr_62406_64339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62384 === (8))){
var inst_62372 = (state_62383[(2)]);
var state_62383__$1 = state_62383;
if(cljs.core.truth_(inst_62372)){
var statearr_62407_64342 = state_62383__$1;
(statearr_62407_64342[(1)] = (12));

} else {
var statearr_62408_64346 = state_62383__$1;
(statearr_62408_64346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61262__auto__ = null;
var cljs$core$async$state_machine__61262__auto____0 = (function (){
var statearr_62414 = [null,null,null,null,null,null,null,null,null];
(statearr_62414[(0)] = cljs$core$async$state_machine__61262__auto__);

(statearr_62414[(1)] = (1));

return statearr_62414;
});
var cljs$core$async$state_machine__61262__auto____1 = (function (state_62383){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_62383);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e62415){if((e62415 instanceof Object)){
var ex__61265__auto__ = e62415;
var statearr_62420_64349 = state_62383;
(statearr_62420_64349[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62415;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64350 = state_62383;
state_62383 = G__64350;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$state_machine__61262__auto__ = function(state_62383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61262__auto____1.call(this,state_62383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61262__auto____0;
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61262__auto____1;
return cljs$core$async$state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_62422 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_62422[(6)] = c__61745__auto___64306);

return statearr_62422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__61745__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_62456){
var state_val_62457 = (state_62456[(1)]);
if((state_val_62457 === (7))){
var inst_62452 = (state_62456[(2)]);
var state_62456__$1 = state_62456;
var statearr_62463_64353 = state_62456__$1;
(statearr_62463_64353[(2)] = inst_62452);

(statearr_62463_64353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62457 === (1))){
var inst_62432 = init;
var state_62456__$1 = (function (){var statearr_62464 = state_62456;
(statearr_62464[(7)] = inst_62432);

return statearr_62464;
})();
var statearr_62465_64354 = state_62456__$1;
(statearr_62465_64354[(2)] = null);

(statearr_62465_64354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62457 === (4))){
var inst_62435 = (state_62456[(8)]);
var inst_62435__$1 = (state_62456[(2)]);
var inst_62436 = (inst_62435__$1 == null);
var state_62456__$1 = (function (){var statearr_62466 = state_62456;
(statearr_62466[(8)] = inst_62435__$1);

return statearr_62466;
})();
if(cljs.core.truth_(inst_62436)){
var statearr_62467_64358 = state_62456__$1;
(statearr_62467_64358[(1)] = (5));

} else {
var statearr_62468_64359 = state_62456__$1;
(statearr_62468_64359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62457 === (6))){
var inst_62443 = (state_62456[(9)]);
var inst_62435 = (state_62456[(8)]);
var inst_62432 = (state_62456[(7)]);
var inst_62443__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_62432,inst_62435) : f.call(null,inst_62432,inst_62435));
var inst_62444 = cljs.core.reduced_QMARK_(inst_62443__$1);
var state_62456__$1 = (function (){var statearr_62469 = state_62456;
(statearr_62469[(9)] = inst_62443__$1);

return statearr_62469;
})();
if(inst_62444){
var statearr_62470_64370 = state_62456__$1;
(statearr_62470_64370[(1)] = (8));

} else {
var statearr_62471_64372 = state_62456__$1;
(statearr_62471_64372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62457 === (3))){
var inst_62454 = (state_62456[(2)]);
var state_62456__$1 = state_62456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62456__$1,inst_62454);
} else {
if((state_val_62457 === (2))){
var state_62456__$1 = state_62456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62456__$1,(4),ch);
} else {
if((state_val_62457 === (9))){
var inst_62443 = (state_62456[(9)]);
var inst_62432 = inst_62443;
var state_62456__$1 = (function (){var statearr_62472 = state_62456;
(statearr_62472[(7)] = inst_62432);

return statearr_62472;
})();
var statearr_62473_64375 = state_62456__$1;
(statearr_62473_64375[(2)] = null);

(statearr_62473_64375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62457 === (5))){
var inst_62432 = (state_62456[(7)]);
var state_62456__$1 = state_62456;
var statearr_62476_64376 = state_62456__$1;
(statearr_62476_64376[(2)] = inst_62432);

(statearr_62476_64376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62457 === (10))){
var inst_62450 = (state_62456[(2)]);
var state_62456__$1 = state_62456;
var statearr_62478_64377 = state_62456__$1;
(statearr_62478_64377[(2)] = inst_62450);

(statearr_62478_64377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62457 === (8))){
var inst_62443 = (state_62456[(9)]);
var inst_62446 = cljs.core.deref(inst_62443);
var state_62456__$1 = state_62456;
var statearr_62479_64379 = state_62456__$1;
(statearr_62479_64379[(2)] = inst_62446);

(statearr_62479_64379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__61262__auto__ = null;
var cljs$core$async$reduce_$_state_machine__61262__auto____0 = (function (){
var statearr_62480 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62480[(0)] = cljs$core$async$reduce_$_state_machine__61262__auto__);

(statearr_62480[(1)] = (1));

return statearr_62480;
});
var cljs$core$async$reduce_$_state_machine__61262__auto____1 = (function (state_62456){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_62456);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e62481){if((e62481 instanceof Object)){
var ex__61265__auto__ = e62481;
var statearr_62482_64387 = state_62456;
(statearr_62482_64387[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64393 = state_62456;
state_62456 = G__64393;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__61262__auto__ = function(state_62456){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__61262__auto____1.call(this,state_62456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__61262__auto____0;
cljs$core$async$reduce_$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__61262__auto____1;
return cljs$core$async$reduce_$_state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_62483 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_62483[(6)] = c__61745__auto__);

return statearr_62483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));

return c__61745__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__61745__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_62490){
var state_val_62491 = (state_62490[(1)]);
if((state_val_62491 === (1))){
var inst_62485 = cljs.core.async.reduce(f__$1,init,ch);
var state_62490__$1 = state_62490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62490__$1,(2),inst_62485);
} else {
if((state_val_62491 === (2))){
var inst_62487 = (state_62490[(2)]);
var inst_62488 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_62487) : f__$1.call(null,inst_62487));
var state_62490__$1 = state_62490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62490__$1,inst_62488);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__61262__auto__ = null;
var cljs$core$async$transduce_$_state_machine__61262__auto____0 = (function (){
var statearr_62492 = [null,null,null,null,null,null,null];
(statearr_62492[(0)] = cljs$core$async$transduce_$_state_machine__61262__auto__);

(statearr_62492[(1)] = (1));

return statearr_62492;
});
var cljs$core$async$transduce_$_state_machine__61262__auto____1 = (function (state_62490){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_62490);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e62493){if((e62493 instanceof Object)){
var ex__61265__auto__ = e62493;
var statearr_62494_64411 = state_62490;
(statearr_62494_64411[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64414 = state_62490;
state_62490 = G__64414;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__61262__auto__ = function(state_62490){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__61262__auto____1.call(this,state_62490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__61262__auto____0;
cljs$core$async$transduce_$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__61262__auto____1;
return cljs$core$async$transduce_$_state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_62495 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_62495[(6)] = c__61745__auto__);

return statearr_62495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));

return c__61745__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__62497 = arguments.length;
switch (G__62497) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__61745__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_62522){
var state_val_62523 = (state_62522[(1)]);
if((state_val_62523 === (7))){
var inst_62504 = (state_62522[(2)]);
var state_62522__$1 = state_62522;
var statearr_62524_64418 = state_62522__$1;
(statearr_62524_64418[(2)] = inst_62504);

(statearr_62524_64418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62523 === (1))){
var inst_62498 = cljs.core.seq(coll);
var inst_62499 = inst_62498;
var state_62522__$1 = (function (){var statearr_62525 = state_62522;
(statearr_62525[(7)] = inst_62499);

return statearr_62525;
})();
var statearr_62526_64423 = state_62522__$1;
(statearr_62526_64423[(2)] = null);

(statearr_62526_64423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62523 === (4))){
var inst_62499 = (state_62522[(7)]);
var inst_62502 = cljs.core.first(inst_62499);
var state_62522__$1 = state_62522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62522__$1,(7),ch,inst_62502);
} else {
if((state_val_62523 === (13))){
var inst_62516 = (state_62522[(2)]);
var state_62522__$1 = state_62522;
var statearr_62527_64430 = state_62522__$1;
(statearr_62527_64430[(2)] = inst_62516);

(statearr_62527_64430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62523 === (6))){
var inst_62507 = (state_62522[(2)]);
var state_62522__$1 = state_62522;
if(cljs.core.truth_(inst_62507)){
var statearr_62528_64431 = state_62522__$1;
(statearr_62528_64431[(1)] = (8));

} else {
var statearr_62529_64435 = state_62522__$1;
(statearr_62529_64435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62523 === (3))){
var inst_62520 = (state_62522[(2)]);
var state_62522__$1 = state_62522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62522__$1,inst_62520);
} else {
if((state_val_62523 === (12))){
var state_62522__$1 = state_62522;
var statearr_62534_64440 = state_62522__$1;
(statearr_62534_64440[(2)] = null);

(statearr_62534_64440[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62523 === (2))){
var inst_62499 = (state_62522[(7)]);
var state_62522__$1 = state_62522;
if(cljs.core.truth_(inst_62499)){
var statearr_62536_64441 = state_62522__$1;
(statearr_62536_64441[(1)] = (4));

} else {
var statearr_62537_64442 = state_62522__$1;
(statearr_62537_64442[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62523 === (11))){
var inst_62513 = cljs.core.async.close_BANG_(ch);
var state_62522__$1 = state_62522;
var statearr_62538_64444 = state_62522__$1;
(statearr_62538_64444[(2)] = inst_62513);

(statearr_62538_64444[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62523 === (9))){
var state_62522__$1 = state_62522;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62539_64445 = state_62522__$1;
(statearr_62539_64445[(1)] = (11));

} else {
var statearr_62540_64447 = state_62522__$1;
(statearr_62540_64447[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62523 === (5))){
var inst_62499 = (state_62522[(7)]);
var state_62522__$1 = state_62522;
var statearr_62541_64451 = state_62522__$1;
(statearr_62541_64451[(2)] = inst_62499);

(statearr_62541_64451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62523 === (10))){
var inst_62518 = (state_62522[(2)]);
var state_62522__$1 = state_62522;
var statearr_62542_64458 = state_62522__$1;
(statearr_62542_64458[(2)] = inst_62518);

(statearr_62542_64458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62523 === (8))){
var inst_62499 = (state_62522[(7)]);
var inst_62509 = cljs.core.next(inst_62499);
var inst_62499__$1 = inst_62509;
var state_62522__$1 = (function (){var statearr_62543 = state_62522;
(statearr_62543[(7)] = inst_62499__$1);

return statearr_62543;
})();
var statearr_62544_64459 = state_62522__$1;
(statearr_62544_64459[(2)] = null);

(statearr_62544_64459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61262__auto__ = null;
var cljs$core$async$state_machine__61262__auto____0 = (function (){
var statearr_62545 = [null,null,null,null,null,null,null,null];
(statearr_62545[(0)] = cljs$core$async$state_machine__61262__auto__);

(statearr_62545[(1)] = (1));

return statearr_62545;
});
var cljs$core$async$state_machine__61262__auto____1 = (function (state_62522){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_62522);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e62546){if((e62546 instanceof Object)){
var ex__61265__auto__ = e62546;
var statearr_62547_64471 = state_62522;
(statearr_62547_64471[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62546;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64473 = state_62522;
state_62522 = G__64473;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$state_machine__61262__auto__ = function(state_62522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61262__auto____1.call(this,state_62522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61262__auto____0;
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61262__auto____1;
return cljs$core$async$state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_62548 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_62548[(6)] = c__61745__auto__);

return statearr_62548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));

return c__61745__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62556 = (function (ch,cs,meta62557){
this.ch = ch;
this.cs = cs;
this.meta62557 = meta62557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62558,meta62557__$1){
var self__ = this;
var _62558__$1 = this;
return (new cljs.core.async.t_cljs$core$async62556(self__.ch,self__.cs,meta62557__$1));
}));

(cljs.core.async.t_cljs$core$async62556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62558){
var self__ = this;
var _62558__$1 = this;
return self__.meta62557;
}));

(cljs.core.async.t_cljs$core$async62556.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62556.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async62556.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62556.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async62556.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async62556.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async62556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta62557","meta62557",1005288247,null)], null);
}));

(cljs.core.async.t_cljs$core$async62556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62556");

(cljs.core.async.t_cljs$core$async62556.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async62556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62556.
 */
cljs.core.async.__GT_t_cljs$core$async62556 = (function cljs$core$async$mult_$___GT_t_cljs$core$async62556(ch__$1,cs__$1,meta62557){
return (new cljs.core.async.t_cljs$core$async62556(ch__$1,cs__$1,meta62557));
});

}

return (new cljs.core.async.t_cljs$core$async62556(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__61745__auto___64520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_62696){
var state_val_62697 = (state_62696[(1)]);
if((state_val_62697 === (7))){
var inst_62691 = (state_62696[(2)]);
var state_62696__$1 = state_62696;
var statearr_62698_64527 = state_62696__$1;
(statearr_62698_64527[(2)] = inst_62691);

(statearr_62698_64527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (20))){
var inst_62593 = (state_62696[(7)]);
var inst_62606 = cljs.core.first(inst_62593);
var inst_62607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62606,(0),null);
var inst_62608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62606,(1),null);
var state_62696__$1 = (function (){var statearr_62699 = state_62696;
(statearr_62699[(8)] = inst_62607);

return statearr_62699;
})();
if(cljs.core.truth_(inst_62608)){
var statearr_62700_64528 = state_62696__$1;
(statearr_62700_64528[(1)] = (22));

} else {
var statearr_62701_64531 = state_62696__$1;
(statearr_62701_64531[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (27))){
var inst_62562 = (state_62696[(9)]);
var inst_62643 = (state_62696[(10)]);
var inst_62636 = (state_62696[(11)]);
var inst_62638 = (state_62696[(12)]);
var inst_62643__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_62636,inst_62638);
var inst_62644 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_62643__$1,inst_62562,done);
var state_62696__$1 = (function (){var statearr_62702 = state_62696;
(statearr_62702[(10)] = inst_62643__$1);

return statearr_62702;
})();
if(cljs.core.truth_(inst_62644)){
var statearr_62703_64542 = state_62696__$1;
(statearr_62703_64542[(1)] = (30));

} else {
var statearr_62704_64546 = state_62696__$1;
(statearr_62704_64546[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (1))){
var state_62696__$1 = state_62696;
var statearr_62705_64549 = state_62696__$1;
(statearr_62705_64549[(2)] = null);

(statearr_62705_64549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (24))){
var inst_62593 = (state_62696[(7)]);
var inst_62613 = (state_62696[(2)]);
var inst_62614 = cljs.core.next(inst_62593);
var inst_62571 = inst_62614;
var inst_62572 = null;
var inst_62573 = (0);
var inst_62574 = (0);
var state_62696__$1 = (function (){var statearr_62706 = state_62696;
(statearr_62706[(13)] = inst_62572);

(statearr_62706[(14)] = inst_62571);

(statearr_62706[(15)] = inst_62613);

(statearr_62706[(16)] = inst_62574);

(statearr_62706[(17)] = inst_62573);

return statearr_62706;
})();
var statearr_62707_64550 = state_62696__$1;
(statearr_62707_64550[(2)] = null);

(statearr_62707_64550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (39))){
var state_62696__$1 = state_62696;
var statearr_62711_64552 = state_62696__$1;
(statearr_62711_64552[(2)] = null);

(statearr_62711_64552[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (4))){
var inst_62562 = (state_62696[(9)]);
var inst_62562__$1 = (state_62696[(2)]);
var inst_62563 = (inst_62562__$1 == null);
var state_62696__$1 = (function (){var statearr_62712 = state_62696;
(statearr_62712[(9)] = inst_62562__$1);

return statearr_62712;
})();
if(cljs.core.truth_(inst_62563)){
var statearr_62713_64559 = state_62696__$1;
(statearr_62713_64559[(1)] = (5));

} else {
var statearr_62714_64561 = state_62696__$1;
(statearr_62714_64561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (15))){
var inst_62572 = (state_62696[(13)]);
var inst_62571 = (state_62696[(14)]);
var inst_62574 = (state_62696[(16)]);
var inst_62573 = (state_62696[(17)]);
var inst_62589 = (state_62696[(2)]);
var inst_62590 = (inst_62574 + (1));
var tmp62708 = inst_62572;
var tmp62709 = inst_62571;
var tmp62710 = inst_62573;
var inst_62571__$1 = tmp62709;
var inst_62572__$1 = tmp62708;
var inst_62573__$1 = tmp62710;
var inst_62574__$1 = inst_62590;
var state_62696__$1 = (function (){var statearr_62715 = state_62696;
(statearr_62715[(13)] = inst_62572__$1);

(statearr_62715[(14)] = inst_62571__$1);

(statearr_62715[(18)] = inst_62589);

(statearr_62715[(16)] = inst_62574__$1);

(statearr_62715[(17)] = inst_62573__$1);

return statearr_62715;
})();
var statearr_62716_64566 = state_62696__$1;
(statearr_62716_64566[(2)] = null);

(statearr_62716_64566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (21))){
var inst_62617 = (state_62696[(2)]);
var state_62696__$1 = state_62696;
var statearr_62720_64570 = state_62696__$1;
(statearr_62720_64570[(2)] = inst_62617);

(statearr_62720_64570[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (31))){
var inst_62643 = (state_62696[(10)]);
var inst_62647 = done(null);
var inst_62648 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_62643);
var state_62696__$1 = (function (){var statearr_62721 = state_62696;
(statearr_62721[(19)] = inst_62647);

return statearr_62721;
})();
var statearr_62722_64571 = state_62696__$1;
(statearr_62722_64571[(2)] = inst_62648);

(statearr_62722_64571[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (32))){
var inst_62637 = (state_62696[(20)]);
var inst_62636 = (state_62696[(11)]);
var inst_62638 = (state_62696[(12)]);
var inst_62635 = (state_62696[(21)]);
var inst_62650 = (state_62696[(2)]);
var inst_62651 = (inst_62638 + (1));
var tmp62717 = inst_62637;
var tmp62718 = inst_62636;
var tmp62719 = inst_62635;
var inst_62635__$1 = tmp62719;
var inst_62636__$1 = tmp62718;
var inst_62637__$1 = tmp62717;
var inst_62638__$1 = inst_62651;
var state_62696__$1 = (function (){var statearr_62723 = state_62696;
(statearr_62723[(20)] = inst_62637__$1);

(statearr_62723[(22)] = inst_62650);

(statearr_62723[(11)] = inst_62636__$1);

(statearr_62723[(12)] = inst_62638__$1);

(statearr_62723[(21)] = inst_62635__$1);

return statearr_62723;
})();
var statearr_62724_64576 = state_62696__$1;
(statearr_62724_64576[(2)] = null);

(statearr_62724_64576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (40))){
var inst_62663 = (state_62696[(23)]);
var inst_62667 = done(null);
var inst_62668 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_62663);
var state_62696__$1 = (function (){var statearr_62725 = state_62696;
(statearr_62725[(24)] = inst_62667);

return statearr_62725;
})();
var statearr_62726_64579 = state_62696__$1;
(statearr_62726_64579[(2)] = inst_62668);

(statearr_62726_64579[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (33))){
var inst_62654 = (state_62696[(25)]);
var inst_62656 = cljs.core.chunked_seq_QMARK_(inst_62654);
var state_62696__$1 = state_62696;
if(inst_62656){
var statearr_62729_64580 = state_62696__$1;
(statearr_62729_64580[(1)] = (36));

} else {
var statearr_62730_64582 = state_62696__$1;
(statearr_62730_64582[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (13))){
var inst_62583 = (state_62696[(26)]);
var inst_62586 = cljs.core.async.close_BANG_(inst_62583);
var state_62696__$1 = state_62696;
var statearr_62731_64585 = state_62696__$1;
(statearr_62731_64585[(2)] = inst_62586);

(statearr_62731_64585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (22))){
var inst_62607 = (state_62696[(8)]);
var inst_62610 = cljs.core.async.close_BANG_(inst_62607);
var state_62696__$1 = state_62696;
var statearr_62734_64586 = state_62696__$1;
(statearr_62734_64586[(2)] = inst_62610);

(statearr_62734_64586[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (36))){
var inst_62654 = (state_62696[(25)]);
var inst_62658 = cljs.core.chunk_first(inst_62654);
var inst_62659 = cljs.core.chunk_rest(inst_62654);
var inst_62660 = cljs.core.count(inst_62658);
var inst_62635 = inst_62659;
var inst_62636 = inst_62658;
var inst_62637 = inst_62660;
var inst_62638 = (0);
var state_62696__$1 = (function (){var statearr_62735 = state_62696;
(statearr_62735[(20)] = inst_62637);

(statearr_62735[(11)] = inst_62636);

(statearr_62735[(12)] = inst_62638);

(statearr_62735[(21)] = inst_62635);

return statearr_62735;
})();
var statearr_62736_64594 = state_62696__$1;
(statearr_62736_64594[(2)] = null);

(statearr_62736_64594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (41))){
var inst_62654 = (state_62696[(25)]);
var inst_62670 = (state_62696[(2)]);
var inst_62671 = cljs.core.next(inst_62654);
var inst_62635 = inst_62671;
var inst_62636 = null;
var inst_62637 = (0);
var inst_62638 = (0);
var state_62696__$1 = (function (){var statearr_62737 = state_62696;
(statearr_62737[(27)] = inst_62670);

(statearr_62737[(20)] = inst_62637);

(statearr_62737[(11)] = inst_62636);

(statearr_62737[(12)] = inst_62638);

(statearr_62737[(21)] = inst_62635);

return statearr_62737;
})();
var statearr_62740_64598 = state_62696__$1;
(statearr_62740_64598[(2)] = null);

(statearr_62740_64598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (43))){
var state_62696__$1 = state_62696;
var statearr_62741_64599 = state_62696__$1;
(statearr_62741_64599[(2)] = null);

(statearr_62741_64599[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (29))){
var inst_62679 = (state_62696[(2)]);
var state_62696__$1 = state_62696;
var statearr_62744_64601 = state_62696__$1;
(statearr_62744_64601[(2)] = inst_62679);

(statearr_62744_64601[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (44))){
var inst_62688 = (state_62696[(2)]);
var state_62696__$1 = (function (){var statearr_62746 = state_62696;
(statearr_62746[(28)] = inst_62688);

return statearr_62746;
})();
var statearr_62748_64605 = state_62696__$1;
(statearr_62748_64605[(2)] = null);

(statearr_62748_64605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (6))){
var inst_62627 = (state_62696[(29)]);
var inst_62626 = cljs.core.deref(cs);
var inst_62627__$1 = cljs.core.keys(inst_62626);
var inst_62628 = cljs.core.count(inst_62627__$1);
var inst_62629 = cljs.core.reset_BANG_(dctr,inst_62628);
var inst_62634 = cljs.core.seq(inst_62627__$1);
var inst_62635 = inst_62634;
var inst_62636 = null;
var inst_62637 = (0);
var inst_62638 = (0);
var state_62696__$1 = (function (){var statearr_62749 = state_62696;
(statearr_62749[(29)] = inst_62627__$1);

(statearr_62749[(30)] = inst_62629);

(statearr_62749[(20)] = inst_62637);

(statearr_62749[(11)] = inst_62636);

(statearr_62749[(12)] = inst_62638);

(statearr_62749[(21)] = inst_62635);

return statearr_62749;
})();
var statearr_62750_64615 = state_62696__$1;
(statearr_62750_64615[(2)] = null);

(statearr_62750_64615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (28))){
var inst_62654 = (state_62696[(25)]);
var inst_62635 = (state_62696[(21)]);
var inst_62654__$1 = cljs.core.seq(inst_62635);
var state_62696__$1 = (function (){var statearr_62751 = state_62696;
(statearr_62751[(25)] = inst_62654__$1);

return statearr_62751;
})();
if(inst_62654__$1){
var statearr_62752_64620 = state_62696__$1;
(statearr_62752_64620[(1)] = (33));

} else {
var statearr_62753_64621 = state_62696__$1;
(statearr_62753_64621[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (25))){
var inst_62637 = (state_62696[(20)]);
var inst_62638 = (state_62696[(12)]);
var inst_62640 = (inst_62638 < inst_62637);
var inst_62641 = inst_62640;
var state_62696__$1 = state_62696;
if(cljs.core.truth_(inst_62641)){
var statearr_62757_64622 = state_62696__$1;
(statearr_62757_64622[(1)] = (27));

} else {
var statearr_62759_64623 = state_62696__$1;
(statearr_62759_64623[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (34))){
var state_62696__$1 = state_62696;
var statearr_62760_64627 = state_62696__$1;
(statearr_62760_64627[(2)] = null);

(statearr_62760_64627[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (17))){
var state_62696__$1 = state_62696;
var statearr_62761_64629 = state_62696__$1;
(statearr_62761_64629[(2)] = null);

(statearr_62761_64629[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (3))){
var inst_62693 = (state_62696[(2)]);
var state_62696__$1 = state_62696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62696__$1,inst_62693);
} else {
if((state_val_62697 === (12))){
var inst_62622 = (state_62696[(2)]);
var state_62696__$1 = state_62696;
var statearr_62763_64644 = state_62696__$1;
(statearr_62763_64644[(2)] = inst_62622);

(statearr_62763_64644[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (2))){
var state_62696__$1 = state_62696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62696__$1,(4),ch);
} else {
if((state_val_62697 === (23))){
var state_62696__$1 = state_62696;
var statearr_62768_64645 = state_62696__$1;
(statearr_62768_64645[(2)] = null);

(statearr_62768_64645[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (35))){
var inst_62677 = (state_62696[(2)]);
var state_62696__$1 = state_62696;
var statearr_62769_64649 = state_62696__$1;
(statearr_62769_64649[(2)] = inst_62677);

(statearr_62769_64649[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (19))){
var inst_62593 = (state_62696[(7)]);
var inst_62598 = cljs.core.chunk_first(inst_62593);
var inst_62599 = cljs.core.chunk_rest(inst_62593);
var inst_62600 = cljs.core.count(inst_62598);
var inst_62571 = inst_62599;
var inst_62572 = inst_62598;
var inst_62573 = inst_62600;
var inst_62574 = (0);
var state_62696__$1 = (function (){var statearr_62771 = state_62696;
(statearr_62771[(13)] = inst_62572);

(statearr_62771[(14)] = inst_62571);

(statearr_62771[(16)] = inst_62574);

(statearr_62771[(17)] = inst_62573);

return statearr_62771;
})();
var statearr_62772_64653 = state_62696__$1;
(statearr_62772_64653[(2)] = null);

(statearr_62772_64653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (11))){
var inst_62593 = (state_62696[(7)]);
var inst_62571 = (state_62696[(14)]);
var inst_62593__$1 = cljs.core.seq(inst_62571);
var state_62696__$1 = (function (){var statearr_62774 = state_62696;
(statearr_62774[(7)] = inst_62593__$1);

return statearr_62774;
})();
if(inst_62593__$1){
var statearr_62775_64654 = state_62696__$1;
(statearr_62775_64654[(1)] = (16));

} else {
var statearr_62776_64655 = state_62696__$1;
(statearr_62776_64655[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (9))){
var inst_62624 = (state_62696[(2)]);
var state_62696__$1 = state_62696;
var statearr_62781_64659 = state_62696__$1;
(statearr_62781_64659[(2)] = inst_62624);

(statearr_62781_64659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (5))){
var inst_62569 = cljs.core.deref(cs);
var inst_62570 = cljs.core.seq(inst_62569);
var inst_62571 = inst_62570;
var inst_62572 = null;
var inst_62573 = (0);
var inst_62574 = (0);
var state_62696__$1 = (function (){var statearr_62782 = state_62696;
(statearr_62782[(13)] = inst_62572);

(statearr_62782[(14)] = inst_62571);

(statearr_62782[(16)] = inst_62574);

(statearr_62782[(17)] = inst_62573);

return statearr_62782;
})();
var statearr_62783_64664 = state_62696__$1;
(statearr_62783_64664[(2)] = null);

(statearr_62783_64664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (14))){
var state_62696__$1 = state_62696;
var statearr_62784_64665 = state_62696__$1;
(statearr_62784_64665[(2)] = null);

(statearr_62784_64665[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (45))){
var inst_62685 = (state_62696[(2)]);
var state_62696__$1 = state_62696;
var statearr_62785_64667 = state_62696__$1;
(statearr_62785_64667[(2)] = inst_62685);

(statearr_62785_64667[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (26))){
var inst_62627 = (state_62696[(29)]);
var inst_62681 = (state_62696[(2)]);
var inst_62682 = cljs.core.seq(inst_62627);
var state_62696__$1 = (function (){var statearr_62787 = state_62696;
(statearr_62787[(31)] = inst_62681);

return statearr_62787;
})();
if(inst_62682){
var statearr_62789_64668 = state_62696__$1;
(statearr_62789_64668[(1)] = (42));

} else {
var statearr_62791_64669 = state_62696__$1;
(statearr_62791_64669[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (16))){
var inst_62593 = (state_62696[(7)]);
var inst_62595 = cljs.core.chunked_seq_QMARK_(inst_62593);
var state_62696__$1 = state_62696;
if(inst_62595){
var statearr_62794_64672 = state_62696__$1;
(statearr_62794_64672[(1)] = (19));

} else {
var statearr_62795_64673 = state_62696__$1;
(statearr_62795_64673[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (38))){
var inst_62674 = (state_62696[(2)]);
var state_62696__$1 = state_62696;
var statearr_62796_64675 = state_62696__$1;
(statearr_62796_64675[(2)] = inst_62674);

(statearr_62796_64675[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (30))){
var state_62696__$1 = state_62696;
var statearr_62797_64677 = state_62696__$1;
(statearr_62797_64677[(2)] = null);

(statearr_62797_64677[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (10))){
var inst_62572 = (state_62696[(13)]);
var inst_62574 = (state_62696[(16)]);
var inst_62582 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_62572,inst_62574);
var inst_62583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62582,(0),null);
var inst_62584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62582,(1),null);
var state_62696__$1 = (function (){var statearr_62798 = state_62696;
(statearr_62798[(26)] = inst_62583);

return statearr_62798;
})();
if(cljs.core.truth_(inst_62584)){
var statearr_62800_64683 = state_62696__$1;
(statearr_62800_64683[(1)] = (13));

} else {
var statearr_62801_64684 = state_62696__$1;
(statearr_62801_64684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (18))){
var inst_62620 = (state_62696[(2)]);
var state_62696__$1 = state_62696;
var statearr_62804_64692 = state_62696__$1;
(statearr_62804_64692[(2)] = inst_62620);

(statearr_62804_64692[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (42))){
var state_62696__$1 = state_62696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62696__$1,(45),dchan);
} else {
if((state_val_62697 === (37))){
var inst_62654 = (state_62696[(25)]);
var inst_62663 = (state_62696[(23)]);
var inst_62562 = (state_62696[(9)]);
var inst_62663__$1 = cljs.core.first(inst_62654);
var inst_62664 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_62663__$1,inst_62562,done);
var state_62696__$1 = (function (){var statearr_62808 = state_62696;
(statearr_62808[(23)] = inst_62663__$1);

return statearr_62808;
})();
if(cljs.core.truth_(inst_62664)){
var statearr_62811_64700 = state_62696__$1;
(statearr_62811_64700[(1)] = (39));

} else {
var statearr_62812_64703 = state_62696__$1;
(statearr_62812_64703[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (8))){
var inst_62574 = (state_62696[(16)]);
var inst_62573 = (state_62696[(17)]);
var inst_62576 = (inst_62574 < inst_62573);
var inst_62577 = inst_62576;
var state_62696__$1 = state_62696;
if(cljs.core.truth_(inst_62577)){
var statearr_62813_64704 = state_62696__$1;
(statearr_62813_64704[(1)] = (10));

} else {
var statearr_62814_64705 = state_62696__$1;
(statearr_62814_64705[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__61262__auto__ = null;
var cljs$core$async$mult_$_state_machine__61262__auto____0 = (function (){
var statearr_62820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62820[(0)] = cljs$core$async$mult_$_state_machine__61262__auto__);

(statearr_62820[(1)] = (1));

return statearr_62820;
});
var cljs$core$async$mult_$_state_machine__61262__auto____1 = (function (state_62696){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_62696);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e62821){if((e62821 instanceof Object)){
var ex__61265__auto__ = e62821;
var statearr_62822_64706 = state_62696;
(statearr_62822_64706[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62821;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64708 = state_62696;
state_62696 = G__64708;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__61262__auto__ = function(state_62696){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__61262__auto____1.call(this,state_62696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__61262__auto____0;
cljs$core$async$mult_$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__61262__auto____1;
return cljs$core$async$mult_$_state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_62823 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_62823[(6)] = c__61745__auto___64520);

return statearr_62823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__62828 = arguments.length;
switch (G__62828) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___64724 = arguments.length;
var i__4790__auto___64726 = (0);
while(true){
if((i__4790__auto___64726 < len__4789__auto___64724)){
args__4795__auto__.push((arguments[i__4790__auto___64726]));

var G__64727 = (i__4790__auto___64726 + (1));
i__4790__auto___64726 = G__64727;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__62846){
var map__62847 = p__62846;
var map__62847__$1 = (((((!((map__62847 == null))))?(((((map__62847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62847):map__62847);
var opts = map__62847__$1;
var statearr_62849_64728 = state;
(statearr_62849_64728[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_62850_64729 = state;
(statearr_62850_64729[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_62852_64730 = state;
(statearr_62852_64730[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq62842){
var G__62843 = cljs.core.first(seq62842);
var seq62842__$1 = cljs.core.next(seq62842);
var G__62844 = cljs.core.first(seq62842__$1);
var seq62842__$2 = cljs.core.next(seq62842__$1);
var G__62845 = cljs.core.first(seq62842__$2);
var seq62842__$3 = cljs.core.next(seq62842__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62843,G__62844,G__62845,seq62842__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62858 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62859){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta62859 = meta62859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62860,meta62859__$1){
var self__ = this;
var _62860__$1 = this;
return (new cljs.core.async.t_cljs$core$async62858(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta62859__$1));
}));

(cljs.core.async.t_cljs$core$async62858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62860){
var self__ = this;
var _62860__$1 = this;
return self__.meta62859;
}));

(cljs.core.async.t_cljs$core$async62858.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62858.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async62858.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62858.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62858.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62858.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62858.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62858.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta62859","meta62859",-78797081,null)], null);
}));

(cljs.core.async.t_cljs$core$async62858.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62858");

(cljs.core.async.t_cljs$core$async62858.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async62858");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62858.
 */
cljs.core.async.__GT_t_cljs$core$async62858 = (function cljs$core$async$mix_$___GT_t_cljs$core$async62858(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62859){
return (new cljs.core.async.t_cljs$core$async62858(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62859));
});

}

return (new cljs.core.async.t_cljs$core$async62858(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61745__auto___64748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_62963){
var state_val_62964 = (state_62963[(1)]);
if((state_val_62964 === (7))){
var inst_62877 = (state_62963[(2)]);
var state_62963__$1 = state_62963;
var statearr_62968_64749 = state_62963__$1;
(statearr_62968_64749[(2)] = inst_62877);

(statearr_62968_64749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (20))){
var inst_62889 = (state_62963[(7)]);
var state_62963__$1 = state_62963;
var statearr_62969_64751 = state_62963__$1;
(statearr_62969_64751[(2)] = inst_62889);

(statearr_62969_64751[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (27))){
var state_62963__$1 = state_62963;
var statearr_62970_64755 = state_62963__$1;
(statearr_62970_64755[(2)] = null);

(statearr_62970_64755[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (1))){
var inst_62864 = (state_62963[(8)]);
var inst_62864__$1 = calc_state();
var inst_62866 = (inst_62864__$1 == null);
var inst_62867 = cljs.core.not(inst_62866);
var state_62963__$1 = (function (){var statearr_62974 = state_62963;
(statearr_62974[(8)] = inst_62864__$1);

return statearr_62974;
})();
if(inst_62867){
var statearr_62975_64756 = state_62963__$1;
(statearr_62975_64756[(1)] = (2));

} else {
var statearr_62976_64757 = state_62963__$1;
(statearr_62976_64757[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (24))){
var inst_62936 = (state_62963[(9)]);
var inst_62922 = (state_62963[(10)]);
var inst_62913 = (state_62963[(11)]);
var inst_62936__$1 = (inst_62913.cljs$core$IFn$_invoke$arity$1 ? inst_62913.cljs$core$IFn$_invoke$arity$1(inst_62922) : inst_62913.call(null,inst_62922));
var state_62963__$1 = (function (){var statearr_62977 = state_62963;
(statearr_62977[(9)] = inst_62936__$1);

return statearr_62977;
})();
if(cljs.core.truth_(inst_62936__$1)){
var statearr_62978_64758 = state_62963__$1;
(statearr_62978_64758[(1)] = (29));

} else {
var statearr_62979_64759 = state_62963__$1;
(statearr_62979_64759[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (4))){
var inst_62880 = (state_62963[(2)]);
var state_62963__$1 = state_62963;
if(cljs.core.truth_(inst_62880)){
var statearr_62980_64760 = state_62963__$1;
(statearr_62980_64760[(1)] = (8));

} else {
var statearr_62981_64761 = state_62963__$1;
(statearr_62981_64761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (15))){
var inst_62907 = (state_62963[(2)]);
var state_62963__$1 = state_62963;
if(cljs.core.truth_(inst_62907)){
var statearr_62982_64762 = state_62963__$1;
(statearr_62982_64762[(1)] = (19));

} else {
var statearr_62983_64763 = state_62963__$1;
(statearr_62983_64763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (21))){
var inst_62912 = (state_62963[(12)]);
var inst_62912__$1 = (state_62963[(2)]);
var inst_62913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62912__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62912__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62912__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_62963__$1 = (function (){var statearr_62987 = state_62963;
(statearr_62987[(12)] = inst_62912__$1);

(statearr_62987[(13)] = inst_62914);

(statearr_62987[(11)] = inst_62913);

return statearr_62987;
})();
return cljs.core.async.ioc_alts_BANG_(state_62963__$1,(22),inst_62915);
} else {
if((state_val_62964 === (31))){
var inst_62944 = (state_62963[(2)]);
var state_62963__$1 = state_62963;
if(cljs.core.truth_(inst_62944)){
var statearr_62988_64766 = state_62963__$1;
(statearr_62988_64766[(1)] = (32));

} else {
var statearr_62989_64767 = state_62963__$1;
(statearr_62989_64767[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (32))){
var inst_62921 = (state_62963[(14)]);
var state_62963__$1 = state_62963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62963__$1,(35),out,inst_62921);
} else {
if((state_val_62964 === (33))){
var inst_62912 = (state_62963[(12)]);
var inst_62889 = inst_62912;
var state_62963__$1 = (function (){var statearr_62990 = state_62963;
(statearr_62990[(7)] = inst_62889);

return statearr_62990;
})();
var statearr_62991_64768 = state_62963__$1;
(statearr_62991_64768[(2)] = null);

(statearr_62991_64768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (13))){
var inst_62889 = (state_62963[(7)]);
var inst_62896 = inst_62889.cljs$lang$protocol_mask$partition0$;
var inst_62897 = (inst_62896 & (64));
var inst_62898 = inst_62889.cljs$core$ISeq$;
var inst_62899 = (cljs.core.PROTOCOL_SENTINEL === inst_62898);
var inst_62900 = ((inst_62897) || (inst_62899));
var state_62963__$1 = state_62963;
if(cljs.core.truth_(inst_62900)){
var statearr_62992_64772 = state_62963__$1;
(statearr_62992_64772[(1)] = (16));

} else {
var statearr_62993_64776 = state_62963__$1;
(statearr_62993_64776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (22))){
var inst_62922 = (state_62963[(10)]);
var inst_62921 = (state_62963[(14)]);
var inst_62920 = (state_62963[(2)]);
var inst_62921__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62920,(0),null);
var inst_62922__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62920,(1),null);
var inst_62923 = (inst_62921__$1 == null);
var inst_62924 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62922__$1,change);
var inst_62925 = ((inst_62923) || (inst_62924));
var state_62963__$1 = (function (){var statearr_62994 = state_62963;
(statearr_62994[(10)] = inst_62922__$1);

(statearr_62994[(14)] = inst_62921__$1);

return statearr_62994;
})();
if(cljs.core.truth_(inst_62925)){
var statearr_62995_64779 = state_62963__$1;
(statearr_62995_64779[(1)] = (23));

} else {
var statearr_62996_64780 = state_62963__$1;
(statearr_62996_64780[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (36))){
var inst_62912 = (state_62963[(12)]);
var inst_62889 = inst_62912;
var state_62963__$1 = (function (){var statearr_62997 = state_62963;
(statearr_62997[(7)] = inst_62889);

return statearr_62997;
})();
var statearr_62998_64781 = state_62963__$1;
(statearr_62998_64781[(2)] = null);

(statearr_62998_64781[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (29))){
var inst_62936 = (state_62963[(9)]);
var state_62963__$1 = state_62963;
var statearr_62999_64782 = state_62963__$1;
(statearr_62999_64782[(2)] = inst_62936);

(statearr_62999_64782[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (6))){
var state_62963__$1 = state_62963;
var statearr_63000_64783 = state_62963__$1;
(statearr_63000_64783[(2)] = false);

(statearr_63000_64783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (28))){
var inst_62932 = (state_62963[(2)]);
var inst_62933 = calc_state();
var inst_62889 = inst_62933;
var state_62963__$1 = (function (){var statearr_63001 = state_62963;
(statearr_63001[(15)] = inst_62932);

(statearr_63001[(7)] = inst_62889);

return statearr_63001;
})();
var statearr_63002_64785 = state_62963__$1;
(statearr_63002_64785[(2)] = null);

(statearr_63002_64785[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (25))){
var inst_62958 = (state_62963[(2)]);
var state_62963__$1 = state_62963;
var statearr_63003_64786 = state_62963__$1;
(statearr_63003_64786[(2)] = inst_62958);

(statearr_63003_64786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (34))){
var inst_62956 = (state_62963[(2)]);
var state_62963__$1 = state_62963;
var statearr_63004_64787 = state_62963__$1;
(statearr_63004_64787[(2)] = inst_62956);

(statearr_63004_64787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (17))){
var state_62963__$1 = state_62963;
var statearr_63008_64788 = state_62963__$1;
(statearr_63008_64788[(2)] = false);

(statearr_63008_64788[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (3))){
var state_62963__$1 = state_62963;
var statearr_63011_64790 = state_62963__$1;
(statearr_63011_64790[(2)] = false);

(statearr_63011_64790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (12))){
var inst_62960 = (state_62963[(2)]);
var state_62963__$1 = state_62963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62963__$1,inst_62960);
} else {
if((state_val_62964 === (2))){
var inst_62864 = (state_62963[(8)]);
var inst_62869 = inst_62864.cljs$lang$protocol_mask$partition0$;
var inst_62870 = (inst_62869 & (64));
var inst_62871 = inst_62864.cljs$core$ISeq$;
var inst_62872 = (cljs.core.PROTOCOL_SENTINEL === inst_62871);
var inst_62873 = ((inst_62870) || (inst_62872));
var state_62963__$1 = state_62963;
if(cljs.core.truth_(inst_62873)){
var statearr_63012_64791 = state_62963__$1;
(statearr_63012_64791[(1)] = (5));

} else {
var statearr_63013_64792 = state_62963__$1;
(statearr_63013_64792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (23))){
var inst_62921 = (state_62963[(14)]);
var inst_62927 = (inst_62921 == null);
var state_62963__$1 = state_62963;
if(cljs.core.truth_(inst_62927)){
var statearr_63014_64795 = state_62963__$1;
(statearr_63014_64795[(1)] = (26));

} else {
var statearr_63015_64802 = state_62963__$1;
(statearr_63015_64802[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (35))){
var inst_62947 = (state_62963[(2)]);
var state_62963__$1 = state_62963;
if(cljs.core.truth_(inst_62947)){
var statearr_63016_64803 = state_62963__$1;
(statearr_63016_64803[(1)] = (36));

} else {
var statearr_63017_64804 = state_62963__$1;
(statearr_63017_64804[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (19))){
var inst_62889 = (state_62963[(7)]);
var inst_62909 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_62889);
var state_62963__$1 = state_62963;
var statearr_63020_64805 = state_62963__$1;
(statearr_63020_64805[(2)] = inst_62909);

(statearr_63020_64805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (11))){
var inst_62889 = (state_62963[(7)]);
var inst_62893 = (inst_62889 == null);
var inst_62894 = cljs.core.not(inst_62893);
var state_62963__$1 = state_62963;
if(inst_62894){
var statearr_63021_64806 = state_62963__$1;
(statearr_63021_64806[(1)] = (13));

} else {
var statearr_63022_64807 = state_62963__$1;
(statearr_63022_64807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (9))){
var inst_62864 = (state_62963[(8)]);
var state_62963__$1 = state_62963;
var statearr_63023_64809 = state_62963__$1;
(statearr_63023_64809[(2)] = inst_62864);

(statearr_63023_64809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (5))){
var state_62963__$1 = state_62963;
var statearr_63024_64817 = state_62963__$1;
(statearr_63024_64817[(2)] = true);

(statearr_63024_64817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (14))){
var state_62963__$1 = state_62963;
var statearr_63025_64818 = state_62963__$1;
(statearr_63025_64818[(2)] = false);

(statearr_63025_64818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (26))){
var inst_62922 = (state_62963[(10)]);
var inst_62929 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_62922);
var state_62963__$1 = state_62963;
var statearr_63026_64823 = state_62963__$1;
(statearr_63026_64823[(2)] = inst_62929);

(statearr_63026_64823[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (16))){
var state_62963__$1 = state_62963;
var statearr_63027_64825 = state_62963__$1;
(statearr_63027_64825[(2)] = true);

(statearr_63027_64825[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (38))){
var inst_62952 = (state_62963[(2)]);
var state_62963__$1 = state_62963;
var statearr_63028_64829 = state_62963__$1;
(statearr_63028_64829[(2)] = inst_62952);

(statearr_63028_64829[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (30))){
var inst_62914 = (state_62963[(13)]);
var inst_62922 = (state_62963[(10)]);
var inst_62913 = (state_62963[(11)]);
var inst_62939 = cljs.core.empty_QMARK_(inst_62913);
var inst_62940 = (inst_62914.cljs$core$IFn$_invoke$arity$1 ? inst_62914.cljs$core$IFn$_invoke$arity$1(inst_62922) : inst_62914.call(null,inst_62922));
var inst_62941 = cljs.core.not(inst_62940);
var inst_62942 = ((inst_62939) && (inst_62941));
var state_62963__$1 = state_62963;
var statearr_63029_64832 = state_62963__$1;
(statearr_63029_64832[(2)] = inst_62942);

(statearr_63029_64832[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (10))){
var inst_62864 = (state_62963[(8)]);
var inst_62885 = (state_62963[(2)]);
var inst_62886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62885,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62885,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62885,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_62889 = inst_62864;
var state_62963__$1 = (function (){var statearr_63032 = state_62963;
(statearr_63032[(16)] = inst_62888);

(statearr_63032[(7)] = inst_62889);

(statearr_63032[(17)] = inst_62886);

(statearr_63032[(18)] = inst_62887);

return statearr_63032;
})();
var statearr_63033_64833 = state_62963__$1;
(statearr_63033_64833[(2)] = null);

(statearr_63033_64833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (18))){
var inst_62904 = (state_62963[(2)]);
var state_62963__$1 = state_62963;
var statearr_63034_64834 = state_62963__$1;
(statearr_63034_64834[(2)] = inst_62904);

(statearr_63034_64834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (37))){
var state_62963__$1 = state_62963;
var statearr_63035_64835 = state_62963__$1;
(statearr_63035_64835[(2)] = null);

(statearr_63035_64835[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62964 === (8))){
var inst_62864 = (state_62963[(8)]);
var inst_62882 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_62864);
var state_62963__$1 = state_62963;
var statearr_63036_64845 = state_62963__$1;
(statearr_63036_64845[(2)] = inst_62882);

(statearr_63036_64845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__61262__auto__ = null;
var cljs$core$async$mix_$_state_machine__61262__auto____0 = (function (){
var statearr_63037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63037[(0)] = cljs$core$async$mix_$_state_machine__61262__auto__);

(statearr_63037[(1)] = (1));

return statearr_63037;
});
var cljs$core$async$mix_$_state_machine__61262__auto____1 = (function (state_62963){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_62963);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e63039){if((e63039 instanceof Object)){
var ex__61265__auto__ = e63039;
var statearr_63040_64859 = state_62963;
(statearr_63040_64859[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_62963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63039;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64860 = state_62963;
state_62963 = G__64860;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__61262__auto__ = function(state_62963){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__61262__auto____1.call(this,state_62963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__61262__auto____0;
cljs$core$async$mix_$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__61262__auto____1;
return cljs$core$async$mix_$_state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_63041 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_63041[(6)] = c__61745__auto___64748);

return statearr_63041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__63052 = arguments.length;
switch (G__63052) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__63055 = arguments.length;
switch (G__63055) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__63053_SHARP_){
if(cljs.core.truth_((p1__63053_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__63053_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__63053_SHARP_.call(null,topic)))){
return p1__63053_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63053_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63056 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta63057){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta63057 = meta63057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63058,meta63057__$1){
var self__ = this;
var _63058__$1 = this;
return (new cljs.core.async.t_cljs$core$async63056(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta63057__$1));
}));

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63058){
var self__ = this;
var _63058__$1 = this;
return self__.meta63057;
}));

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async63056.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async63056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta63057","meta63057",-1942843138,null)], null);
}));

(cljs.core.async.t_cljs$core$async63056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63056");

(cljs.core.async.t_cljs$core$async63056.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async63056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63056.
 */
cljs.core.async.__GT_t_cljs$core$async63056 = (function cljs$core$async$__GT_t_cljs$core$async63056(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63057){
return (new cljs.core.async.t_cljs$core$async63056(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63057));
});

}

return (new cljs.core.async.t_cljs$core$async63056(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61745__auto___64953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_63140){
var state_val_63141 = (state_63140[(1)]);
if((state_val_63141 === (7))){
var inst_63136 = (state_63140[(2)]);
var state_63140__$1 = state_63140;
var statearr_63142_64957 = state_63140__$1;
(statearr_63142_64957[(2)] = inst_63136);

(statearr_63142_64957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (20))){
var state_63140__$1 = state_63140;
var statearr_63143_64958 = state_63140__$1;
(statearr_63143_64958[(2)] = null);

(statearr_63143_64958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (1))){
var state_63140__$1 = state_63140;
var statearr_63145_64959 = state_63140__$1;
(statearr_63145_64959[(2)] = null);

(statearr_63145_64959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (24))){
var inst_63115 = (state_63140[(7)]);
var inst_63128 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_63115);
var state_63140__$1 = state_63140;
var statearr_63146_64960 = state_63140__$1;
(statearr_63146_64960[(2)] = inst_63128);

(statearr_63146_64960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (4))){
var inst_63063 = (state_63140[(8)]);
var inst_63063__$1 = (state_63140[(2)]);
var inst_63064 = (inst_63063__$1 == null);
var state_63140__$1 = (function (){var statearr_63147 = state_63140;
(statearr_63147[(8)] = inst_63063__$1);

return statearr_63147;
})();
if(cljs.core.truth_(inst_63064)){
var statearr_63148_64964 = state_63140__$1;
(statearr_63148_64964[(1)] = (5));

} else {
var statearr_63150_64965 = state_63140__$1;
(statearr_63150_64965[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (15))){
var inst_63109 = (state_63140[(2)]);
var state_63140__$1 = state_63140;
var statearr_63153_64966 = state_63140__$1;
(statearr_63153_64966[(2)] = inst_63109);

(statearr_63153_64966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (21))){
var inst_63133 = (state_63140[(2)]);
var state_63140__$1 = (function (){var statearr_63154 = state_63140;
(statearr_63154[(9)] = inst_63133);

return statearr_63154;
})();
var statearr_63155_64973 = state_63140__$1;
(statearr_63155_64973[(2)] = null);

(statearr_63155_64973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (13))){
var inst_63091 = (state_63140[(10)]);
var inst_63093 = cljs.core.chunked_seq_QMARK_(inst_63091);
var state_63140__$1 = state_63140;
if(inst_63093){
var statearr_63156_64974 = state_63140__$1;
(statearr_63156_64974[(1)] = (16));

} else {
var statearr_63157_64975 = state_63140__$1;
(statearr_63157_64975[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (22))){
var inst_63125 = (state_63140[(2)]);
var state_63140__$1 = state_63140;
if(cljs.core.truth_(inst_63125)){
var statearr_63158_64976 = state_63140__$1;
(statearr_63158_64976[(1)] = (23));

} else {
var statearr_63159_64977 = state_63140__$1;
(statearr_63159_64977[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (6))){
var inst_63063 = (state_63140[(8)]);
var inst_63115 = (state_63140[(7)]);
var inst_63121 = (state_63140[(11)]);
var inst_63115__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_63063) : topic_fn.call(null,inst_63063));
var inst_63120 = cljs.core.deref(mults);
var inst_63121__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_63120,inst_63115__$1);
var state_63140__$1 = (function (){var statearr_63160 = state_63140;
(statearr_63160[(7)] = inst_63115__$1);

(statearr_63160[(11)] = inst_63121__$1);

return statearr_63160;
})();
if(cljs.core.truth_(inst_63121__$1)){
var statearr_63161_64978 = state_63140__$1;
(statearr_63161_64978[(1)] = (19));

} else {
var statearr_63166_64979 = state_63140__$1;
(statearr_63166_64979[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (25))){
var inst_63130 = (state_63140[(2)]);
var state_63140__$1 = state_63140;
var statearr_63167_64980 = state_63140__$1;
(statearr_63167_64980[(2)] = inst_63130);

(statearr_63167_64980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (17))){
var inst_63091 = (state_63140[(10)]);
var inst_63100 = cljs.core.first(inst_63091);
var inst_63101 = cljs.core.async.muxch_STAR_(inst_63100);
var inst_63102 = cljs.core.async.close_BANG_(inst_63101);
var inst_63103 = cljs.core.next(inst_63091);
var inst_63073 = inst_63103;
var inst_63074 = null;
var inst_63075 = (0);
var inst_63076 = (0);
var state_63140__$1 = (function (){var statearr_63168 = state_63140;
(statearr_63168[(12)] = inst_63102);

(statearr_63168[(13)] = inst_63075);

(statearr_63168[(14)] = inst_63073);

(statearr_63168[(15)] = inst_63076);

(statearr_63168[(16)] = inst_63074);

return statearr_63168;
})();
var statearr_63169_64990 = state_63140__$1;
(statearr_63169_64990[(2)] = null);

(statearr_63169_64990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (3))){
var inst_63138 = (state_63140[(2)]);
var state_63140__$1 = state_63140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63140__$1,inst_63138);
} else {
if((state_val_63141 === (12))){
var inst_63111 = (state_63140[(2)]);
var state_63140__$1 = state_63140;
var statearr_63170_64991 = state_63140__$1;
(statearr_63170_64991[(2)] = inst_63111);

(statearr_63170_64991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (2))){
var state_63140__$1 = state_63140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63140__$1,(4),ch);
} else {
if((state_val_63141 === (23))){
var state_63140__$1 = state_63140;
var statearr_63171_64992 = state_63140__$1;
(statearr_63171_64992[(2)] = null);

(statearr_63171_64992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (19))){
var inst_63063 = (state_63140[(8)]);
var inst_63121 = (state_63140[(11)]);
var inst_63123 = cljs.core.async.muxch_STAR_(inst_63121);
var state_63140__$1 = state_63140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63140__$1,(22),inst_63123,inst_63063);
} else {
if((state_val_63141 === (11))){
var inst_63091 = (state_63140[(10)]);
var inst_63073 = (state_63140[(14)]);
var inst_63091__$1 = cljs.core.seq(inst_63073);
var state_63140__$1 = (function (){var statearr_63173 = state_63140;
(statearr_63173[(10)] = inst_63091__$1);

return statearr_63173;
})();
if(inst_63091__$1){
var statearr_63174_64993 = state_63140__$1;
(statearr_63174_64993[(1)] = (13));

} else {
var statearr_63175_64994 = state_63140__$1;
(statearr_63175_64994[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (9))){
var inst_63113 = (state_63140[(2)]);
var state_63140__$1 = state_63140;
var statearr_63176_65001 = state_63140__$1;
(statearr_63176_65001[(2)] = inst_63113);

(statearr_63176_65001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (5))){
var inst_63070 = cljs.core.deref(mults);
var inst_63071 = cljs.core.vals(inst_63070);
var inst_63072 = cljs.core.seq(inst_63071);
var inst_63073 = inst_63072;
var inst_63074 = null;
var inst_63075 = (0);
var inst_63076 = (0);
var state_63140__$1 = (function (){var statearr_63177 = state_63140;
(statearr_63177[(13)] = inst_63075);

(statearr_63177[(14)] = inst_63073);

(statearr_63177[(15)] = inst_63076);

(statearr_63177[(16)] = inst_63074);

return statearr_63177;
})();
var statearr_63179_65005 = state_63140__$1;
(statearr_63179_65005[(2)] = null);

(statearr_63179_65005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (14))){
var state_63140__$1 = state_63140;
var statearr_63183_65006 = state_63140__$1;
(statearr_63183_65006[(2)] = null);

(statearr_63183_65006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (16))){
var inst_63091 = (state_63140[(10)]);
var inst_63095 = cljs.core.chunk_first(inst_63091);
var inst_63096 = cljs.core.chunk_rest(inst_63091);
var inst_63097 = cljs.core.count(inst_63095);
var inst_63073 = inst_63096;
var inst_63074 = inst_63095;
var inst_63075 = inst_63097;
var inst_63076 = (0);
var state_63140__$1 = (function (){var statearr_63186 = state_63140;
(statearr_63186[(13)] = inst_63075);

(statearr_63186[(14)] = inst_63073);

(statearr_63186[(15)] = inst_63076);

(statearr_63186[(16)] = inst_63074);

return statearr_63186;
})();
var statearr_63190_65007 = state_63140__$1;
(statearr_63190_65007[(2)] = null);

(statearr_63190_65007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (10))){
var inst_63075 = (state_63140[(13)]);
var inst_63073 = (state_63140[(14)]);
var inst_63076 = (state_63140[(15)]);
var inst_63074 = (state_63140[(16)]);
var inst_63085 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_63074,inst_63076);
var inst_63086 = cljs.core.async.muxch_STAR_(inst_63085);
var inst_63087 = cljs.core.async.close_BANG_(inst_63086);
var inst_63088 = (inst_63076 + (1));
var tmp63180 = inst_63075;
var tmp63181 = inst_63073;
var tmp63182 = inst_63074;
var inst_63073__$1 = tmp63181;
var inst_63074__$1 = tmp63182;
var inst_63075__$1 = tmp63180;
var inst_63076__$1 = inst_63088;
var state_63140__$1 = (function (){var statearr_63191 = state_63140;
(statearr_63191[(13)] = inst_63075__$1);

(statearr_63191[(14)] = inst_63073__$1);

(statearr_63191[(17)] = inst_63087);

(statearr_63191[(15)] = inst_63076__$1);

(statearr_63191[(16)] = inst_63074__$1);

return statearr_63191;
})();
var statearr_63192_65014 = state_63140__$1;
(statearr_63192_65014[(2)] = null);

(statearr_63192_65014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (18))){
var inst_63106 = (state_63140[(2)]);
var state_63140__$1 = state_63140;
var statearr_63193_65017 = state_63140__$1;
(statearr_63193_65017[(2)] = inst_63106);

(statearr_63193_65017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63141 === (8))){
var inst_63075 = (state_63140[(13)]);
var inst_63076 = (state_63140[(15)]);
var inst_63078 = (inst_63076 < inst_63075);
var inst_63079 = inst_63078;
var state_63140__$1 = state_63140;
if(cljs.core.truth_(inst_63079)){
var statearr_63194_65024 = state_63140__$1;
(statearr_63194_65024[(1)] = (10));

} else {
var statearr_63195_65025 = state_63140__$1;
(statearr_63195_65025[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61262__auto__ = null;
var cljs$core$async$state_machine__61262__auto____0 = (function (){
var statearr_63196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63196[(0)] = cljs$core$async$state_machine__61262__auto__);

(statearr_63196[(1)] = (1));

return statearr_63196;
});
var cljs$core$async$state_machine__61262__auto____1 = (function (state_63140){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_63140);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e63197){if((e63197 instanceof Object)){
var ex__61265__auto__ = e63197;
var statearr_63198_65030 = state_63140;
(statearr_63198_65030[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65031 = state_63140;
state_63140 = G__65031;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$state_machine__61262__auto__ = function(state_63140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61262__auto____1.call(this,state_63140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61262__auto____0;
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61262__auto____1;
return cljs$core$async$state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_63199 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_63199[(6)] = c__61745__auto___64953);

return statearr_63199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__63201 = arguments.length;
switch (G__63201) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__63208 = arguments.length;
switch (G__63208) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__63210 = arguments.length;
switch (G__63210) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__61745__auto___65049 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_63251){
var state_val_63252 = (state_63251[(1)]);
if((state_val_63252 === (7))){
var state_63251__$1 = state_63251;
var statearr_63253_65050 = state_63251__$1;
(statearr_63253_65050[(2)] = null);

(statearr_63253_65050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63252 === (1))){
var state_63251__$1 = state_63251;
var statearr_63254_65051 = state_63251__$1;
(statearr_63254_65051[(2)] = null);

(statearr_63254_65051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63252 === (4))){
var inst_63215 = (state_63251[(7)]);
var inst_63217 = (inst_63215 < cnt);
var state_63251__$1 = state_63251;
if(cljs.core.truth_(inst_63217)){
var statearr_63255_65056 = state_63251__$1;
(statearr_63255_65056[(1)] = (6));

} else {
var statearr_63256_65058 = state_63251__$1;
(statearr_63256_65058[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63252 === (15))){
var inst_63247 = (state_63251[(2)]);
var state_63251__$1 = state_63251;
var statearr_63257_65060 = state_63251__$1;
(statearr_63257_65060[(2)] = inst_63247);

(statearr_63257_65060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63252 === (13))){
var inst_63240 = cljs.core.async.close_BANG_(out);
var state_63251__$1 = state_63251;
var statearr_63258_65062 = state_63251__$1;
(statearr_63258_65062[(2)] = inst_63240);

(statearr_63258_65062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63252 === (6))){
var state_63251__$1 = state_63251;
var statearr_63259_65064 = state_63251__$1;
(statearr_63259_65064[(2)] = null);

(statearr_63259_65064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63252 === (3))){
var inst_63249 = (state_63251[(2)]);
var state_63251__$1 = state_63251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63251__$1,inst_63249);
} else {
if((state_val_63252 === (12))){
var inst_63237 = (state_63251[(8)]);
var inst_63237__$1 = (state_63251[(2)]);
var inst_63238 = cljs.core.some(cljs.core.nil_QMARK_,inst_63237__$1);
var state_63251__$1 = (function (){var statearr_63260 = state_63251;
(statearr_63260[(8)] = inst_63237__$1);

return statearr_63260;
})();
if(cljs.core.truth_(inst_63238)){
var statearr_63261_65065 = state_63251__$1;
(statearr_63261_65065[(1)] = (13));

} else {
var statearr_63262_65066 = state_63251__$1;
(statearr_63262_65066[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63252 === (2))){
var inst_63214 = cljs.core.reset_BANG_(dctr,cnt);
var inst_63215 = (0);
var state_63251__$1 = (function (){var statearr_63263 = state_63251;
(statearr_63263[(7)] = inst_63215);

(statearr_63263[(9)] = inst_63214);

return statearr_63263;
})();
var statearr_63264_65067 = state_63251__$1;
(statearr_63264_65067[(2)] = null);

(statearr_63264_65067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63252 === (11))){
var inst_63215 = (state_63251[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_63251,(10),Object,null,(9));
var inst_63224 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_63215) : chs__$1.call(null,inst_63215));
var inst_63225 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_63215) : done.call(null,inst_63215));
var inst_63226 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_63224,inst_63225);
var state_63251__$1 = state_63251;
var statearr_63265_65068 = state_63251__$1;
(statearr_63265_65068[(2)] = inst_63226);


cljs.core.async.impl.ioc_helpers.process_exception(state_63251__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63252 === (9))){
var inst_63215 = (state_63251[(7)]);
var inst_63228 = (state_63251[(2)]);
var inst_63229 = (inst_63215 + (1));
var inst_63215__$1 = inst_63229;
var state_63251__$1 = (function (){var statearr_63266 = state_63251;
(statearr_63266[(7)] = inst_63215__$1);

(statearr_63266[(10)] = inst_63228);

return statearr_63266;
})();
var statearr_63268_65069 = state_63251__$1;
(statearr_63268_65069[(2)] = null);

(statearr_63268_65069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63252 === (5))){
var inst_63235 = (state_63251[(2)]);
var state_63251__$1 = (function (){var statearr_63269 = state_63251;
(statearr_63269[(11)] = inst_63235);

return statearr_63269;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63251__$1,(12),dchan);
} else {
if((state_val_63252 === (14))){
var inst_63237 = (state_63251[(8)]);
var inst_63242 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_63237);
var state_63251__$1 = state_63251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63251__$1,(16),out,inst_63242);
} else {
if((state_val_63252 === (16))){
var inst_63244 = (state_63251[(2)]);
var state_63251__$1 = (function (){var statearr_63270 = state_63251;
(statearr_63270[(12)] = inst_63244);

return statearr_63270;
})();
var statearr_63271_65070 = state_63251__$1;
(statearr_63271_65070[(2)] = null);

(statearr_63271_65070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63252 === (10))){
var inst_63219 = (state_63251[(2)]);
var inst_63220 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_63251__$1 = (function (){var statearr_63272 = state_63251;
(statearr_63272[(13)] = inst_63219);

return statearr_63272;
})();
var statearr_63273_65071 = state_63251__$1;
(statearr_63273_65071[(2)] = inst_63220);


cljs.core.async.impl.ioc_helpers.process_exception(state_63251__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63252 === (8))){
var inst_63233 = (state_63251[(2)]);
var state_63251__$1 = state_63251;
var statearr_63274_65072 = state_63251__$1;
(statearr_63274_65072[(2)] = inst_63233);

(statearr_63274_65072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61262__auto__ = null;
var cljs$core$async$state_machine__61262__auto____0 = (function (){
var statearr_63275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63275[(0)] = cljs$core$async$state_machine__61262__auto__);

(statearr_63275[(1)] = (1));

return statearr_63275;
});
var cljs$core$async$state_machine__61262__auto____1 = (function (state_63251){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_63251);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e63276){if((e63276 instanceof Object)){
var ex__61265__auto__ = e63276;
var statearr_63279_65073 = state_63251;
(statearr_63279_65073[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63276;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65074 = state_63251;
state_63251 = G__65074;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$state_machine__61262__auto__ = function(state_63251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61262__auto____1.call(this,state_63251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61262__auto____0;
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61262__auto____1;
return cljs$core$async$state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_63281 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_63281[(6)] = c__61745__auto___65049);

return statearr_63281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__63286 = arguments.length;
switch (G__63286) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61745__auto___65077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_63319){
var state_val_63320 = (state_63319[(1)]);
if((state_val_63320 === (7))){
var inst_63299 = (state_63319[(7)]);
var inst_63298 = (state_63319[(8)]);
var inst_63298__$1 = (state_63319[(2)]);
var inst_63299__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63298__$1,(0),null);
var inst_63300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_63298__$1,(1),null);
var inst_63301 = (inst_63299__$1 == null);
var state_63319__$1 = (function (){var statearr_63322 = state_63319;
(statearr_63322[(9)] = inst_63300);

(statearr_63322[(7)] = inst_63299__$1);

(statearr_63322[(8)] = inst_63298__$1);

return statearr_63322;
})();
if(cljs.core.truth_(inst_63301)){
var statearr_63323_65079 = state_63319__$1;
(statearr_63323_65079[(1)] = (8));

} else {
var statearr_63324_65081 = state_63319__$1;
(statearr_63324_65081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63320 === (1))){
var inst_63288 = cljs.core.vec(chs);
var inst_63289 = inst_63288;
var state_63319__$1 = (function (){var statearr_63326 = state_63319;
(statearr_63326[(10)] = inst_63289);

return statearr_63326;
})();
var statearr_63327_65084 = state_63319__$1;
(statearr_63327_65084[(2)] = null);

(statearr_63327_65084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63320 === (4))){
var inst_63289 = (state_63319[(10)]);
var state_63319__$1 = state_63319;
return cljs.core.async.ioc_alts_BANG_(state_63319__$1,(7),inst_63289);
} else {
if((state_val_63320 === (6))){
var inst_63315 = (state_63319[(2)]);
var state_63319__$1 = state_63319;
var statearr_63329_65086 = state_63319__$1;
(statearr_63329_65086[(2)] = inst_63315);

(statearr_63329_65086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63320 === (3))){
var inst_63317 = (state_63319[(2)]);
var state_63319__$1 = state_63319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63319__$1,inst_63317);
} else {
if((state_val_63320 === (2))){
var inst_63289 = (state_63319[(10)]);
var inst_63291 = cljs.core.count(inst_63289);
var inst_63292 = (inst_63291 > (0));
var state_63319__$1 = state_63319;
if(cljs.core.truth_(inst_63292)){
var statearr_63332_65091 = state_63319__$1;
(statearr_63332_65091[(1)] = (4));

} else {
var statearr_63334_65092 = state_63319__$1;
(statearr_63334_65092[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63320 === (11))){
var inst_63289 = (state_63319[(10)]);
var inst_63308 = (state_63319[(2)]);
var tmp63330 = inst_63289;
var inst_63289__$1 = tmp63330;
var state_63319__$1 = (function (){var statearr_63338 = state_63319;
(statearr_63338[(10)] = inst_63289__$1);

(statearr_63338[(11)] = inst_63308);

return statearr_63338;
})();
var statearr_63340_65096 = state_63319__$1;
(statearr_63340_65096[(2)] = null);

(statearr_63340_65096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63320 === (9))){
var inst_63299 = (state_63319[(7)]);
var state_63319__$1 = state_63319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63319__$1,(11),out,inst_63299);
} else {
if((state_val_63320 === (5))){
var inst_63313 = cljs.core.async.close_BANG_(out);
var state_63319__$1 = state_63319;
var statearr_63341_65099 = state_63319__$1;
(statearr_63341_65099[(2)] = inst_63313);

(statearr_63341_65099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63320 === (10))){
var inst_63311 = (state_63319[(2)]);
var state_63319__$1 = state_63319;
var statearr_63342_65100 = state_63319__$1;
(statearr_63342_65100[(2)] = inst_63311);

(statearr_63342_65100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63320 === (8))){
var inst_63300 = (state_63319[(9)]);
var inst_63299 = (state_63319[(7)]);
var inst_63289 = (state_63319[(10)]);
var inst_63298 = (state_63319[(8)]);
var inst_63303 = (function (){var cs = inst_63289;
var vec__63294 = inst_63298;
var v = inst_63299;
var c = inst_63300;
return (function (p1__63282_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__63282_SHARP_);
});
})();
var inst_63304 = cljs.core.filterv(inst_63303,inst_63289);
var inst_63289__$1 = inst_63304;
var state_63319__$1 = (function (){var statearr_63343 = state_63319;
(statearr_63343[(10)] = inst_63289__$1);

return statearr_63343;
})();
var statearr_63346_65102 = state_63319__$1;
(statearr_63346_65102[(2)] = null);

(statearr_63346_65102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61262__auto__ = null;
var cljs$core$async$state_machine__61262__auto____0 = (function (){
var statearr_63347 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63347[(0)] = cljs$core$async$state_machine__61262__auto__);

(statearr_63347[(1)] = (1));

return statearr_63347;
});
var cljs$core$async$state_machine__61262__auto____1 = (function (state_63319){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_63319);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e63348){if((e63348 instanceof Object)){
var ex__61265__auto__ = e63348;
var statearr_63349_65105 = state_63319;
(statearr_63349_65105[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63348;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65106 = state_63319;
state_63319 = G__65106;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$state_machine__61262__auto__ = function(state_63319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61262__auto____1.call(this,state_63319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61262__auto____0;
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61262__auto____1;
return cljs$core$async$state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_63351 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_63351[(6)] = c__61745__auto___65077);

return statearr_63351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__63356 = arguments.length;
switch (G__63356) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61745__auto___65128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_63383){
var state_val_63384 = (state_63383[(1)]);
if((state_val_63384 === (7))){
var inst_63365 = (state_63383[(7)]);
var inst_63365__$1 = (state_63383[(2)]);
var inst_63366 = (inst_63365__$1 == null);
var inst_63367 = cljs.core.not(inst_63366);
var state_63383__$1 = (function (){var statearr_63388 = state_63383;
(statearr_63388[(7)] = inst_63365__$1);

return statearr_63388;
})();
if(inst_63367){
var statearr_63389_65134 = state_63383__$1;
(statearr_63389_65134[(1)] = (8));

} else {
var statearr_63390_65139 = state_63383__$1;
(statearr_63390_65139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63384 === (1))){
var inst_63360 = (0);
var state_63383__$1 = (function (){var statearr_63391 = state_63383;
(statearr_63391[(8)] = inst_63360);

return statearr_63391;
})();
var statearr_63393_65144 = state_63383__$1;
(statearr_63393_65144[(2)] = null);

(statearr_63393_65144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63384 === (4))){
var state_63383__$1 = state_63383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63383__$1,(7),ch);
} else {
if((state_val_63384 === (6))){
var inst_63378 = (state_63383[(2)]);
var state_63383__$1 = state_63383;
var statearr_63394_65146 = state_63383__$1;
(statearr_63394_65146[(2)] = inst_63378);

(statearr_63394_65146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63384 === (3))){
var inst_63380 = (state_63383[(2)]);
var inst_63381 = cljs.core.async.close_BANG_(out);
var state_63383__$1 = (function (){var statearr_63395 = state_63383;
(statearr_63395[(9)] = inst_63380);

return statearr_63395;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63383__$1,inst_63381);
} else {
if((state_val_63384 === (2))){
var inst_63360 = (state_63383[(8)]);
var inst_63362 = (inst_63360 < n);
var state_63383__$1 = state_63383;
if(cljs.core.truth_(inst_63362)){
var statearr_63396_65153 = state_63383__$1;
(statearr_63396_65153[(1)] = (4));

} else {
var statearr_63397_65155 = state_63383__$1;
(statearr_63397_65155[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63384 === (11))){
var inst_63360 = (state_63383[(8)]);
var inst_63370 = (state_63383[(2)]);
var inst_63371 = (inst_63360 + (1));
var inst_63360__$1 = inst_63371;
var state_63383__$1 = (function (){var statearr_63398 = state_63383;
(statearr_63398[(8)] = inst_63360__$1);

(statearr_63398[(10)] = inst_63370);

return statearr_63398;
})();
var statearr_63399_65161 = state_63383__$1;
(statearr_63399_65161[(2)] = null);

(statearr_63399_65161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63384 === (9))){
var state_63383__$1 = state_63383;
var statearr_63400_65162 = state_63383__$1;
(statearr_63400_65162[(2)] = null);

(statearr_63400_65162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63384 === (5))){
var state_63383__$1 = state_63383;
var statearr_63401_65163 = state_63383__$1;
(statearr_63401_65163[(2)] = null);

(statearr_63401_65163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63384 === (10))){
var inst_63375 = (state_63383[(2)]);
var state_63383__$1 = state_63383;
var statearr_63403_65164 = state_63383__$1;
(statearr_63403_65164[(2)] = inst_63375);

(statearr_63403_65164[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63384 === (8))){
var inst_63365 = (state_63383[(7)]);
var state_63383__$1 = state_63383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63383__$1,(11),out,inst_63365);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61262__auto__ = null;
var cljs$core$async$state_machine__61262__auto____0 = (function (){
var statearr_63405 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63405[(0)] = cljs$core$async$state_machine__61262__auto__);

(statearr_63405[(1)] = (1));

return statearr_63405;
});
var cljs$core$async$state_machine__61262__auto____1 = (function (state_63383){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_63383);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e63406){if((e63406 instanceof Object)){
var ex__61265__auto__ = e63406;
var statearr_63407_65181 = state_63383;
(statearr_63407_65181[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65186 = state_63383;
state_63383 = G__65186;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$state_machine__61262__auto__ = function(state_63383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61262__auto____1.call(this,state_63383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61262__auto____0;
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61262__auto____1;
return cljs$core$async$state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_63408 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_63408[(6)] = c__61745__auto___65128);

return statearr_63408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63410 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63410 = (function (f,ch,meta63411){
this.f = f;
this.ch = ch;
this.meta63411 = meta63411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63412,meta63411__$1){
var self__ = this;
var _63412__$1 = this;
return (new cljs.core.async.t_cljs$core$async63410(self__.f,self__.ch,meta63411__$1));
}));

(cljs.core.async.t_cljs$core$async63410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63412){
var self__ = this;
var _63412__$1 = this;
return self__.meta63411;
}));

(cljs.core.async.t_cljs$core$async63410.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63410.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63410.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63414 = (function (f,ch,meta63411,_,fn1,meta63415){
this.f = f;
this.ch = ch;
this.meta63411 = meta63411;
this._ = _;
this.fn1 = fn1;
this.meta63415 = meta63415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63416,meta63415__$1){
var self__ = this;
var _63416__$1 = this;
return (new cljs.core.async.t_cljs$core$async63414(self__.f,self__.ch,self__.meta63411,self__._,self__.fn1,meta63415__$1));
}));

(cljs.core.async.t_cljs$core$async63414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63416){
var self__ = this;
var _63416__$1 = this;
return self__.meta63415;
}));

(cljs.core.async.t_cljs$core$async63414.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async63414.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async63414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__63409_SHARP_){
var G__63417 = (((p1__63409_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__63409_SHARP_) : self__.f.call(null,p1__63409_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__63417) : f1.call(null,G__63417));
});
}));

(cljs.core.async.t_cljs$core$async63414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63411","meta63411",1179180427,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async63410","cljs.core.async/t_cljs$core$async63410",-959707557,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta63415","meta63415",-1037916894,null)], null);
}));

(cljs.core.async.t_cljs$core$async63414.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63414");

(cljs.core.async.t_cljs$core$async63414.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async63414");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63414.
 */
cljs.core.async.__GT_t_cljs$core$async63414 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63414(f__$1,ch__$1,meta63411__$1,___$2,fn1__$1,meta63415){
return (new cljs.core.async.t_cljs$core$async63414(f__$1,ch__$1,meta63411__$1,___$2,fn1__$1,meta63415));
});

}

return (new cljs.core.async.t_cljs$core$async63414(self__.f,self__.ch,self__.meta63411,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__63418 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__63418) : self__.f.call(null,G__63418));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async63410.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async63410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63411","meta63411",1179180427,null)], null);
}));

(cljs.core.async.t_cljs$core$async63410.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63410");

(cljs.core.async.t_cljs$core$async63410.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async63410");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63410.
 */
cljs.core.async.__GT_t_cljs$core$async63410 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63410(f__$1,ch__$1,meta63411){
return (new cljs.core.async.t_cljs$core$async63410(f__$1,ch__$1,meta63411));
});

}

return (new cljs.core.async.t_cljs$core$async63410(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63432 = (function (f,ch,meta63433){
this.f = f;
this.ch = ch;
this.meta63433 = meta63433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63434,meta63433__$1){
var self__ = this;
var _63434__$1 = this;
return (new cljs.core.async.t_cljs$core$async63432(self__.f,self__.ch,meta63433__$1));
}));

(cljs.core.async.t_cljs$core$async63432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63434){
var self__ = this;
var _63434__$1 = this;
return self__.meta63433;
}));

(cljs.core.async.t_cljs$core$async63432.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63432.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63432.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63432.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63432.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63432.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async63432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63433","meta63433",-391558485,null)], null);
}));

(cljs.core.async.t_cljs$core$async63432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63432");

(cljs.core.async.t_cljs$core$async63432.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async63432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63432.
 */
cljs.core.async.__GT_t_cljs$core$async63432 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async63432(f__$1,ch__$1,meta63433){
return (new cljs.core.async.t_cljs$core$async63432(f__$1,ch__$1,meta63433));
});

}

return (new cljs.core.async.t_cljs$core$async63432(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async63463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63463 = (function (p,ch,meta63464){
this.p = p;
this.ch = ch;
this.meta63464 = meta63464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async63463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63465,meta63464__$1){
var self__ = this;
var _63465__$1 = this;
return (new cljs.core.async.t_cljs$core$async63463(self__.p,self__.ch,meta63464__$1));
}));

(cljs.core.async.t_cljs$core$async63463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63465){
var self__ = this;
var _63465__$1 = this;
return self__.meta63464;
}));

(cljs.core.async.t_cljs$core$async63463.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63463.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63463.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async63463.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63463.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async63463.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async63463.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async63463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63464","meta63464",-272213514,null)], null);
}));

(cljs.core.async.t_cljs$core$async63463.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async63463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63463");

(cljs.core.async.t_cljs$core$async63463.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async63463");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async63463.
 */
cljs.core.async.__GT_t_cljs$core$async63463 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async63463(p__$1,ch__$1,meta63464){
return (new cljs.core.async.t_cljs$core$async63463(p__$1,ch__$1,meta63464));
});

}

return (new cljs.core.async.t_cljs$core$async63463(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__63507 = arguments.length;
switch (G__63507) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61745__auto___65246 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_63529){
var state_val_63530 = (state_63529[(1)]);
if((state_val_63530 === (7))){
var inst_63525 = (state_63529[(2)]);
var state_63529__$1 = state_63529;
var statearr_63531_65256 = state_63529__$1;
(statearr_63531_65256[(2)] = inst_63525);

(statearr_63531_65256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63530 === (1))){
var state_63529__$1 = state_63529;
var statearr_63533_65266 = state_63529__$1;
(statearr_63533_65266[(2)] = null);

(statearr_63533_65266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63530 === (4))){
var inst_63511 = (state_63529[(7)]);
var inst_63511__$1 = (state_63529[(2)]);
var inst_63512 = (inst_63511__$1 == null);
var state_63529__$1 = (function (){var statearr_63537 = state_63529;
(statearr_63537[(7)] = inst_63511__$1);

return statearr_63537;
})();
if(cljs.core.truth_(inst_63512)){
var statearr_63538_65277 = state_63529__$1;
(statearr_63538_65277[(1)] = (5));

} else {
var statearr_63539_65279 = state_63529__$1;
(statearr_63539_65279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63530 === (6))){
var inst_63511 = (state_63529[(7)]);
var inst_63516 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_63511) : p.call(null,inst_63511));
var state_63529__$1 = state_63529;
if(cljs.core.truth_(inst_63516)){
var statearr_63540_65289 = state_63529__$1;
(statearr_63540_65289[(1)] = (8));

} else {
var statearr_63541_65294 = state_63529__$1;
(statearr_63541_65294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63530 === (3))){
var inst_63527 = (state_63529[(2)]);
var state_63529__$1 = state_63529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63529__$1,inst_63527);
} else {
if((state_val_63530 === (2))){
var state_63529__$1 = state_63529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63529__$1,(4),ch);
} else {
if((state_val_63530 === (11))){
var inst_63519 = (state_63529[(2)]);
var state_63529__$1 = state_63529;
var statearr_63542_65301 = state_63529__$1;
(statearr_63542_65301[(2)] = inst_63519);

(statearr_63542_65301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63530 === (9))){
var state_63529__$1 = state_63529;
var statearr_63548_65307 = state_63529__$1;
(statearr_63548_65307[(2)] = null);

(statearr_63548_65307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63530 === (5))){
var inst_63514 = cljs.core.async.close_BANG_(out);
var state_63529__$1 = state_63529;
var statearr_63549_65315 = state_63529__$1;
(statearr_63549_65315[(2)] = inst_63514);

(statearr_63549_65315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63530 === (10))){
var inst_63522 = (state_63529[(2)]);
var state_63529__$1 = (function (){var statearr_63550 = state_63529;
(statearr_63550[(8)] = inst_63522);

return statearr_63550;
})();
var statearr_63551_65321 = state_63529__$1;
(statearr_63551_65321[(2)] = null);

(statearr_63551_65321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63530 === (8))){
var inst_63511 = (state_63529[(7)]);
var state_63529__$1 = state_63529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63529__$1,(11),out,inst_63511);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61262__auto__ = null;
var cljs$core$async$state_machine__61262__auto____0 = (function (){
var statearr_63552 = [null,null,null,null,null,null,null,null,null];
(statearr_63552[(0)] = cljs$core$async$state_machine__61262__auto__);

(statearr_63552[(1)] = (1));

return statearr_63552;
});
var cljs$core$async$state_machine__61262__auto____1 = (function (state_63529){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_63529);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e63553){if((e63553 instanceof Object)){
var ex__61265__auto__ = e63553;
var statearr_63554_65343 = state_63529;
(statearr_63554_65343[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63553;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65348 = state_63529;
state_63529 = G__65348;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$state_machine__61262__auto__ = function(state_63529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61262__auto____1.call(this,state_63529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61262__auto____0;
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61262__auto____1;
return cljs$core$async$state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_63555 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_63555[(6)] = c__61745__auto___65246);

return statearr_63555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__63558 = arguments.length;
switch (G__63558) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__61745__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_63628){
var state_val_63629 = (state_63628[(1)]);
if((state_val_63629 === (7))){
var inst_63624 = (state_63628[(2)]);
var state_63628__$1 = state_63628;
var statearr_63634_65366 = state_63628__$1;
(statearr_63634_65366[(2)] = inst_63624);

(statearr_63634_65366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (20))){
var inst_63594 = (state_63628[(7)]);
var inst_63605 = (state_63628[(2)]);
var inst_63606 = cljs.core.next(inst_63594);
var inst_63576 = inst_63606;
var inst_63577 = null;
var inst_63578 = (0);
var inst_63579 = (0);
var state_63628__$1 = (function (){var statearr_63635 = state_63628;
(statearr_63635[(8)] = inst_63579);

(statearr_63635[(9)] = inst_63605);

(statearr_63635[(10)] = inst_63578);

(statearr_63635[(11)] = inst_63577);

(statearr_63635[(12)] = inst_63576);

return statearr_63635;
})();
var statearr_63636_65371 = state_63628__$1;
(statearr_63636_65371[(2)] = null);

(statearr_63636_65371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (1))){
var state_63628__$1 = state_63628;
var statearr_63637_65376 = state_63628__$1;
(statearr_63637_65376[(2)] = null);

(statearr_63637_65376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (4))){
var inst_63565 = (state_63628[(13)]);
var inst_63565__$1 = (state_63628[(2)]);
var inst_63566 = (inst_63565__$1 == null);
var state_63628__$1 = (function (){var statearr_63641 = state_63628;
(statearr_63641[(13)] = inst_63565__$1);

return statearr_63641;
})();
if(cljs.core.truth_(inst_63566)){
var statearr_63642_65381 = state_63628__$1;
(statearr_63642_65381[(1)] = (5));

} else {
var statearr_63644_65382 = state_63628__$1;
(statearr_63644_65382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (15))){
var state_63628__$1 = state_63628;
var statearr_63652_65384 = state_63628__$1;
(statearr_63652_65384[(2)] = null);

(statearr_63652_65384[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (21))){
var state_63628__$1 = state_63628;
var statearr_63653_65388 = state_63628__$1;
(statearr_63653_65388[(2)] = null);

(statearr_63653_65388[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (13))){
var inst_63579 = (state_63628[(8)]);
var inst_63578 = (state_63628[(10)]);
var inst_63577 = (state_63628[(11)]);
var inst_63576 = (state_63628[(12)]);
var inst_63589 = (state_63628[(2)]);
var inst_63591 = (inst_63579 + (1));
var tmp63645 = inst_63578;
var tmp63646 = inst_63577;
var tmp63647 = inst_63576;
var inst_63576__$1 = tmp63647;
var inst_63577__$1 = tmp63646;
var inst_63578__$1 = tmp63645;
var inst_63579__$1 = inst_63591;
var state_63628__$1 = (function (){var statearr_63654 = state_63628;
(statearr_63654[(14)] = inst_63589);

(statearr_63654[(8)] = inst_63579__$1);

(statearr_63654[(10)] = inst_63578__$1);

(statearr_63654[(11)] = inst_63577__$1);

(statearr_63654[(12)] = inst_63576__$1);

return statearr_63654;
})();
var statearr_63655_65391 = state_63628__$1;
(statearr_63655_65391[(2)] = null);

(statearr_63655_65391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (22))){
var state_63628__$1 = state_63628;
var statearr_63656_65392 = state_63628__$1;
(statearr_63656_65392[(2)] = null);

(statearr_63656_65392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (6))){
var inst_63565 = (state_63628[(13)]);
var inst_63574 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_63565) : f.call(null,inst_63565));
var inst_63575 = cljs.core.seq(inst_63574);
var inst_63576 = inst_63575;
var inst_63577 = null;
var inst_63578 = (0);
var inst_63579 = (0);
var state_63628__$1 = (function (){var statearr_63660 = state_63628;
(statearr_63660[(8)] = inst_63579);

(statearr_63660[(10)] = inst_63578);

(statearr_63660[(11)] = inst_63577);

(statearr_63660[(12)] = inst_63576);

return statearr_63660;
})();
var statearr_63661_65398 = state_63628__$1;
(statearr_63661_65398[(2)] = null);

(statearr_63661_65398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (17))){
var inst_63594 = (state_63628[(7)]);
var inst_63598 = cljs.core.chunk_first(inst_63594);
var inst_63599 = cljs.core.chunk_rest(inst_63594);
var inst_63600 = cljs.core.count(inst_63598);
var inst_63576 = inst_63599;
var inst_63577 = inst_63598;
var inst_63578 = inst_63600;
var inst_63579 = (0);
var state_63628__$1 = (function (){var statearr_63662 = state_63628;
(statearr_63662[(8)] = inst_63579);

(statearr_63662[(10)] = inst_63578);

(statearr_63662[(11)] = inst_63577);

(statearr_63662[(12)] = inst_63576);

return statearr_63662;
})();
var statearr_63663_65403 = state_63628__$1;
(statearr_63663_65403[(2)] = null);

(statearr_63663_65403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (3))){
var inst_63626 = (state_63628[(2)]);
var state_63628__$1 = state_63628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63628__$1,inst_63626);
} else {
if((state_val_63629 === (12))){
var inst_63614 = (state_63628[(2)]);
var state_63628__$1 = state_63628;
var statearr_63665_65406 = state_63628__$1;
(statearr_63665_65406[(2)] = inst_63614);

(statearr_63665_65406[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (2))){
var state_63628__$1 = state_63628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63628__$1,(4),in$);
} else {
if((state_val_63629 === (23))){
var inst_63622 = (state_63628[(2)]);
var state_63628__$1 = state_63628;
var statearr_63666_65409 = state_63628__$1;
(statearr_63666_65409[(2)] = inst_63622);

(statearr_63666_65409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (19))){
var inst_63609 = (state_63628[(2)]);
var state_63628__$1 = state_63628;
var statearr_63670_65413 = state_63628__$1;
(statearr_63670_65413[(2)] = inst_63609);

(statearr_63670_65413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (11))){
var inst_63576 = (state_63628[(12)]);
var inst_63594 = (state_63628[(7)]);
var inst_63594__$1 = cljs.core.seq(inst_63576);
var state_63628__$1 = (function (){var statearr_63671 = state_63628;
(statearr_63671[(7)] = inst_63594__$1);

return statearr_63671;
})();
if(inst_63594__$1){
var statearr_63672_65424 = state_63628__$1;
(statearr_63672_65424[(1)] = (14));

} else {
var statearr_63673_65425 = state_63628__$1;
(statearr_63673_65425[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (9))){
var inst_63616 = (state_63628[(2)]);
var inst_63617 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_63628__$1 = (function (){var statearr_63677 = state_63628;
(statearr_63677[(15)] = inst_63616);

return statearr_63677;
})();
if(cljs.core.truth_(inst_63617)){
var statearr_63678_65438 = state_63628__$1;
(statearr_63678_65438[(1)] = (21));

} else {
var statearr_63679_65439 = state_63628__$1;
(statearr_63679_65439[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (5))){
var inst_63568 = cljs.core.async.close_BANG_(out);
var state_63628__$1 = state_63628;
var statearr_63680_65440 = state_63628__$1;
(statearr_63680_65440[(2)] = inst_63568);

(statearr_63680_65440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (14))){
var inst_63594 = (state_63628[(7)]);
var inst_63596 = cljs.core.chunked_seq_QMARK_(inst_63594);
var state_63628__$1 = state_63628;
if(inst_63596){
var statearr_63684_65457 = state_63628__$1;
(statearr_63684_65457[(1)] = (17));

} else {
var statearr_63685_65458 = state_63628__$1;
(statearr_63685_65458[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (16))){
var inst_63612 = (state_63628[(2)]);
var state_63628__$1 = state_63628;
var statearr_63686_65463 = state_63628__$1;
(statearr_63686_65463[(2)] = inst_63612);

(statearr_63686_65463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63629 === (10))){
var inst_63579 = (state_63628[(8)]);
var inst_63577 = (state_63628[(11)]);
var inst_63587 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_63577,inst_63579);
var state_63628__$1 = state_63628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63628__$1,(13),out,inst_63587);
} else {
if((state_val_63629 === (18))){
var inst_63594 = (state_63628[(7)]);
var inst_63603 = cljs.core.first(inst_63594);
var state_63628__$1 = state_63628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63628__$1,(20),out,inst_63603);
} else {
if((state_val_63629 === (8))){
var inst_63579 = (state_63628[(8)]);
var inst_63578 = (state_63628[(10)]);
var inst_63581 = (inst_63579 < inst_63578);
var inst_63582 = inst_63581;
var state_63628__$1 = state_63628;
if(cljs.core.truth_(inst_63582)){
var statearr_63687_65481 = state_63628__$1;
(statearr_63687_65481[(1)] = (10));

} else {
var statearr_63688_65483 = state_63628__$1;
(statearr_63688_65483[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__61262__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__61262__auto____0 = (function (){
var statearr_63689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63689[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__61262__auto__);

(statearr_63689[(1)] = (1));

return statearr_63689;
});
var cljs$core$async$mapcat_STAR__$_state_machine__61262__auto____1 = (function (state_63628){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_63628);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e63690){if((e63690 instanceof Object)){
var ex__61265__auto__ = e63690;
var statearr_63691_65493 = state_63628;
(statearr_63691_65493[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63690;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65495 = state_63628;
state_63628 = G__65495;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__61262__auto__ = function(state_63628){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__61262__auto____1.call(this,state_63628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__61262__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__61262__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_63693 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_63693[(6)] = c__61745__auto__);

return statearr_63693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));

return c__61745__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__63695 = arguments.length;
switch (G__63695) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__63698 = arguments.length;
switch (G__63698) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__63700 = arguments.length;
switch (G__63700) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61745__auto___65532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_63727){
var state_val_63728 = (state_63727[(1)]);
if((state_val_63728 === (7))){
var inst_63722 = (state_63727[(2)]);
var state_63727__$1 = state_63727;
var statearr_63730_65536 = state_63727__$1;
(statearr_63730_65536[(2)] = inst_63722);

(statearr_63730_65536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63728 === (1))){
var inst_63701 = null;
var state_63727__$1 = (function (){var statearr_63731 = state_63727;
(statearr_63731[(7)] = inst_63701);

return statearr_63731;
})();
var statearr_63732_65539 = state_63727__$1;
(statearr_63732_65539[(2)] = null);

(statearr_63732_65539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63728 === (4))){
var inst_63707 = (state_63727[(8)]);
var inst_63707__$1 = (state_63727[(2)]);
var inst_63708 = (inst_63707__$1 == null);
var inst_63709 = cljs.core.not(inst_63708);
var state_63727__$1 = (function (){var statearr_63733 = state_63727;
(statearr_63733[(8)] = inst_63707__$1);

return statearr_63733;
})();
if(inst_63709){
var statearr_63734_65543 = state_63727__$1;
(statearr_63734_65543[(1)] = (5));

} else {
var statearr_63735_65544 = state_63727__$1;
(statearr_63735_65544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63728 === (6))){
var state_63727__$1 = state_63727;
var statearr_63736_65545 = state_63727__$1;
(statearr_63736_65545[(2)] = null);

(statearr_63736_65545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63728 === (3))){
var inst_63724 = (state_63727[(2)]);
var inst_63725 = cljs.core.async.close_BANG_(out);
var state_63727__$1 = (function (){var statearr_63737 = state_63727;
(statearr_63737[(9)] = inst_63724);

return statearr_63737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_63727__$1,inst_63725);
} else {
if((state_val_63728 === (2))){
var state_63727__$1 = state_63727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63727__$1,(4),ch);
} else {
if((state_val_63728 === (11))){
var inst_63707 = (state_63727[(8)]);
var inst_63716 = (state_63727[(2)]);
var inst_63701 = inst_63707;
var state_63727__$1 = (function (){var statearr_63738 = state_63727;
(statearr_63738[(7)] = inst_63701);

(statearr_63738[(10)] = inst_63716);

return statearr_63738;
})();
var statearr_63739_65549 = state_63727__$1;
(statearr_63739_65549[(2)] = null);

(statearr_63739_65549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63728 === (9))){
var inst_63707 = (state_63727[(8)]);
var state_63727__$1 = state_63727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63727__$1,(11),out,inst_63707);
} else {
if((state_val_63728 === (5))){
var inst_63701 = (state_63727[(7)]);
var inst_63707 = (state_63727[(8)]);
var inst_63711 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63707,inst_63701);
var state_63727__$1 = state_63727;
if(inst_63711){
var statearr_63741_65554 = state_63727__$1;
(statearr_63741_65554[(1)] = (8));

} else {
var statearr_63742_65555 = state_63727__$1;
(statearr_63742_65555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63728 === (10))){
var inst_63719 = (state_63727[(2)]);
var state_63727__$1 = state_63727;
var statearr_63743_65556 = state_63727__$1;
(statearr_63743_65556[(2)] = inst_63719);

(statearr_63743_65556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63728 === (8))){
var inst_63701 = (state_63727[(7)]);
var tmp63740 = inst_63701;
var inst_63701__$1 = tmp63740;
var state_63727__$1 = (function (){var statearr_63744 = state_63727;
(statearr_63744[(7)] = inst_63701__$1);

return statearr_63744;
})();
var statearr_63745_65560 = state_63727__$1;
(statearr_63745_65560[(2)] = null);

(statearr_63745_65560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61262__auto__ = null;
var cljs$core$async$state_machine__61262__auto____0 = (function (){
var statearr_63746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63746[(0)] = cljs$core$async$state_machine__61262__auto__);

(statearr_63746[(1)] = (1));

return statearr_63746;
});
var cljs$core$async$state_machine__61262__auto____1 = (function (state_63727){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_63727);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e63747){if((e63747 instanceof Object)){
var ex__61265__auto__ = e63747;
var statearr_63748_65568 = state_63727;
(statearr_63748_65568[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65569 = state_63727;
state_63727 = G__65569;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$state_machine__61262__auto__ = function(state_63727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61262__auto____1.call(this,state_63727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61262__auto____0;
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61262__auto____1;
return cljs$core$async$state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_63749 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_63749[(6)] = c__61745__auto___65532);

return statearr_63749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__63752 = arguments.length;
switch (G__63752) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61745__auto___65576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_63792){
var state_val_63793 = (state_63792[(1)]);
if((state_val_63793 === (7))){
var inst_63788 = (state_63792[(2)]);
var state_63792__$1 = state_63792;
var statearr_63796_65578 = state_63792__$1;
(statearr_63796_65578[(2)] = inst_63788);

(statearr_63796_65578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (1))){
var inst_63754 = (new Array(n));
var inst_63755 = inst_63754;
var inst_63756 = (0);
var state_63792__$1 = (function (){var statearr_63797 = state_63792;
(statearr_63797[(7)] = inst_63756);

(statearr_63797[(8)] = inst_63755);

return statearr_63797;
})();
var statearr_63798_65579 = state_63792__$1;
(statearr_63798_65579[(2)] = null);

(statearr_63798_65579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (4))){
var inst_63759 = (state_63792[(9)]);
var inst_63759__$1 = (state_63792[(2)]);
var inst_63760 = (inst_63759__$1 == null);
var inst_63761 = cljs.core.not(inst_63760);
var state_63792__$1 = (function (){var statearr_63799 = state_63792;
(statearr_63799[(9)] = inst_63759__$1);

return statearr_63799;
})();
if(inst_63761){
var statearr_63800_65588 = state_63792__$1;
(statearr_63800_65588[(1)] = (5));

} else {
var statearr_63801_65590 = state_63792__$1;
(statearr_63801_65590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (15))){
var inst_63782 = (state_63792[(2)]);
var state_63792__$1 = state_63792;
var statearr_63802_65591 = state_63792__$1;
(statearr_63802_65591[(2)] = inst_63782);

(statearr_63802_65591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (13))){
var state_63792__$1 = state_63792;
var statearr_63803_65593 = state_63792__$1;
(statearr_63803_65593[(2)] = null);

(statearr_63803_65593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (6))){
var inst_63756 = (state_63792[(7)]);
var inst_63778 = (inst_63756 > (0));
var state_63792__$1 = state_63792;
if(cljs.core.truth_(inst_63778)){
var statearr_63804_65595 = state_63792__$1;
(statearr_63804_65595[(1)] = (12));

} else {
var statearr_63805_65596 = state_63792__$1;
(statearr_63805_65596[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (3))){
var inst_63790 = (state_63792[(2)]);
var state_63792__$1 = state_63792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63792__$1,inst_63790);
} else {
if((state_val_63793 === (12))){
var inst_63755 = (state_63792[(8)]);
var inst_63780 = cljs.core.vec(inst_63755);
var state_63792__$1 = state_63792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63792__$1,(15),out,inst_63780);
} else {
if((state_val_63793 === (2))){
var state_63792__$1 = state_63792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63792__$1,(4),ch);
} else {
if((state_val_63793 === (11))){
var inst_63771 = (state_63792[(2)]);
var inst_63772 = (new Array(n));
var inst_63755 = inst_63772;
var inst_63756 = (0);
var state_63792__$1 = (function (){var statearr_63807 = state_63792;
(statearr_63807[(7)] = inst_63756);

(statearr_63807[(10)] = inst_63771);

(statearr_63807[(8)] = inst_63755);

return statearr_63807;
})();
var statearr_63808_65598 = state_63792__$1;
(statearr_63808_65598[(2)] = null);

(statearr_63808_65598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (9))){
var inst_63755 = (state_63792[(8)]);
var inst_63769 = cljs.core.vec(inst_63755);
var state_63792__$1 = state_63792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63792__$1,(11),out,inst_63769);
} else {
if((state_val_63793 === (5))){
var inst_63756 = (state_63792[(7)]);
var inst_63764 = (state_63792[(11)]);
var inst_63759 = (state_63792[(9)]);
var inst_63755 = (state_63792[(8)]);
var inst_63763 = (inst_63755[inst_63756] = inst_63759);
var inst_63764__$1 = (inst_63756 + (1));
var inst_63765 = (inst_63764__$1 < n);
var state_63792__$1 = (function (){var statearr_63809 = state_63792;
(statearr_63809[(12)] = inst_63763);

(statearr_63809[(11)] = inst_63764__$1);

return statearr_63809;
})();
if(cljs.core.truth_(inst_63765)){
var statearr_63810_65600 = state_63792__$1;
(statearr_63810_65600[(1)] = (8));

} else {
var statearr_63811_65601 = state_63792__$1;
(statearr_63811_65601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (14))){
var inst_63785 = (state_63792[(2)]);
var inst_63786 = cljs.core.async.close_BANG_(out);
var state_63792__$1 = (function (){var statearr_63813 = state_63792;
(statearr_63813[(13)] = inst_63785);

return statearr_63813;
})();
var statearr_63814_65602 = state_63792__$1;
(statearr_63814_65602[(2)] = inst_63786);

(statearr_63814_65602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (10))){
var inst_63776 = (state_63792[(2)]);
var state_63792__$1 = state_63792;
var statearr_63816_65604 = state_63792__$1;
(statearr_63816_65604[(2)] = inst_63776);

(statearr_63816_65604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (8))){
var inst_63764 = (state_63792[(11)]);
var inst_63755 = (state_63792[(8)]);
var tmp63812 = inst_63755;
var inst_63755__$1 = tmp63812;
var inst_63756 = inst_63764;
var state_63792__$1 = (function (){var statearr_63817 = state_63792;
(statearr_63817[(7)] = inst_63756);

(statearr_63817[(8)] = inst_63755__$1);

return statearr_63817;
})();
var statearr_63818_65606 = state_63792__$1;
(statearr_63818_65606[(2)] = null);

(statearr_63818_65606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61262__auto__ = null;
var cljs$core$async$state_machine__61262__auto____0 = (function (){
var statearr_63819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63819[(0)] = cljs$core$async$state_machine__61262__auto__);

(statearr_63819[(1)] = (1));

return statearr_63819;
});
var cljs$core$async$state_machine__61262__auto____1 = (function (state_63792){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_63792);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e63820){if((e63820 instanceof Object)){
var ex__61265__auto__ = e63820;
var statearr_63821_65609 = state_63792;
(statearr_63821_65609[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65614 = state_63792;
state_63792 = G__65614;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$state_machine__61262__auto__ = function(state_63792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61262__auto____1.call(this,state_63792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61262__auto____0;
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61262__auto____1;
return cljs$core$async$state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_63822 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_63822[(6)] = c__61745__auto___65576);

return statearr_63822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__63827 = arguments.length;
switch (G__63827) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61745__auto___65617 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_63873){
var state_val_63874 = (state_63873[(1)]);
if((state_val_63874 === (7))){
var inst_63869 = (state_63873[(2)]);
var state_63873__$1 = state_63873;
var statearr_63875_65619 = state_63873__$1;
(statearr_63875_65619[(2)] = inst_63869);

(statearr_63875_65619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63874 === (1))){
var inst_63832 = [];
var inst_63833 = inst_63832;
var inst_63834 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_63873__$1 = (function (){var statearr_63876 = state_63873;
(statearr_63876[(7)] = inst_63833);

(statearr_63876[(8)] = inst_63834);

return statearr_63876;
})();
var statearr_63877_65620 = state_63873__$1;
(statearr_63877_65620[(2)] = null);

(statearr_63877_65620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63874 === (4))){
var inst_63837 = (state_63873[(9)]);
var inst_63837__$1 = (state_63873[(2)]);
var inst_63838 = (inst_63837__$1 == null);
var inst_63839 = cljs.core.not(inst_63838);
var state_63873__$1 = (function (){var statearr_63881 = state_63873;
(statearr_63881[(9)] = inst_63837__$1);

return statearr_63881;
})();
if(inst_63839){
var statearr_63882_65625 = state_63873__$1;
(statearr_63882_65625[(1)] = (5));

} else {
var statearr_63883_65626 = state_63873__$1;
(statearr_63883_65626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63874 === (15))){
var inst_63863 = (state_63873[(2)]);
var state_63873__$1 = state_63873;
var statearr_63884_65627 = state_63873__$1;
(statearr_63884_65627[(2)] = inst_63863);

(statearr_63884_65627[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63874 === (13))){
var state_63873__$1 = state_63873;
var statearr_63888_65630 = state_63873__$1;
(statearr_63888_65630[(2)] = null);

(statearr_63888_65630[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63874 === (6))){
var inst_63833 = (state_63873[(7)]);
var inst_63858 = inst_63833.length;
var inst_63859 = (inst_63858 > (0));
var state_63873__$1 = state_63873;
if(cljs.core.truth_(inst_63859)){
var statearr_63889_65631 = state_63873__$1;
(statearr_63889_65631[(1)] = (12));

} else {
var statearr_63890_65632 = state_63873__$1;
(statearr_63890_65632[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63874 === (3))){
var inst_63871 = (state_63873[(2)]);
var state_63873__$1 = state_63873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63873__$1,inst_63871);
} else {
if((state_val_63874 === (12))){
var inst_63833 = (state_63873[(7)]);
var inst_63861 = cljs.core.vec(inst_63833);
var state_63873__$1 = state_63873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63873__$1,(15),out,inst_63861);
} else {
if((state_val_63874 === (2))){
var state_63873__$1 = state_63873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63873__$1,(4),ch);
} else {
if((state_val_63874 === (11))){
var inst_63841 = (state_63873[(10)]);
var inst_63837 = (state_63873[(9)]);
var inst_63851 = (state_63873[(2)]);
var inst_63852 = [];
var inst_63853 = inst_63852.push(inst_63837);
var inst_63833 = inst_63852;
var inst_63834 = inst_63841;
var state_63873__$1 = (function (){var statearr_63897 = state_63873;
(statearr_63897[(11)] = inst_63851);

(statearr_63897[(7)] = inst_63833);

(statearr_63897[(12)] = inst_63853);

(statearr_63897[(8)] = inst_63834);

return statearr_63897;
})();
var statearr_63898_65640 = state_63873__$1;
(statearr_63898_65640[(2)] = null);

(statearr_63898_65640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63874 === (9))){
var inst_63833 = (state_63873[(7)]);
var inst_63849 = cljs.core.vec(inst_63833);
var state_63873__$1 = state_63873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63873__$1,(11),out,inst_63849);
} else {
if((state_val_63874 === (5))){
var inst_63841 = (state_63873[(10)]);
var inst_63834 = (state_63873[(8)]);
var inst_63837 = (state_63873[(9)]);
var inst_63841__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_63837) : f.call(null,inst_63837));
var inst_63842 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_63841__$1,inst_63834);
var inst_63843 = cljs.core.keyword_identical_QMARK_(inst_63834,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_63844 = ((inst_63842) || (inst_63843));
var state_63873__$1 = (function (){var statearr_63902 = state_63873;
(statearr_63902[(10)] = inst_63841__$1);

return statearr_63902;
})();
if(cljs.core.truth_(inst_63844)){
var statearr_63905_65651 = state_63873__$1;
(statearr_63905_65651[(1)] = (8));

} else {
var statearr_63907_65652 = state_63873__$1;
(statearr_63907_65652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63874 === (14))){
var inst_63866 = (state_63873[(2)]);
var inst_63867 = cljs.core.async.close_BANG_(out);
var state_63873__$1 = (function (){var statearr_63909 = state_63873;
(statearr_63909[(13)] = inst_63866);

return statearr_63909;
})();
var statearr_63910_65656 = state_63873__$1;
(statearr_63910_65656[(2)] = inst_63867);

(statearr_63910_65656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63874 === (10))){
var inst_63856 = (state_63873[(2)]);
var state_63873__$1 = state_63873;
var statearr_63913_65660 = state_63873__$1;
(statearr_63913_65660[(2)] = inst_63856);

(statearr_63913_65660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63874 === (8))){
var inst_63841 = (state_63873[(10)]);
var inst_63833 = (state_63873[(7)]);
var inst_63837 = (state_63873[(9)]);
var inst_63846 = inst_63833.push(inst_63837);
var tmp63908 = inst_63833;
var inst_63833__$1 = tmp63908;
var inst_63834 = inst_63841;
var state_63873__$1 = (function (){var statearr_63919 = state_63873;
(statearr_63919[(7)] = inst_63833__$1);

(statearr_63919[(8)] = inst_63834);

(statearr_63919[(14)] = inst_63846);

return statearr_63919;
})();
var statearr_63920_65670 = state_63873__$1;
(statearr_63920_65670[(2)] = null);

(statearr_63920_65670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__61262__auto__ = null;
var cljs$core$async$state_machine__61262__auto____0 = (function (){
var statearr_63921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63921[(0)] = cljs$core$async$state_machine__61262__auto__);

(statearr_63921[(1)] = (1));

return statearr_63921;
});
var cljs$core$async$state_machine__61262__auto____1 = (function (state_63873){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_63873);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e63922){if((e63922 instanceof Object)){
var ex__61265__auto__ = e63922;
var statearr_63923_65682 = state_63873;
(statearr_63923_65682[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_63873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63922;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65683 = state_63873;
state_63873 = G__65683;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
cljs$core$async$state_machine__61262__auto__ = function(state_63873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__61262__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__61262__auto____1.call(this,state_63873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__61262__auto____0;
cljs$core$async$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__61262__auto____1;
return cljs$core$async$state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_63926 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_63926[(6)] = c__61745__auto___65617);

return statearr_63926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
