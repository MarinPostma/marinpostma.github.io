(ns psw.router.utils
  (:require
    [psw.router.routes :refer [router]]
    [reitit.frontend :as reitit]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))
