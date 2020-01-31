goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__64106 = coll;
var G__64107 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__64106,G__64107) : shadow.dom.lazy_native_coll_seq.call(null,G__64106,G__64107));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__64133 = arguments.length;
switch (G__64133) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__64142 = arguments.length;
switch (G__64142) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__64150 = arguments.length;
switch (G__64150) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__64156 = arguments.length;
switch (G__64156) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__64162 = arguments.length;
switch (G__64162) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__64164 = document;
var G__64165 = shadow.dom.dom_node(el);
return goog.dom.contains(G__64164,G__64165);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__64167 = shadow.dom.dom_node(parent);
var G__64168 = shadow.dom.dom_node(el);
return goog.dom.contains(G__64167,G__64168);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__64175 = shadow.dom.dom_node(el);
var G__64176 = cls;
return goog.dom.classlist.add(G__64175,G__64176);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__64180 = shadow.dom.dom_node(el);
var G__64181 = cls;
return goog.dom.classlist.remove(G__64180,G__64181);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__64188 = arguments.length;
switch (G__64188) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__64190 = shadow.dom.dom_node(el);
var G__64191 = cls;
return goog.dom.classlist.toggle(G__64190,G__64191);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e64193){if((e64193 instanceof Object)){
var e = e64193;
return console.log("didnt support attachEvent",el,e);
} else {
throw e64193;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__64204 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__64205 = null;
var count__64206 = (0);
var i__64207 = (0);
while(true){
if((i__64207 < count__64206)){
var el = chunk__64205.cljs$core$IIndexed$_nth$arity$2(null,i__64207);
var handler_65111__$1 = ((function (seq__64204,chunk__64205,count__64206,i__64207,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__64204,chunk__64205,count__64206,i__64207,el))
;
var G__64220_65114 = el;
var G__64221_65115 = cljs.core.name(ev);
var G__64222_65116 = handler_65111__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__64220_65114,G__64221_65115,G__64222_65116) : shadow.dom.dom_listen.call(null,G__64220_65114,G__64221_65115,G__64222_65116));


var G__65117 = seq__64204;
var G__65118 = chunk__64205;
var G__65119 = count__64206;
var G__65120 = (i__64207 + (1));
seq__64204 = G__65117;
chunk__64205 = G__65118;
count__64206 = G__65119;
i__64207 = G__65120;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64204);
if(temp__5735__auto__){
var seq__64204__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64204__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__64204__$1);
var G__65124 = cljs.core.chunk_rest(seq__64204__$1);
var G__65125 = c__4609__auto__;
var G__65126 = cljs.core.count(c__4609__auto__);
var G__65127 = (0);
seq__64204 = G__65124;
chunk__64205 = G__65125;
count__64206 = G__65126;
i__64207 = G__65127;
continue;
} else {
var el = cljs.core.first(seq__64204__$1);
var handler_65129__$1 = ((function (seq__64204,chunk__64205,count__64206,i__64207,el,seq__64204__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__64204,chunk__64205,count__64206,i__64207,el,seq__64204__$1,temp__5735__auto__))
;
var G__64224_65131 = el;
var G__64225_65132 = cljs.core.name(ev);
var G__64226_65133 = handler_65129__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__64224_65131,G__64225_65132,G__64226_65133) : shadow.dom.dom_listen.call(null,G__64224_65131,G__64225_65132,G__64226_65133));


var G__65140 = cljs.core.next(seq__64204__$1);
var G__65141 = null;
var G__65142 = (0);
var G__65143 = (0);
seq__64204 = G__65140;
chunk__64205 = G__65141;
count__64206 = G__65142;
i__64207 = G__65143;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__64236 = arguments.length;
switch (G__64236) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__64244 = shadow.dom.dom_node(el);
var G__64245 = cljs.core.name(ev);
var G__64246 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__64244,G__64245,G__64246) : shadow.dom.dom_listen.call(null,G__64244,G__64245,G__64246));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__64251 = shadow.dom.dom_node(el);
var G__64252 = cljs.core.name(ev);
var G__64253 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__64251,G__64252,G__64253) : shadow.dom.dom_listen_remove.call(null,G__64251,G__64252,G__64253));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__64255 = cljs.core.seq(events);
var chunk__64256 = null;
var count__64257 = (0);
var i__64258 = (0);
while(true){
if((i__64258 < count__64257)){
var vec__64270 = chunk__64256.cljs$core$IIndexed$_nth$arity$2(null,i__64258);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64270,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64270,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65168 = seq__64255;
var G__65169 = chunk__64256;
var G__65170 = count__64257;
var G__65171 = (i__64258 + (1));
seq__64255 = G__65168;
chunk__64256 = G__65169;
count__64257 = G__65170;
i__64258 = G__65171;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64255);
if(temp__5735__auto__){
var seq__64255__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64255__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__64255__$1);
var G__65173 = cljs.core.chunk_rest(seq__64255__$1);
var G__65174 = c__4609__auto__;
var G__65175 = cljs.core.count(c__4609__auto__);
var G__65176 = (0);
seq__64255 = G__65173;
chunk__64256 = G__65174;
count__64257 = G__65175;
i__64258 = G__65176;
continue;
} else {
var vec__64273 = cljs.core.first(seq__64255__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64273,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__65182 = cljs.core.next(seq__64255__$1);
var G__65183 = null;
var G__65184 = (0);
var G__65185 = (0);
seq__64255 = G__65182;
chunk__64256 = G__65183;
count__64257 = G__65184;
i__64258 = G__65185;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__64279 = cljs.core.seq(styles);
var chunk__64280 = null;
var count__64281 = (0);
var i__64282 = (0);
while(true){
if((i__64282 < count__64281)){
var vec__64299 = chunk__64280.cljs$core$IIndexed$_nth$arity$2(null,i__64282);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64299,(1),null);
var G__64302_65191 = dom;
var G__64303_65192 = cljs.core.name(k);
var G__64304_65193 = (((v == null))?"":v);
goog.style.setStyle(G__64302_65191,G__64303_65192,G__64304_65193);


var G__65194 = seq__64279;
var G__65195 = chunk__64280;
var G__65196 = count__64281;
var G__65197 = (i__64282 + (1));
seq__64279 = G__65194;
chunk__64280 = G__65195;
count__64281 = G__65196;
i__64282 = G__65197;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64279);
if(temp__5735__auto__){
var seq__64279__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64279__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__64279__$1);
var G__65201 = cljs.core.chunk_rest(seq__64279__$1);
var G__65202 = c__4609__auto__;
var G__65203 = cljs.core.count(c__4609__auto__);
var G__65204 = (0);
seq__64279 = G__65201;
chunk__64280 = G__65202;
count__64281 = G__65203;
i__64282 = G__65204;
continue;
} else {
var vec__64307 = cljs.core.first(seq__64279__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64307,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64307,(1),null);
var G__64311_65206 = dom;
var G__64312_65207 = cljs.core.name(k);
var G__64313_65208 = (((v == null))?"":v);
goog.style.setStyle(G__64311_65206,G__64312_65207,G__64313_65208);


var G__65212 = cljs.core.next(seq__64279__$1);
var G__65213 = null;
var G__65214 = (0);
var G__65215 = (0);
seq__64279 = G__65212;
chunk__64280 = G__65213;
count__64281 = G__65214;
i__64282 = G__65215;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__64321_65216 = key;
var G__64321_65217__$1 = (((G__64321_65216 instanceof cljs.core.Keyword))?G__64321_65216.fqn:null);
switch (G__64321_65217__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_65223 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_65223,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_65223,"aria-");
}
})())){
el.setAttribute(ks_65223,value);
} else {
(el[ks_65223] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__64347 = shadow.dom.dom_node(el);
var G__64348 = cls;
return goog.dom.classlist.contains(G__64347,G__64348);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__64355){
var map__64356 = p__64355;
var map__64356__$1 = (((((!((map__64356 == null))))?(((((map__64356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64356):map__64356);
var props = map__64356__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64356__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__64360 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64360,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64360,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64360,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__64367 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__64367,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__64367;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__64374 = arguments.length;
switch (G__64374) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__64381){
var vec__64382 = p__64381;
var seq__64383 = cljs.core.seq(vec__64382);
var first__64384 = cljs.core.first(seq__64383);
var seq__64383__$1 = cljs.core.next(seq__64383);
var nn = first__64384;
var first__64384__$1 = cljs.core.first(seq__64383__$1);
var seq__64383__$2 = cljs.core.next(seq__64383__$1);
var np = first__64384__$1;
var nc = seq__64383__$2;
var node = vec__64382;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__64394 = nn;
var G__64395 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__64394,G__64395) : create_fn.call(null,G__64394,G__64395));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__64396 = nn;
var G__64397 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__64396,G__64397) : create_fn.call(null,G__64396,G__64397));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__64398 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64398,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64398,(1),null);
var seq__64401_65250 = cljs.core.seq(node_children);
var chunk__64402_65251 = null;
var count__64403_65252 = (0);
var i__64404_65253 = (0);
while(true){
if((i__64404_65253 < count__64403_65252)){
var child_struct_65254 = chunk__64402_65251.cljs$core$IIndexed$_nth$arity$2(null,i__64404_65253);
var children_65255 = shadow.dom.dom_node(child_struct_65254);
if(cljs.core.seq_QMARK_(children_65255)){
var seq__64452_65257 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65255));
var chunk__64454_65258 = null;
var count__64455_65259 = (0);
var i__64456_65260 = (0);
while(true){
if((i__64456_65260 < count__64455_65259)){
var child_65265 = chunk__64454_65258.cljs$core$IIndexed$_nth$arity$2(null,i__64456_65260);
if(cljs.core.truth_(child_65265)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65265);


var G__65267 = seq__64452_65257;
var G__65268 = chunk__64454_65258;
var G__65269 = count__64455_65259;
var G__65270 = (i__64456_65260 + (1));
seq__64452_65257 = G__65267;
chunk__64454_65258 = G__65268;
count__64455_65259 = G__65269;
i__64456_65260 = G__65270;
continue;
} else {
var G__65271 = seq__64452_65257;
var G__65272 = chunk__64454_65258;
var G__65273 = count__64455_65259;
var G__65274 = (i__64456_65260 + (1));
seq__64452_65257 = G__65271;
chunk__64454_65258 = G__65272;
count__64455_65259 = G__65273;
i__64456_65260 = G__65274;
continue;
}
} else {
var temp__5735__auto___65275 = cljs.core.seq(seq__64452_65257);
if(temp__5735__auto___65275){
var seq__64452_65276__$1 = temp__5735__auto___65275;
if(cljs.core.chunked_seq_QMARK_(seq__64452_65276__$1)){
var c__4609__auto___65278 = cljs.core.chunk_first(seq__64452_65276__$1);
var G__65280 = cljs.core.chunk_rest(seq__64452_65276__$1);
var G__65281 = c__4609__auto___65278;
var G__65282 = cljs.core.count(c__4609__auto___65278);
var G__65283 = (0);
seq__64452_65257 = G__65280;
chunk__64454_65258 = G__65281;
count__64455_65259 = G__65282;
i__64456_65260 = G__65283;
continue;
} else {
var child_65284 = cljs.core.first(seq__64452_65276__$1);
if(cljs.core.truth_(child_65284)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65284);


var G__65285 = cljs.core.next(seq__64452_65276__$1);
var G__65286 = null;
var G__65287 = (0);
var G__65288 = (0);
seq__64452_65257 = G__65285;
chunk__64454_65258 = G__65286;
count__64455_65259 = G__65287;
i__64456_65260 = G__65288;
continue;
} else {
var G__65290 = cljs.core.next(seq__64452_65276__$1);
var G__65291 = null;
var G__65292 = (0);
var G__65293 = (0);
seq__64452_65257 = G__65290;
chunk__64454_65258 = G__65291;
count__64455_65259 = G__65292;
i__64456_65260 = G__65293;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65255);
}


var G__65295 = seq__64401_65250;
var G__65296 = chunk__64402_65251;
var G__65297 = count__64403_65252;
var G__65298 = (i__64404_65253 + (1));
seq__64401_65250 = G__65295;
chunk__64402_65251 = G__65296;
count__64403_65252 = G__65297;
i__64404_65253 = G__65298;
continue;
} else {
var temp__5735__auto___65299 = cljs.core.seq(seq__64401_65250);
if(temp__5735__auto___65299){
var seq__64401_65300__$1 = temp__5735__auto___65299;
if(cljs.core.chunked_seq_QMARK_(seq__64401_65300__$1)){
var c__4609__auto___65302 = cljs.core.chunk_first(seq__64401_65300__$1);
var G__65303 = cljs.core.chunk_rest(seq__64401_65300__$1);
var G__65304 = c__4609__auto___65302;
var G__65305 = cljs.core.count(c__4609__auto___65302);
var G__65306 = (0);
seq__64401_65250 = G__65303;
chunk__64402_65251 = G__65304;
count__64403_65252 = G__65305;
i__64404_65253 = G__65306;
continue;
} else {
var child_struct_65308 = cljs.core.first(seq__64401_65300__$1);
var children_65309 = shadow.dom.dom_node(child_struct_65308);
if(cljs.core.seq_QMARK_(children_65309)){
var seq__64475_65310 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_65309));
var chunk__64477_65311 = null;
var count__64478_65312 = (0);
var i__64479_65313 = (0);
while(true){
if((i__64479_65313 < count__64478_65312)){
var child_65316 = chunk__64477_65311.cljs$core$IIndexed$_nth$arity$2(null,i__64479_65313);
if(cljs.core.truth_(child_65316)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65316);


var G__65317 = seq__64475_65310;
var G__65318 = chunk__64477_65311;
var G__65319 = count__64478_65312;
var G__65320 = (i__64479_65313 + (1));
seq__64475_65310 = G__65317;
chunk__64477_65311 = G__65318;
count__64478_65312 = G__65319;
i__64479_65313 = G__65320;
continue;
} else {
var G__65322 = seq__64475_65310;
var G__65323 = chunk__64477_65311;
var G__65324 = count__64478_65312;
var G__65325 = (i__64479_65313 + (1));
seq__64475_65310 = G__65322;
chunk__64477_65311 = G__65323;
count__64478_65312 = G__65324;
i__64479_65313 = G__65325;
continue;
}
} else {
var temp__5735__auto___65326__$1 = cljs.core.seq(seq__64475_65310);
if(temp__5735__auto___65326__$1){
var seq__64475_65327__$1 = temp__5735__auto___65326__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64475_65327__$1)){
var c__4609__auto___65332 = cljs.core.chunk_first(seq__64475_65327__$1);
var G__65333 = cljs.core.chunk_rest(seq__64475_65327__$1);
var G__65334 = c__4609__auto___65332;
var G__65335 = cljs.core.count(c__4609__auto___65332);
var G__65336 = (0);
seq__64475_65310 = G__65333;
chunk__64477_65311 = G__65334;
count__64478_65312 = G__65335;
i__64479_65313 = G__65336;
continue;
} else {
var child_65338 = cljs.core.first(seq__64475_65327__$1);
if(cljs.core.truth_(child_65338)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_65338);


var G__65339 = cljs.core.next(seq__64475_65327__$1);
var G__65340 = null;
var G__65341 = (0);
var G__65342 = (0);
seq__64475_65310 = G__65339;
chunk__64477_65311 = G__65340;
count__64478_65312 = G__65341;
i__64479_65313 = G__65342;
continue;
} else {
var G__65344 = cljs.core.next(seq__64475_65327__$1);
var G__65345 = null;
var G__65346 = (0);
var G__65347 = (0);
seq__64475_65310 = G__65344;
chunk__64477_65311 = G__65345;
count__64478_65312 = G__65346;
i__64479_65313 = G__65347;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_65309);
}


var G__65349 = cljs.core.next(seq__64401_65300__$1);
var G__65350 = null;
var G__65351 = (0);
var G__65352 = (0);
seq__64401_65250 = G__65349;
chunk__64402_65251 = G__65350;
count__64403_65252 = G__65351;
i__64404_65253 = G__65352;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__64503 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__64503);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__64515 = cljs.core.seq(node);
var chunk__64516 = null;
var count__64517 = (0);
var i__64518 = (0);
while(true){
if((i__64518 < count__64517)){
var n = chunk__64516.cljs$core$IIndexed$_nth$arity$2(null,i__64518);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65367 = seq__64515;
var G__65368 = chunk__64516;
var G__65369 = count__64517;
var G__65370 = (i__64518 + (1));
seq__64515 = G__65367;
chunk__64516 = G__65368;
count__64517 = G__65369;
i__64518 = G__65370;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64515);
if(temp__5735__auto__){
var seq__64515__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64515__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__64515__$1);
var G__65372 = cljs.core.chunk_rest(seq__64515__$1);
var G__65373 = c__4609__auto__;
var G__65374 = cljs.core.count(c__4609__auto__);
var G__65375 = (0);
seq__64515 = G__65372;
chunk__64516 = G__65373;
count__64517 = G__65374;
i__64518 = G__65375;
continue;
} else {
var n = cljs.core.first(seq__64515__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__65377 = cljs.core.next(seq__64515__$1);
var G__65378 = null;
var G__65379 = (0);
var G__65380 = (0);
seq__64515 = G__65377;
chunk__64516 = G__65378;
count__64517 = G__65379;
i__64518 = G__65380;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__64535 = shadow.dom.dom_node(new$);
var G__64536 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__64535,G__64536);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__64547 = arguments.length;
switch (G__64547) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__64555 = arguments.length;
switch (G__64555) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__64577 = arguments.length;
switch (G__64577) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___65407 = arguments.length;
var i__4790__auto___65408 = (0);
while(true){
if((i__4790__auto___65408 < len__4789__auto___65407)){
args__4795__auto__.push((arguments[i__4790__auto___65408]));

var G__65410 = (i__4790__auto___65408 + (1));
i__4790__auto___65408 = G__65410;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__64607_65415 = cljs.core.seq(nodes);
var chunk__64608_65416 = null;
var count__64609_65417 = (0);
var i__64610_65418 = (0);
while(true){
if((i__64610_65418 < count__64609_65417)){
var node_65419 = chunk__64608_65416.cljs$core$IIndexed$_nth$arity$2(null,i__64610_65418);
fragment.appendChild(shadow.dom._to_dom(node_65419));


var G__65420 = seq__64607_65415;
var G__65421 = chunk__64608_65416;
var G__65422 = count__64609_65417;
var G__65423 = (i__64610_65418 + (1));
seq__64607_65415 = G__65420;
chunk__64608_65416 = G__65421;
count__64609_65417 = G__65422;
i__64610_65418 = G__65423;
continue;
} else {
var temp__5735__auto___65426 = cljs.core.seq(seq__64607_65415);
if(temp__5735__auto___65426){
var seq__64607_65427__$1 = temp__5735__auto___65426;
if(cljs.core.chunked_seq_QMARK_(seq__64607_65427__$1)){
var c__4609__auto___65428 = cljs.core.chunk_first(seq__64607_65427__$1);
var G__65429 = cljs.core.chunk_rest(seq__64607_65427__$1);
var G__65430 = c__4609__auto___65428;
var G__65431 = cljs.core.count(c__4609__auto___65428);
var G__65432 = (0);
seq__64607_65415 = G__65429;
chunk__64608_65416 = G__65430;
count__64609_65417 = G__65431;
i__64610_65418 = G__65432;
continue;
} else {
var node_65433 = cljs.core.first(seq__64607_65427__$1);
fragment.appendChild(shadow.dom._to_dom(node_65433));


var G__65434 = cljs.core.next(seq__64607_65427__$1);
var G__65435 = null;
var G__65436 = (0);
var G__65437 = (0);
seq__64607_65415 = G__65434;
chunk__64608_65416 = G__65435;
count__64609_65417 = G__65436;
i__64610_65418 = G__65437;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq64600){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64600));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__64630_65442 = cljs.core.seq(scripts);
var chunk__64631_65445 = null;
var count__64632_65446 = (0);
var i__64633_65450 = (0);
while(true){
if((i__64633_65450 < count__64632_65446)){
var vec__64650_65454 = chunk__64631_65445.cljs$core$IIndexed$_nth$arity$2(null,i__64633_65450);
var script_tag_65455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64650_65454,(0),null);
var script_body_65456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64650_65454,(1),null);
eval(script_body_65456);


var G__65459 = seq__64630_65442;
var G__65460 = chunk__64631_65445;
var G__65461 = count__64632_65446;
var G__65462 = (i__64633_65450 + (1));
seq__64630_65442 = G__65459;
chunk__64631_65445 = G__65460;
count__64632_65446 = G__65461;
i__64633_65450 = G__65462;
continue;
} else {
var temp__5735__auto___65464 = cljs.core.seq(seq__64630_65442);
if(temp__5735__auto___65464){
var seq__64630_65465__$1 = temp__5735__auto___65464;
if(cljs.core.chunked_seq_QMARK_(seq__64630_65465__$1)){
var c__4609__auto___65466 = cljs.core.chunk_first(seq__64630_65465__$1);
var G__65467 = cljs.core.chunk_rest(seq__64630_65465__$1);
var G__65468 = c__4609__auto___65466;
var G__65469 = cljs.core.count(c__4609__auto___65466);
var G__65470 = (0);
seq__64630_65442 = G__65467;
chunk__64631_65445 = G__65468;
count__64632_65446 = G__65469;
i__64633_65450 = G__65470;
continue;
} else {
var vec__64656_65473 = cljs.core.first(seq__64630_65465__$1);
var script_tag_65474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64656_65473,(0),null);
var script_body_65475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64656_65473,(1),null);
eval(script_body_65475);


var G__65476 = cljs.core.next(seq__64630_65465__$1);
var G__65477 = null;
var G__65478 = (0);
var G__65479 = (0);
seq__64630_65442 = G__65476;
chunk__64631_65445 = G__65477;
count__64632_65446 = G__65478;
i__64633_65450 = G__65479;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__64660){
var vec__64661 = p__64660;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64661,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64661,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__64670 = shadow.dom.dom_node(el);
var G__64671 = cls;
return goog.dom.getAncestorByClass(G__64670,G__64671);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__64676 = arguments.length;
switch (G__64676) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__64678 = shadow.dom.dom_node(el);
var G__64682 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__64678,G__64682);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__64689 = shadow.dom.dom_node(el);
var G__64690 = cljs.core.name(tag);
var G__64691 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__64689,G__64690,G__64691);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__64699 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__64699);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__64701 = shadow.dom.dom_node(dom);
var G__64702 = value;
return goog.dom.forms.setValue(G__64701,G__64702);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__64709 = cljs.core.seq(style_keys);
var chunk__64710 = null;
var count__64711 = (0);
var i__64712 = (0);
while(true){
if((i__64712 < count__64711)){
var it = chunk__64710.cljs$core$IIndexed$_nth$arity$2(null,i__64712);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65510 = seq__64709;
var G__65511 = chunk__64710;
var G__65512 = count__64711;
var G__65513 = (i__64712 + (1));
seq__64709 = G__65510;
chunk__64710 = G__65511;
count__64711 = G__65512;
i__64712 = G__65513;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64709);
if(temp__5735__auto__){
var seq__64709__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64709__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__64709__$1);
var G__65520 = cljs.core.chunk_rest(seq__64709__$1);
var G__65521 = c__4609__auto__;
var G__65522 = cljs.core.count(c__4609__auto__);
var G__65523 = (0);
seq__64709 = G__65520;
chunk__64710 = G__65521;
count__64711 = G__65522;
i__64712 = G__65523;
continue;
} else {
var it = cljs.core.first(seq__64709__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__65527 = cljs.core.next(seq__64709__$1);
var G__65528 = null;
var G__65529 = (0);
var G__65530 = (0);
seq__64709 = G__65527;
chunk__64710 = G__65528;
count__64711 = G__65529;
i__64712 = G__65530;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k64715,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__64719 = k64715;
var G__64719__$1 = (((G__64719 instanceof cljs.core.Keyword))?G__64719.fqn:null);
switch (G__64719__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64715,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__64720){
var vec__64721 = p__64720;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64721,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64721,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64714){
var self__ = this;
var G__64714__$1 = this;
return (new cljs.core.RecordIter((0),G__64714__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__64725 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__64725(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64716,other64717){
var self__ = this;
var this64716__$1 = this;
return (((!((other64717 == null)))) && ((this64716__$1.constructor === other64717.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64716__$1.x,other64717.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64716__$1.y,other64717.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64716__$1.__extmap,other64717.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__64714){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__64731 = cljs.core.keyword_identical_QMARK_;
var expr__64732 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__64734 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__64735 = expr__64732;
return (pred__64731.cljs$core$IFn$_invoke$arity$2 ? pred__64731.cljs$core$IFn$_invoke$arity$2(G__64734,G__64735) : pred__64731.call(null,G__64734,G__64735));
})())){
return (new shadow.dom.Coordinate(G__64714,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__64736 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__64737 = expr__64732;
return (pred__64731.cljs$core$IFn$_invoke$arity$2 ? pred__64731.cljs$core$IFn$_invoke$arity$2(G__64736,G__64737) : pred__64731.call(null,G__64736,G__64737));
})())){
return (new shadow.dom.Coordinate(self__.x,G__64714,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__64714),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__64714){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__64714,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__64718){
var extmap__4478__auto__ = (function (){var G__64738 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64718,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__64718)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64738);
} else {
return G__64738;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__64718),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__64718),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__64739 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__64739);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__64740 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__64740);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__64741 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__64741);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k64743,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__64747 = k64743;
var G__64747__$1 = (((G__64747 instanceof cljs.core.Keyword))?G__64747.fqn:null);
switch (G__64747__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64743,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__64750){
var vec__64752 = p__64750;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64752,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64752,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64742){
var self__ = this;
var G__64742__$1 = this;
return (new cljs.core.RecordIter((0),G__64742__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__64764 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__64764(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64744,other64745){
var self__ = this;
var this64744__$1 = this;
return (((!((other64745 == null)))) && ((this64744__$1.constructor === other64745.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64744__$1.w,other64745.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64744__$1.h,other64745.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64744__$1.__extmap,other64745.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__64742){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__64769 = cljs.core.keyword_identical_QMARK_;
var expr__64770 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__64774 = new cljs.core.Keyword(null,"w","w",354169001);
var G__64775 = expr__64770;
return (pred__64769.cljs$core$IFn$_invoke$arity$2 ? pred__64769.cljs$core$IFn$_invoke$arity$2(G__64774,G__64775) : pred__64769.call(null,G__64774,G__64775));
})())){
return (new shadow.dom.Size(G__64742,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__64777 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__64778 = expr__64770;
return (pred__64769.cljs$core$IFn$_invoke$arity$2 ? pred__64769.cljs$core$IFn$_invoke$arity$2(G__64777,G__64778) : pred__64769.call(null,G__64777,G__64778));
})())){
return (new shadow.dom.Size(self__.w,G__64742,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__64742),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__64742){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__64742,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__64746){
var extmap__4478__auto__ = (function (){var G__64784 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64746,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__64746)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64784);
} else {
return G__64784;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__64746),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__64746),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__64789 = shadow.dom.dom_node(el);
return goog.style.getSize(G__64789);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__65628 = (i + (1));
var G__65629 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__65628;
ret = G__65629;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64819){
var vec__64820 = p__64819;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64820,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__64831 = arguments.length;
switch (G__64831) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__64846_65637 = new_node;
var G__64847_65638 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__64846_65637,G__64847_65638);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__64848_65641 = new_node;
var G__64849_65642 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__64848_65641,G__64849_65642);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__65649 = ps;
var G__65650 = (i + (1));
el__$1 = G__65649;
i = G__65650;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__64861 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__64861);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__64866 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__64866);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__64873 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__64873);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__64878 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64878,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64878,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64878,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__64886_65672 = cljs.core.seq(props);
var chunk__64887_65673 = null;
var count__64888_65674 = (0);
var i__64889_65675 = (0);
while(true){
if((i__64889_65675 < count__64888_65674)){
var vec__64916_65679 = chunk__64887_65673.cljs$core$IIndexed$_nth$arity$2(null,i__64889_65675);
var k_65680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64916_65679,(0),null);
var v_65681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64916_65679,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_65680);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65680),v_65681);


var G__65685 = seq__64886_65672;
var G__65686 = chunk__64887_65673;
var G__65687 = count__64888_65674;
var G__65688 = (i__64889_65675 + (1));
seq__64886_65672 = G__65685;
chunk__64887_65673 = G__65686;
count__64888_65674 = G__65687;
i__64889_65675 = G__65688;
continue;
} else {
var temp__5735__auto___65689 = cljs.core.seq(seq__64886_65672);
if(temp__5735__auto___65689){
var seq__64886_65690__$1 = temp__5735__auto___65689;
if(cljs.core.chunked_seq_QMARK_(seq__64886_65690__$1)){
var c__4609__auto___65691 = cljs.core.chunk_first(seq__64886_65690__$1);
var G__65692 = cljs.core.chunk_rest(seq__64886_65690__$1);
var G__65693 = c__4609__auto___65691;
var G__65694 = cljs.core.count(c__4609__auto___65691);
var G__65695 = (0);
seq__64886_65672 = G__65692;
chunk__64887_65673 = G__65693;
count__64888_65674 = G__65694;
i__64889_65675 = G__65695;
continue;
} else {
var vec__64929_65696 = cljs.core.first(seq__64886_65690__$1);
var k_65697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64929_65696,(0),null);
var v_65698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64929_65696,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_65697);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65697),v_65698);


