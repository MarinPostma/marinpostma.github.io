goog.provide('psw.core');
goog.require('cljs.core');
goog.require('psw.icons');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('psw.pages.home_page');
goog.require('psw.pages.about_page');
goog.require('psw.pages.project_page');
goog.require('cljs.pprint');
goog.require('accountant.core');
psw.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/contact",new cljs.core.Keyword(null,"contact","contact",609093372)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.Keyword(null,"about","about",1423892543)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/projects",new cljs.core.Keyword(null,"projects","projects",-364845983)], null)], null));
psw.core.path_for = (function psw$core$path_for(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55002 = arguments.length;
var i__4790__auto___55003 = (0);
while(true){
if((i__4790__auto___55003 < len__4789__auto___55002)){
args__4795__auto__.push((arguments[i__4790__auto___55003]));

var G__55004 = (i__4790__auto___55003 + (1));
i__4790__auto___55003 = G__55004;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return psw.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(psw.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__54997){
var vec__54998 = p__54997;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54998,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(psw.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(psw.core.router,route));
}
}));

(psw.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(psw.core.path_for.cljs$lang$applyTo = (function (seq54995){
var G__54996 = cljs.core.first(seq54995);
var seq54995__$1 = cljs.core.next(seq54995);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54996,seq54995__$1);
}));

psw.core.path_for(new cljs.core.Keyword(null,"about","about",1423892543));
psw.core.contact_page = (function psw$core$contact_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"hello"], null)], null);
});
});
psw.core.page_for = (function psw$core$page_for(route){
var G__55001 = route;
var G__55001__$1 = (((G__55001 instanceof cljs.core.Keyword))?G__55001.fqn:null);
switch (G__55001__$1) {
case "index":
return new cljs.core.Var(function(){return psw.pages.home_page.home_page;},new cljs.core.Symbol("psw.pages.home-page","home-page","psw.pages.home-page/home-page",1121761634,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"psw.pages.home-page","psw.pages.home-page",-331007053,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"psw/pages/home_page.cljs",(16),(1),(33),(33),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(psw.pages.home_page.home_page)?psw.pages.home_page.home_page.cljs$lang$test:null)]));

break;
case "projects":
return new cljs.core.Var(function(){return psw.pages.project_page.project_page;},new cljs.core.Symbol("psw.pages.project-page","project-page","psw.pages.project-page/project-page",-1688998015,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"psw.pages.project-page","psw.pages.project-page",-1025381456,null),new cljs.core.Symbol(null,"project-page","project-page",172445576,null),"psw/pages/project_page.cljs",19,1,32,32,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(psw.pages.project_page.project_page)?psw.pages.project_page.project_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return psw.pages.about_page.about_page;},new cljs.core.Symbol("psw.pages.about-page","about-page","psw.pages.about-page/about-page",-1757655492,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"psw.pages.about-page","psw.pages.about-page",1664135322,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"psw/pages/about_page.cljs",17,1,41,41,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(psw.pages.about_page.about_page)?psw.pages.about_page.about_page.cljs$lang$test:null)]));

break;
case "contact":
return new cljs.core.Var(function(){return psw.core.contact_page;},new cljs.core.Symbol("psw.core","contact-page","psw.core/contact-page",-535349850,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"psw.core","psw.core",1300499851,null),new cljs.core.Symbol(null,"contact-page","contact-page",-463507667,null),"psw/core.cljs",19,1,35,35,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(psw.core.contact_page)?psw.core.contact_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55001__$1)].join('')));

}
});
psw.core.header = (function psw$core$header(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left","div.left",1530800130),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a#title","li>a#title",989323778),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),psw.core.path_for(new cljs.core.Keyword(null,"index","index",-1531685915))], null),"MP."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),psw.core.path_for(new cljs.core.Keyword(null,"projects","projects",-364845983))], null),"projects"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),psw.core.path_for(new cljs.core.Keyword(null,"about","about",1423892543))], null),"about"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),psw.core.path_for(new cljs.core.Keyword(null,"contact","contact",609093372))], null),"contact"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right","div.right",1671235139),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"blbab"], null),psw.icons.github], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"blbab"], null),psw.icons.linkedin], null)], null)], null)], null);
});
});
psw.core.footer = (function psw$core$footer(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#footer","div#footer",861595109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"copyright\u00A92019 Marin Postma"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"made with love with ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-clojure","i.icon-clojure",643326567)], null)], null)], null)], null);
});
});
psw.core.current_page = (function psw$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get(new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [psw.core.header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#page-container","div#page-container",1872972636),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [psw.core.footer], null)], null);
});
});
psw.core.mount_root = (function psw$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [psw.core.current_page], null),document.getElementById("app"));
});
psw.core.init_BANG_ = (function psw$core$init_BANG_(){
clerk.core.initialize_BANG_();

accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path(psw.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render(clerk.core.after_render_BANG_);

reagent.session.put_BANG_(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),psw.core.page_for(current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path(psw.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return psw.core.mount_root();
});

//# sourceMappingURL=psw.core.js.map
