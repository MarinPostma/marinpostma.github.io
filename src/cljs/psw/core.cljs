(ns psw.core
  (:require
   [psw.icons :refer [linkedin, github, clojure]]
   [reagent.core :as reagent :refer [atom]]
   [reagent.session :as session]
   [reitit.frontend :as reitit]
   [clerk.core :as clerk]
   [psw.pages.home-page :refer [home-page]]
   [psw.pages.about-page :refer [about-page]]
   [psw.pages.project-page :refer [project-page]]
   [accountant.core :as accountant]))

;; -------------------------
;; Routes


(def router
  (reitit/router
   [["/" :index]
    ["/contact" :contact]
    ["/about" :about]
    ["/projects" :projects]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

(path-for :about)
;; -------------------------
;; Page components


(defn contact-page []
  (fn []
    [:div.main
     [:h1 "hello"]]))


;; -------------------------
;; Translate routes -> page components


(defn page-for [route]
  (case route
    :index #'home-page
    :projects #'project-page
    :about #'about-page
    :contact #'contact-page))


;; -------------------------
;; Page mounting component


(defn header []
  (fn []
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
     [:div  [:p "made with love with " [:i.icon-clojure]]]]))

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
