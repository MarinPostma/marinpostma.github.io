(ns psw.router
  (:require
   [psw.pages.home-page :refer [home-page]]
   [psw.pages.about-page :refer [about-page]]
   [psw.pages.contact-page :refer [contact-page]]
   [psw.pages.project-page :refer [project-page]]
   [clojure.core.match :refer [match]]
   [reitit.frontend :as reitit]))

(def router
  (reitit/router
   [["/" :index]
    ["/contact" :contact]
    ["/about" :about]
    ["/projects" :projects]]))


(defn page-for [route]
  (match route
    :index #'home-page
    :projects #'project-page
    :about #'about-page
    :contact #'contact-page
    :else #'home-page))
