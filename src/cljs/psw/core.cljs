(ns psw.core
  (:require
   [psw.icons :refer [linkedin, github, clojure]]
   [psw.router.routes :refer [router page-for]]
   [psw.router.utils :refer [path-for]]
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [reitit.frontend :as reitit]
   [clerk.core :as clerk]
   [accountant.core :as accountant]))

(defn header []
  (fn []
    (.log js/console (path-for :projects))
    [:nav
     [:div.left
      [:ul
       [:li>a#title {:href (path-for :index)} "MP."]
       [:li [:a {:href (path-for :projects)} "projects"]]
       [:li [:a {:href (path-for :about)} "about"]]
       [:li>a {:href (path-for :contact)} "contact"]]]
     [:div.right
      [:ul
       [:li>a {:href "blbab"} github]
       [:li>a {:href "blbab"} linkedin]]]]))

(defn footer []
  (fn []
    [:div#footer
     [:div [:p "copyright\u00A92019 Marin Postma"]]
     [:div  [:p "made with love with " [:i.icon-clojure clojure]]]]))

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [header]
       [:div#page-container
        [page]]
       [footer]])))
;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)))
    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
