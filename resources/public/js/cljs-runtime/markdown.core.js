goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__67357){
var map__67358 = p__67357;
var map__67358__$1 = (((((!((map__67358 == null))))?(((((map__67358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67358):map__67358);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67358__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67358__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67358__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__67362 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__67363 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__67363);

try{var vec__67365 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__67369,transformer){
var vec__67370 = p__67369;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67370,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67370,(1),null);
var G__67379 = text;
var G__67380 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__67379,G__67380) : transformer.call(null,G__67379,G__67380));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4185__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67365,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67365,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__67362);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67508 = arguments.length;
var i__4790__auto___67510 = (0);
while(true){
if((i__4790__auto___67510 < len__4789__auto___67508)){
args__4795__auto__.push((arguments[i__4790__auto___67510]));

var G__67512 = (i__4790__auto___67510 + (1));
i__4790__auto___67510 = G__67512;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq67384){
var G__67385 = cljs.core.first(seq67384);
var seq67384__$1 = cljs.core.next(seq67384);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67385,seq67384__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__67392_67524 = cljs.core.seq(lines);
var chunk__67393_67525 = null;
var count__67394_67526 = (0);
var i__67395_67527 = (0);
while(true){
if((i__67395_67527 < count__67394_67526)){
var line_67529 = chunk__67393_67525.cljs$core$IIndexed$_nth$arity$2(null,i__67395_67527);
markdown.links.parse_reference_link(line_67529,references);


var G__67530 = seq__67392_67524;
var G__67531 = chunk__67393_67525;
var G__67532 = count__67394_67526;
var G__67533 = (i__67395_67527 + (1));
seq__67392_67524 = G__67530;
chunk__67393_67525 = G__67531;
count__67394_67526 = G__67532;
i__67395_67527 = G__67533;
continue;
} else {
var temp__5735__auto___67534 = cljs.core.seq(seq__67392_67524);
if(temp__5735__auto___67534){
var seq__67392_67535__$1 = temp__5735__auto___67534;
if(cljs.core.chunked_seq_QMARK_(seq__67392_67535__$1)){
var c__4609__auto___67536 = cljs.core.chunk_first(seq__67392_67535__$1);
var G__67537 = cljs.core.chunk_rest(seq__67392_67535__$1);
var G__67538 = c__4609__auto___67536;
var G__67539 = cljs.core.count(c__4609__auto___67536);
var G__67540 = (0);
seq__67392_67524 = G__67537;
chunk__67393_67525 = G__67538;
count__67394_67526 = G__67539;
i__67395_67527 = G__67540;
continue;
} else {
var line_67541 = cljs.core.first(seq__67392_67535__$1);
markdown.links.parse_reference_link(line_67541,references);


var G__67542 = cljs.core.next(seq__67392_67535__$1);
var G__67543 = null;
var G__67544 = (0);
var G__67545 = (0);
seq__67392_67524 = G__67542;
chunk__67393_67525 = G__67543;
count__67394_67526 = G__67544;
i__67395_67527 = G__67545;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__67404_67546 = cljs.core.seq(lines);
var chunk__67405_67547 = null;
var count__67406_67548 = (0);
var i__67407_67549 = (0);
while(true){
if((i__67407_67549 < count__67406_67548)){
var line_67550 = chunk__67405_67547.cljs$core$IIndexed$_nth$arity$2(null,i__67407_67549);
markdown.links.parse_footnote_link(line_67550,footnotes);


var G__67552 = seq__67404_67546;
var G__67553 = chunk__67405_67547;
var G__67554 = count__67406_67548;
var G__67555 = (i__67407_67549 + (1));
seq__67404_67546 = G__67552;
chunk__67405_67547 = G__67553;
count__67406_67548 = G__67554;
i__67407_67549 = G__67555;
continue;
} else {
var temp__5735__auto___67557 = cljs.core.seq(seq__67404_67546);
if(temp__5735__auto___67557){
var seq__67404_67562__$1 = temp__5735__auto___67557;
if(cljs.core.chunked_seq_QMARK_(seq__67404_67562__$1)){
var c__4609__auto___67563 = cljs.core.chunk_first(seq__67404_67562__$1);
var G__67565 = cljs.core.chunk_rest(seq__67404_67562__$1);
var G__67566 = c__4609__auto___67563;
var G__67567 = cljs.core.count(c__4609__auto___67563);
var G__67568 = (0);
seq__67404_67546 = G__67565;
chunk__67405_67547 = G__67566;
count__67406_67548 = G__67567;
i__67407_67549 = G__67568;
continue;
} else {
var line_67570 = cljs.core.first(seq__67404_67562__$1);
markdown.links.parse_footnote_link(line_67570,footnotes);


var G__67571 = cljs.core.next(seq__67404_67562__$1);
var G__67572 = null;
var G__67573 = (0);
var G__67574 = (0);
seq__67404_67546 = G__67571;
chunk__67405_67547 = G__67572;
count__67406_67548 = G__67573;
i__67407_67549 = G__67574;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__67419 = cljs.core.split_with((function (p1__67417_SHARP_){
return cljs.core.not_empty(p1__67417_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67419,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67419,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__67426 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__67427 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__67428 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__67429 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__67428);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__67429);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__67431 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67431,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67431,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__67441_67583 = lines__$1;
var vec__67443_67584 = G__67441_67583;
var seq__67444_67585 = cljs.core.seq(vec__67443_67584);
var first__67445_67586 = cljs.core.first(seq__67444_67585);
var seq__67444_67587__$1 = cljs.core.next(seq__67444_67585);
var line_67588 = first__67445_67586;
var more_67589 = seq__67444_67587__$1;
var state_67590 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__67441_67593__$1 = G__67441_67583;
var state_67594__$1 = state_67590;
while(true){
var vec__67465_67595 = G__67441_67593__$1;
var seq__67466_67596 = cljs.core.seq(vec__67465_67595);
var first__67467_67597 = cljs.core.first(seq__67466_67596);
var seq__67466_67598__$1 = cljs.core.next(seq__67466_67596);
var line_67599__$1 = first__67467_67597;
var more_67600__$1 = seq__67466_67598__$1;
var state_67601__$2 = state_67594__$1;
var line_67603__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_67601__$2))?"":line_67599__$1);
var state_67604__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_67601__$2))?(function (){var G__67468 = html;
var G__67469 = new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_67601__$2);
var G__67470 = new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_67601__$2);
var G__67471 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_67601__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__67468,G__67469,G__67470,G__67471) : transformer.call(null,G__67468,G__67469,G__67470,G__67471));
})():state_67601__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_67600__$1))){
var G__67608 = more_67600__$1;
var G__67609 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__67472 = html;
var G__67473 = line_67603__$2;
var G__67474 = cljs.core.first(more_67600__$1);
var G__67475 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_67604__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749));
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__67472,G__67473,G__67474,G__67475) : transformer.call(null,G__67472,G__67473,G__67474,G__67475));
})(),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_67603__$2.trim()));
G__67441_67593__$1 = G__67608;
state_67594__$1 = G__67609;
continue;
} else {
var G__67477_67610 = html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_67604__$3)));
var G__67478_67611 = line_67603__$2;
var G__67479_67612 = "";
var G__67480_67613 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_67604__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__67477_67610,G__67478_67611,G__67479_67612,G__67480_67613) : transformer.call(null,G__67477_67610,G__67478_67611,G__67479_67612,G__67480_67613));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__67427);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__67426);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67623 = arguments.length;
var i__4790__auto___67624 = (0);
while(true){
if((i__4790__auto___67624 < len__4789__auto___67623)){
args__4795__auto__.push((arguments[i__4790__auto___67624]));

var G__67625 = (i__4790__auto___67624 + (1));
i__4790__auto___67624 = G__67625;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq67482){
var G__67483 = cljs.core.first(seq67482);
var seq67482__$1 = cljs.core.next(seq67482);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67483,seq67482__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67626 = arguments.length;
var i__4790__auto___67627 = (0);
while(true){
if((i__4790__auto___67627 < len__4789__auto___67626)){
args__4795__auto__.push((arguments[i__4790__auto___67627]));

var G__67628 = (i__4790__auto___67627 + (1));
i__4790__auto___67627 = G__67628;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq67487){
var G__67488 = cljs.core.first(seq67487);
var seq67487__$1 = cljs.core.next(seq67487);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67488,seq67487__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67632 = arguments.length;
var i__4790__auto___67633 = (0);
while(true){
if((i__4790__auto___67633 < len__4789__auto___67632)){
args__4795__auto__.push((arguments[i__4790__auto___67633]));

var G__67634 = (i__4790__auto___67633 + (1));
i__4790__auto___67633 = G__67634;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq67494){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67494));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67638 = arguments.length;
var i__4790__auto___67639 = (0);
while(true){
if((i__4790__auto___67639 < len__4789__auto___67638)){
args__4795__auto__.push((arguments[i__4790__auto___67639]));

var G__67642 = (i__4790__auto___67639 + (1));
i__4790__auto___67639 = G__67642;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq67497){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67497));
}));


//# sourceMappingURL=markdown.core.js.map
