goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___67765 = arguments.length;
var i__4790__auto___67766 = (0);
while(true){
if((i__4790__auto___67766 < len__4789__auto___67765)){
args__4795__auto__.push((arguments[i__4790__auto___67766]));

var G__67767 = (i__4790__auto___67766 + (1));
i__4790__auto___67766 = G__67767;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq67400){
var G__67401 = cljs.core.first(seq67400);
var seq67400__$1 = cljs.core.next(seq67400);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67401,seq67400__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__67418){
var map__67422 = p__67418;
var map__67422__$1 = (((((!((map__67422 == null))))?(((((map__67422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67422):map__67422);
var src = map__67422__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67422__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67422__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__67434 = cljs.core.seq(sources);
var chunk__67435 = null;
var count__67436 = (0);
var i__67437 = (0);
while(true){
if((i__67437 < count__67436)){
var map__67476 = chunk__67435.cljs$core$IIndexed$_nth$arity$2(null,i__67437);
var map__67476__$1 = (((((!((map__67476 == null))))?(((((map__67476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67476):map__67476);
var src = map__67476__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67476__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67476__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67476__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67476__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__67768 = seq__67434;
var G__67769 = chunk__67435;
var G__67770 = count__67436;
var G__67771 = (i__67437 + (1));
seq__67434 = G__67768;
chunk__67435 = G__67769;
count__67436 = G__67770;
i__67437 = G__67771;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67434);
if(temp__5735__auto__){
var seq__67434__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67434__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67434__$1);
var G__67772 = cljs.core.chunk_rest(seq__67434__$1);
var G__67773 = c__4609__auto__;
var G__67774 = cljs.core.count(c__4609__auto__);
var G__67775 = (0);
seq__67434 = G__67772;
chunk__67435 = G__67773;
count__67436 = G__67774;
i__67437 = G__67775;
continue;
} else {
var map__67484 = cljs.core.first(seq__67434__$1);
var map__67484__$1 = (((((!((map__67484 == null))))?(((((map__67484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67484):map__67484);
var src = map__67484__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67484__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67484__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67484__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67484__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__67776 = cljs.core.next(seq__67434__$1);
var G__67777 = null;
var G__67778 = (0);
var G__67779 = (0);
seq__67434 = G__67776;
chunk__67435 = G__67777;
count__67436 = G__67778;
i__67437 = G__67779;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__67490 = cljs.core.seq(js_requires);
var chunk__67491 = null;
var count__67492 = (0);
var i__67493 = (0);
while(true){
if((i__67493 < count__67492)){
var js_ns = chunk__67491.cljs$core$IIndexed$_nth$arity$2(null,i__67493);
var require_str_67780 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_67780);


var G__67781 = seq__67490;
var G__67782 = chunk__67491;
var G__67783 = count__67492;
var G__67784 = (i__67493 + (1));
seq__67490 = G__67781;
chunk__67491 = G__67782;
count__67492 = G__67783;
i__67493 = G__67784;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67490);
if(temp__5735__auto__){
var seq__67490__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67490__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67490__$1);
var G__67785 = cljs.core.chunk_rest(seq__67490__$1);
var G__67786 = c__4609__auto__;
var G__67787 = cljs.core.count(c__4609__auto__);
var G__67788 = (0);
seq__67490 = G__67785;
chunk__67491 = G__67786;
count__67492 = G__67787;
i__67493 = G__67788;
continue;
} else {
var js_ns = cljs.core.first(seq__67490__$1);
var require_str_67789 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_67789);


var G__67790 = cljs.core.next(seq__67490__$1);
var G__67791 = null;
var G__67792 = (0);
var G__67793 = (0);
seq__67490 = G__67790;
chunk__67491 = G__67791;
count__67492 = G__67792;
i__67493 = G__67793;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__67498 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__67498) : callback.call(null,G__67498));
} else {
var G__67499 = shadow.cljs.devtools.client.env.files_url();
var G__67500 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__67501 = "POST";
var G__67502 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__67503 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__67499,G__67500,G__67501,G__67502,G__67503);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__67505){
var map__67506 = p__67505;
var map__67506__$1 = (((((!((map__67506 == null))))?(((((map__67506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67506):map__67506);
var msg = map__67506__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67506__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67506__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__67509 = info;
var map__67509__$1 = (((((!((map__67509 == null))))?(((((map__67509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67509):map__67509);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67509__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67509__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67516(s__67517){
return (new cljs.core.LazySeq(null,(function (){
var s__67517__$1 = s__67517;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67517__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__67523 = cljs.core.first(xs__6292__auto__);
var map__67523__$1 = (((((!((map__67523 == null))))?(((((map__67523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67523):map__67523);
var src = map__67523__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67523__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67523__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__67517__$1,map__67523,map__67523__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67509,map__67509__$1,sources,compiled,map__67506,map__67506__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67516_$_iter__67518(s__67519){
return (new cljs.core.LazySeq(null,((function (s__67517__$1,map__67523,map__67523__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67509,map__67509__$1,sources,compiled,map__67506,map__67506__$1,msg,info,reload_info){
return (function (){
var s__67519__$1 = s__67519;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__67519__$1);
if(temp__5735__auto____$1){
var s__67519__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__67519__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__67519__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__67521 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__67520 = (0);
while(true){
if((i__67520 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__67520);
cljs.core.chunk_append(b__67521,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__67794 = (i__67520 + (1));
i__67520 = G__67794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67521),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67516_$_iter__67518(cljs.core.chunk_rest(s__67519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67521),null);
}
} else {
var warning = cljs.core.first(s__67519__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67516_$_iter__67518(cljs.core.rest(s__67519__$2)));
}
} else {
return null;
}
break;
}
});})(s__67517__$1,map__67523,map__67523__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67509,map__67509__$1,sources,compiled,map__67506,map__67506__$1,msg,info,reload_info))
,null,null));
});})(s__67517__$1,map__67523,map__67523__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__67509,map__67509__$1,sources,compiled,map__67506,map__67506__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67516(cljs.core.rest(s__67517__$1)));
} else {
var G__67795 = cljs.core.rest(s__67517__$1);
s__67517__$1 = G__67795;
continue;
}
} else {
var G__67796 = cljs.core.rest(s__67517__$1);
s__67517__$1 = G__67796;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__67558_67797 = cljs.core.seq(warnings);
var chunk__67559_67798 = null;
var count__67560_67799 = (0);
var i__67561_67800 = (0);
while(true){
if((i__67561_67800 < count__67560_67799)){
var map__67581_67801 = chunk__67559_67798.cljs$core$IIndexed$_nth$arity$2(null,i__67561_67800);
var map__67581_67802__$1 = (((((!((map__67581_67801 == null))))?(((((map__67581_67801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67581_67801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67581_67801):map__67581_67801);
var w_67803 = map__67581_67802__$1;
var msg_67804__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67581_67802__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_67805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67581_67802__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_67806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67581_67802__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_67807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67581_67802__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_67807)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_67805),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_67806),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_67804__$1)].join(''));


var G__67808 = seq__67558_67797;
var G__67809 = chunk__67559_67798;
var G__67810 = count__67560_67799;
var G__67811 = (i__67561_67800 + (1));
seq__67558_67797 = G__67808;
chunk__67559_67798 = G__67809;
count__67560_67799 = G__67810;
i__67561_67800 = G__67811;
continue;
} else {
var temp__5735__auto___67812 = cljs.core.seq(seq__67558_67797);
if(temp__5735__auto___67812){
var seq__67558_67813__$1 = temp__5735__auto___67812;
if(cljs.core.chunked_seq_QMARK_(seq__67558_67813__$1)){
var c__4609__auto___67814 = cljs.core.chunk_first(seq__67558_67813__$1);
var G__67815 = cljs.core.chunk_rest(seq__67558_67813__$1);
var G__67816 = c__4609__auto___67814;
var G__67817 = cljs.core.count(c__4609__auto___67814);
var G__67818 = (0);
seq__67558_67797 = G__67815;
chunk__67559_67798 = G__67816;
count__67560_67799 = G__67817;
i__67561_67800 = G__67818;
continue;
} else {
var map__67591_67819 = cljs.core.first(seq__67558_67813__$1);
var map__67591_67820__$1 = (((((!((map__67591_67819 == null))))?(((((map__67591_67819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67591_67819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67591_67819):map__67591_67819);
var w_67821 = map__67591_67820__$1;
var msg_67822__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67591_67820__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_67823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67591_67820__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_67824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67591_67820__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_67825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67591_67820__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_67825)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_67823),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_67824),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_67822__$1)].join(''));


var G__67826 = cljs.core.next(seq__67558_67813__$1);
var G__67827 = null;
var G__67828 = (0);
var G__67829 = (0);
seq__67558_67797 = G__67826;
chunk__67559_67798 = G__67827;
count__67560_67799 = G__67828;
i__67561_67800 = G__67829;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__67605){
var map__67606 = p__67605;
var map__67606__$1 = (((((!((map__67606 == null))))?(((((map__67606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67606):map__67606);
var src = map__67606__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67606__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67606__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__67614){
var map__67615 = p__67614;
var map__67615__$1 = (((((!((map__67615 == null))))?(((((map__67615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67615):map__67615);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67615__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__67620){
var map__67621 = p__67620;
var map__67621__$1 = (((((!((map__67621 == null))))?(((((map__67621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67621):map__67621);
var rc = map__67621__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67621__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__67504_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__67504_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__67637){
var map__67640 = p__67637;
var map__67640__$1 = (((((!((map__67640 == null))))?(((((map__67640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67640):map__67640);
var msg = map__67640__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67640__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__67643 = cljs.core.seq(updates);
var chunk__67645 = null;
var count__67646 = (0);
var i__67647 = (0);
while(true){
if((i__67647 < count__67646)){
var path = chunk__67645.cljs$core$IIndexed$_nth$arity$2(null,i__67647);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67688_67830 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67691_67831 = null;
var count__67692_67832 = (0);
var i__67693_67833 = (0);
while(true){
if((i__67693_67833 < count__67692_67832)){
var node_67834 = chunk__67691_67831.cljs$core$IIndexed$_nth$arity$2(null,i__67693_67833);
var path_match_67835 = shadow.cljs.devtools.client.browser.match_paths(node_67834.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67835)){
var new_link_67836 = (function (){var G__67708 = node_67834.cloneNode(true);
G__67708.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67835),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67708;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67835], 0));

goog.dom.insertSiblingAfter(new_link_67836,node_67834);

goog.dom.removeNode(node_67834);


var G__67837 = seq__67688_67830;
var G__67838 = chunk__67691_67831;
var G__67839 = count__67692_67832;
var G__67840 = (i__67693_67833 + (1));
seq__67688_67830 = G__67837;
chunk__67691_67831 = G__67838;
count__67692_67832 = G__67839;
i__67693_67833 = G__67840;
continue;
} else {
var G__67841 = seq__67688_67830;
var G__67842 = chunk__67691_67831;
var G__67843 = count__67692_67832;
var G__67844 = (i__67693_67833 + (1));
seq__67688_67830 = G__67841;
chunk__67691_67831 = G__67842;
count__67692_67832 = G__67843;
i__67693_67833 = G__67844;
continue;
}
} else {
var temp__5735__auto___67845 = cljs.core.seq(seq__67688_67830);
if(temp__5735__auto___67845){
var seq__67688_67846__$1 = temp__5735__auto___67845;
if(cljs.core.chunked_seq_QMARK_(seq__67688_67846__$1)){
var c__4609__auto___67847 = cljs.core.chunk_first(seq__67688_67846__$1);
var G__67848 = cljs.core.chunk_rest(seq__67688_67846__$1);
var G__67849 = c__4609__auto___67847;
var G__67850 = cljs.core.count(c__4609__auto___67847);
var G__67851 = (0);
seq__67688_67830 = G__67848;
chunk__67691_67831 = G__67849;
count__67692_67832 = G__67850;
i__67693_67833 = G__67851;
continue;
} else {
var node_67852 = cljs.core.first(seq__67688_67846__$1);
var path_match_67853 = shadow.cljs.devtools.client.browser.match_paths(node_67852.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67853)){
var new_link_67854 = (function (){var G__67716 = node_67852.cloneNode(true);
G__67716.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67853),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67716;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67853], 0));

goog.dom.insertSiblingAfter(new_link_67854,node_67852);

goog.dom.removeNode(node_67852);


var G__67855 = cljs.core.next(seq__67688_67846__$1);
var G__67856 = null;
var G__67857 = (0);
var G__67858 = (0);
seq__67688_67830 = G__67855;
chunk__67691_67831 = G__67856;
count__67692_67832 = G__67857;
i__67693_67833 = G__67858;
continue;
} else {
var G__67859 = cljs.core.next(seq__67688_67846__$1);
var G__67860 = null;
var G__67861 = (0);
var G__67862 = (0);
seq__67688_67830 = G__67859;
chunk__67691_67831 = G__67860;
count__67692_67832 = G__67861;
i__67693_67833 = G__67862;
continue;
}
}
} else {
}
}
break;
}


var G__67863 = seq__67643;
var G__67864 = chunk__67645;
var G__67865 = count__67646;
var G__67866 = (i__67647 + (1));
seq__67643 = G__67863;
chunk__67645 = G__67864;
count__67646 = G__67865;
i__67647 = G__67866;
continue;
} else {
var G__67867 = seq__67643;
var G__67868 = chunk__67645;
var G__67869 = count__67646;
var G__67870 = (i__67647 + (1));
seq__67643 = G__67867;
chunk__67645 = G__67868;
count__67646 = G__67869;
i__67647 = G__67870;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__67643);
if(temp__5735__auto__){
var seq__67643__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67643__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__67643__$1);
var G__67871 = cljs.core.chunk_rest(seq__67643__$1);
var G__67872 = c__4609__auto__;
var G__67873 = cljs.core.count(c__4609__auto__);
var G__67874 = (0);
seq__67643 = G__67871;
chunk__67645 = G__67872;
count__67646 = G__67873;
i__67647 = G__67874;
continue;
} else {
var path = cljs.core.first(seq__67643__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67717_67875 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67720_67876 = null;
var count__67721_67877 = (0);
var i__67722_67878 = (0);
while(true){
if((i__67722_67878 < count__67721_67877)){
var node_67879 = chunk__67720_67876.cljs$core$IIndexed$_nth$arity$2(null,i__67722_67878);
var path_match_67880 = shadow.cljs.devtools.client.browser.match_paths(node_67879.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67880)){
var new_link_67881 = (function (){var G__67727 = node_67879.cloneNode(true);
G__67727.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67880),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67727;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67880], 0));

goog.dom.insertSiblingAfter(new_link_67881,node_67879);

goog.dom.removeNode(node_67879);


var G__67882 = seq__67717_67875;
var G__67883 = chunk__67720_67876;
var G__67884 = count__67721_67877;
var G__67885 = (i__67722_67878 + (1));
seq__67717_67875 = G__67882;
chunk__67720_67876 = G__67883;
count__67721_67877 = G__67884;
i__67722_67878 = G__67885;
continue;
} else {
var G__67886 = seq__67717_67875;
var G__67887 = chunk__67720_67876;
var G__67888 = count__67721_67877;
var G__67889 = (i__67722_67878 + (1));
seq__67717_67875 = G__67886;
chunk__67720_67876 = G__67887;
count__67721_67877 = G__67888;
i__67722_67878 = G__67889;
continue;
}
} else {
var temp__5735__auto___67890__$1 = cljs.core.seq(seq__67717_67875);
if(temp__5735__auto___67890__$1){
var seq__67717_67891__$1 = temp__5735__auto___67890__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67717_67891__$1)){
var c__4609__auto___67892 = cljs.core.chunk_first(seq__67717_67891__$1);
var G__67893 = cljs.core.chunk_rest(seq__67717_67891__$1);
var G__67894 = c__4609__auto___67892;
var G__67895 = cljs.core.count(c__4609__auto___67892);
var G__67896 = (0);
seq__67717_67875 = G__67893;
chunk__67720_67876 = G__67894;
count__67721_67877 = G__67895;
i__67722_67878 = G__67896;
continue;
} else {
var node_67897 = cljs.core.first(seq__67717_67891__$1);
var path_match_67898 = shadow.cljs.devtools.client.browser.match_paths(node_67897.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67898)){
var new_link_67899 = (function (){var G__67728 = node_67897.cloneNode(true);
G__67728.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67898),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67728;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67898], 0));

goog.dom.insertSiblingAfter(new_link_67899,node_67897);

goog.dom.removeNode(node_67897);


var G__67900 = cljs.core.next(seq__67717_67891__$1);
var G__67901 = null;
var G__67902 = (0);
var G__67903 = (0);
seq__67717_67875 = G__67900;
chunk__67720_67876 = G__67901;
count__67721_67877 = G__67902;
i__67722_67878 = G__67903;
continue;
} else {
var G__67904 = cljs.core.next(seq__67717_67891__$1);
var G__67905 = null;
var G__67906 = (0);
var G__67907 = (0);
seq__67717_67875 = G__67904;
chunk__67720_67876 = G__67905;
count__67721_67877 = G__67906;
i__67722_67878 = G__67907;
continue;
}
}
} else {
}
}
break;
}


var G__67908 = cljs.core.next(seq__67643__$1);
var G__67909 = null;
var G__67910 = (0);
var G__67911 = (0);
seq__67643 = G__67908;
chunk__67645 = G__67909;
count__67646 = G__67910;
i__67647 = G__67911;
continue;
} else {
var G__67912 = cljs.core.next(seq__67643__$1);
var G__67913 = null;
var G__67914 = (0);
var G__67915 = (0);
seq__67643 = G__67912;
chunk__67645 = G__67913;
count__67646 = G__67914;
i__67647 = G__67915;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__67735){
var map__67736 = p__67735;
var map__67736__$1 = (((((!((map__67736 == null))))?(((((map__67736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67736):map__67736);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67736__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67736__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__67739){
var map__67740 = p__67739;
var map__67740__$1 = (((((!((map__67740 == null))))?(((((map__67740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67740):map__67740);
var msg = map__67740__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67740__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67740__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67740__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67740__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__67742){
var map__67743 = p__67742;
var map__67743__$1 = (((((!((map__67743 == null))))?(((((map__67743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67743):map__67743);
var src = map__67743__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67743__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__67745){
var map__67746 = p__67745;
var map__67746__$1 = (((((!((map__67746 == null))))?(((((map__67746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67746):map__67746);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67746__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67746__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__67748){
var map__67749 = p__67748;
var map__67749__$1 = (((((!((map__67749 == null))))?(((((map__67749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67749):map__67749);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67749__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67749__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__67751){
var map__67752 = p__67751;
var map__67752__$1 = (((((!((map__67752 == null))))?(((((map__67752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67752):map__67752);
var msg = map__67752__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67752__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__67757 = type;
var G__67757__$1 = (((G__67757 instanceof cljs.core.Keyword))?G__67757.fqn:null);
switch (G__67757__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__67758 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__67759 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__67760 = "POST";
var G__67761 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__67762 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__67758,G__67759,G__67760,G__67761,G__67762);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

(socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e67764){var e = e67764;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___67917 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___67917)){
var s_67918 = temp__5735__auto___67917;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_67918.onclose = (function (e){
return null;
}));

s_67918.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