var G__65707 = cljs.core.next(seq__64886_65690__$1);
var G__65708 = null;
var G__65709 = (0);
var G__65710 = (0);
seq__64886_65672 = G__65707;
chunk__64887_65673 = G__65708;
count__64888_65674 = G__65709;
i__64889_65675 = G__65710;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__64938 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64938,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64938,(1),null);
var seq__64941_65718 = cljs.core.seq(node_children);
var chunk__64943_65719 = null;
var count__64944_65720 = (0);
var i__64945_65721 = (0);
while(true){
if((i__64945_65721 < count__64944_65720)){
var child_struct_65722 = chunk__64943_65719.cljs$core$IIndexed$_nth$arity$2(null,i__64945_65721);
if((!((child_struct_65722 == null)))){
if(typeof child_struct_65722 === 'string'){
var text_65726 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65726),child_struct_65722].join(''));
} else {
var children_65730 = shadow.dom.svg_node(child_struct_65722);
if(cljs.core.seq_QMARK_(children_65730)){
var seq__64984_65731 = cljs.core.seq(children_65730);
var chunk__64986_65732 = null;
var count__64987_65733 = (0);
var i__64988_65734 = (0);
while(true){
if((i__64988_65734 < count__64987_65733)){
var child_65738 = chunk__64986_65732.cljs$core$IIndexed$_nth$arity$2(null,i__64988_65734);
if(cljs.core.truth_(child_65738)){
node.appendChild(child_65738);


var G__65742 = seq__64984_65731;
var G__65743 = chunk__64986_65732;
var G__65744 = count__64987_65733;
var G__65745 = (i__64988_65734 + (1));
seq__64984_65731 = G__65742;
chunk__64986_65732 = G__65743;
count__64987_65733 = G__65744;
i__64988_65734 = G__65745;
continue;
} else {
var G__65746 = seq__64984_65731;
var G__65747 = chunk__64986_65732;
var G__65748 = count__64987_65733;
var G__65749 = (i__64988_65734 + (1));
seq__64984_65731 = G__65746;
chunk__64986_65732 = G__65747;
count__64987_65733 = G__65748;
i__64988_65734 = G__65749;
continue;
}
} else {
var temp__5735__auto___65750 = cljs.core.seq(seq__64984_65731);
if(temp__5735__auto___65750){
var seq__64984_65751__$1 = temp__5735__auto___65750;
if(cljs.core.chunked_seq_QMARK_(seq__64984_65751__$1)){
var c__4609__auto___65752 = cljs.core.chunk_first(seq__64984_65751__$1);
var G__65753 = cljs.core.chunk_rest(seq__64984_65751__$1);
var G__65754 = c__4609__auto___65752;
var G__65755 = cljs.core.count(c__4609__auto___65752);
var G__65756 = (0);
seq__64984_65731 = G__65753;
chunk__64986_65732 = G__65754;
count__64987_65733 = G__65755;
i__64988_65734 = G__65756;
continue;
} else {
var child_65757 = cljs.core.first(seq__64984_65751__$1);
if(cljs.core.truth_(child_65757)){
node.appendChild(child_65757);


var G__65758 = cljs.core.next(seq__64984_65751__$1);
var G__65759 = null;
var G__65760 = (0);
var G__65761 = (0);
seq__64984_65731 = G__65758;
chunk__64986_65732 = G__65759;
count__64987_65733 = G__65760;
i__64988_65734 = G__65761;
continue;
} else {
var G__65762 = cljs.core.next(seq__64984_65751__$1);
var G__65763 = null;
var G__65764 = (0);
var G__65765 = (0);
seq__64984_65731 = G__65762;
chunk__64986_65732 = G__65763;
count__64987_65733 = G__65764;
i__64988_65734 = G__65765;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65730);
}
}


var G__65766 = seq__64941_65718;
var G__65767 = chunk__64943_65719;
var G__65768 = count__64944_65720;
var G__65769 = (i__64945_65721 + (1));
seq__64941_65718 = G__65766;
chunk__64943_65719 = G__65767;
count__64944_65720 = G__65768;
i__64945_65721 = G__65769;
continue;
} else {
var G__65770 = seq__64941_65718;
var G__65771 = chunk__64943_65719;
var G__65772 = count__64944_65720;
var G__65773 = (i__64945_65721 + (1));
seq__64941_65718 = G__65770;
chunk__64943_65719 = G__65771;
count__64944_65720 = G__65772;
i__64945_65721 = G__65773;
continue;
}
} else {
var temp__5735__auto___65774 = cljs.core.seq(seq__64941_65718);
if(temp__5735__auto___65774){
var seq__64941_65775__$1 = temp__5735__auto___65774;
if(cljs.core.chunked_seq_QMARK_(seq__64941_65775__$1)){
var c__4609__auto___65776 = cljs.core.chunk_first(seq__64941_65775__$1);
var G__65777 = cljs.core.chunk_rest(seq__64941_65775__$1);
var G__65778 = c__4609__auto___65776;
var G__65779 = cljs.core.count(c__4609__auto___65776);
var G__65780 = (0);
seq__64941_65718 = G__65777;
chunk__64943_65719 = G__65778;
count__64944_65720 = G__65779;
i__64945_65721 = G__65780;
continue;
} else {
var child_struct_65781 = cljs.core.first(seq__64941_65775__$1);
if((!((child_struct_65781 == null)))){
if(typeof child_struct_65781 === 'string'){
var text_65782 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65782),child_struct_65781].join(''));
} else {
var children_65783 = shadow.dom.svg_node(child_struct_65781);
if(cljs.core.seq_QMARK_(children_65783)){
var seq__64995_65784 = cljs.core.seq(children_65783);
var chunk__64997_65785 = null;
var count__64998_65786 = (0);
var i__64999_65787 = (0);
while(true){
if((i__64999_65787 < count__64998_65786)){
var child_65788 = chunk__64997_65785.cljs$core$IIndexed$_nth$arity$2(null,i__64999_65787);
if(cljs.core.truth_(child_65788)){
node.appendChild(child_65788);


var G__65789 = seq__64995_65784;
var G__65790 = chunk__64997_65785;
var G__65791 = count__64998_65786;
var G__65792 = (i__64999_65787 + (1));
seq__64995_65784 = G__65789;
chunk__64997_65785 = G__65790;
count__64998_65786 = G__65791;
i__64999_65787 = G__65792;
continue;
} else {
var G__65793 = seq__64995_65784;
var G__65794 = chunk__64997_65785;
var G__65795 = count__64998_65786;
var G__65796 = (i__64999_65787 + (1));
seq__64995_65784 = G__65793;
chunk__64997_65785 = G__65794;
count__64998_65786 = G__65795;
i__64999_65787 = G__65796;
continue;
}
} else {
var temp__5735__auto___65797__$1 = cljs.core.seq(seq__64995_65784);
if(temp__5735__auto___65797__$1){
var seq__64995_65798__$1 = temp__5735__auto___65797__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64995_65798__$1)){
var c__4609__auto___65799 = cljs.core.chunk_first(seq__64995_65798__$1);
var G__65800 = cljs.core.chunk_rest(seq__64995_65798__$1);
var G__65801 = c__4609__auto___65799;
var G__65802 = cljs.core.count(c__4609__auto___65799);
var G__65803 = (0);
seq__64995_65784 = G__65800;
chunk__64997_65785 = G__65801;
count__64998_65786 = G__65802;
i__64999_65787 = G__65803;
continue;
} else {
var child_65804 = cljs.core.first(seq__64995_65798__$1);
if(cljs.core.truth_(child_65804)){
node.appendChild(child_65804);


var G__65805 = cljs.core.next(seq__64995_65798__$1);
var G__65806 = null;
var G__65807 = (0);
var G__65808 = (0);
seq__64995_65784 = G__65805;
chunk__64997_65785 = G__65806;
count__64998_65786 = G__65807;
i__64999_65787 = G__65808;
continue;
} else {
var G__65809 = cljs.core.next(seq__64995_65798__$1);
var G__65810 = null;
var G__65811 = (0);
var G__65812 = (0);
seq__64995_65784 = G__65809;
chunk__64997_65785 = G__65810;
count__64998_65786 = G__65811;
i__64999_65787 = G__65812;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65783);
}
}


var G__65817 = cljs.core.next(seq__64941_65775__$1);
var G__65818 = null;
var G__65819 = (0);
var G__65820 = (0);
seq__64941_65718 = G__65817;
chunk__64943_65719 = G__65818;
count__64944_65720 = G__65819;
i__64945_65721 = G__65820;
continue;
} else {
var G__65822 = cljs.core.next(seq__64941_65775__$1);
var G__65823 = null;
var G__65824 = (0);
var G__65825 = (0);
seq__64941_65718 = G__65822;
chunk__64943_65719 = G__65823;
count__64944_65720 = G__65824;
i__64945_65721 = G__65825;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__65008_65827 = shadow.dom._to_svg;
var G__65009_65828 = "string";
var G__65010_65829 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__65008_65827,G__65009_65828,G__65010_65829);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__65021_65838 = shadow.dom._to_svg;
var G__65022_65839 = "null";
var G__65023_65840 = (function (_){
return null;
});
goog.object.set(G__65021_65838,G__65022_65839,G__65023_65840);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___65841 = arguments.length;
var i__4790__auto___65842 = (0);
while(true){
if((i__4790__auto___65842 < len__4789__auto___65841)){
args__4795__auto__.push((arguments[i__4790__auto___65842]));

var G__65844 = (i__4790__auto___65842 + (1));
i__4790__auto___65842 = G__65844;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq65028){
var G__65029 = cljs.core.first(seq65028);
var seq65028__$1 = cljs.core.next(seq65028);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65029,seq65028__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__65037 = arguments.length;
switch (G__65037) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__65040_65870 = shadow.dom.dom_node(el);
var G__65041_65871 = cljs.core.name(event);
var G__65042_65872 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__65040_65870,G__65041_65871,G__65042_65872) : shadow.dom.dom_listen.call(null,G__65040_65870,G__65041_65871,G__65042_65872));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__61745__auto___65877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61746__auto__ = (function (){var switch__61261__auto__ = (function (state_65047){
var state_val_65048 = (state_65047[(1)]);
if((state_val_65048 === (1))){
var state_65047__$1 = state_65047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65047__$1,(2),once_or_cleanup);
} else {
if((state_val_65048 === (2))){
var inst_65044 = (state_65047[(2)]);
var inst_65045 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_65047__$1 = (function (){var statearr_65052 = state_65047;
(statearr_65052[(7)] = inst_65044);

return statearr_65052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65047__$1,inst_65045);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__61262__auto__ = null;
var shadow$dom$state_machine__61262__auto____0 = (function (){
var statearr_65057 = [null,null,null,null,null,null,null,null];
(statearr_65057[(0)] = shadow$dom$state_machine__61262__auto__);

(statearr_65057[(1)] = (1));

return statearr_65057;
});
var shadow$dom$state_machine__61262__auto____1 = (function (state_65047){
while(true){
var ret_value__61263__auto__ = (function (){try{while(true){
var result__61264__auto__ = switch__61261__auto__(state_65047);
if(cljs.core.keyword_identical_QMARK_(result__61264__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__61264__auto__;
}
break;
}
}catch (e65059){if((e65059 instanceof Object)){
var ex__61265__auto__ = e65059;
var statearr_65061_65879 = state_65047;
(statearr_65061_65879[(5)] = ex__61265__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__61263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65882 = state_65047;
state_65047 = G__65882;
continue;
} else {
return ret_value__61263__auto__;
}
break;
}
});
shadow$dom$state_machine__61262__auto__ = function(state_65047){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__61262__auto____0.call(this);
case 1:
return shadow$dom$state_machine__61262__auto____1.call(this,state_65047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__61262__auto____0;
shadow$dom$state_machine__61262__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__61262__auto____1;
return shadow$dom$state_machine__61262__auto__;
})()
})();
var state__61747__auto__ = (function (){var statearr_65063 = (f__61746__auto__.cljs$core$IFn$_invoke$arity$0 ? f__61746__auto__.cljs$core$IFn$_invoke$arity$0() : f__61746__auto__.call(null));
(statearr_65063[(6)] = c__61745__auto___65877);

return statearr_65063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61747__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
