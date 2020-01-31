goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__62303__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__62303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62304__i = 0, G__62304__a = new Array(arguments.length -  0);
while (G__62304__i < G__62304__a.length) {G__62304__a[G__62304__i] = arguments[G__62304__i + 0]; ++G__62304__i;}
  args = new cljs.core.IndexedSeq(G__62304__a,0,null);
} 
return G__62303__delegate.call(this,args);};
G__62303.cljs$lang$maxFixedArity = 0;
G__62303.cljs$lang$applyTo = (function (arglist__62306){
var args = cljs.core.seq(arglist__62306);
return G__62303__delegate(args);
});
G__62303.cljs$core$IFn$_invoke$arity$variadic = G__62303__delegate;
return G__62303;
})()
);

(o.error = (function() { 
var G__62307__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__62307 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62309__i = 0, G__62309__a = new Array(arguments.length -  0);
while (G__62309__i < G__62309__a.length) {G__62309__a[G__62309__i] = arguments[G__62309__i + 0]; ++G__62309__i;}
  args = new cljs.core.IndexedSeq(G__62309__a,0,null);
} 
return G__62307__delegate.call(this,args);};
G__62307.cljs$lang$maxFixedArity = 0;
G__62307.cljs$lang$applyTo = (function (arglist__62311){
var args = cljs.core.seq(arglist__62311);
return G__62307__delegate(args);
});
G__62307.cljs$core$IFn$_invoke$arity$variadic = G__62307__delegate;
return G__62307;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
