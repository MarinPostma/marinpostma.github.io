(ns psw.pages.project-page)

(def projects [{:name "CHIP-8"
                :repo "https://github.com/MarinPostma/CHIP-8"
                :description "A basic CHIP-8 emulator written in rust"}
               {:name "Matlang"
                :repo "https://github.com/MarinPostma/matlang"
                :description "A toy programing language and interpreter written in Clojure. Thought to make matrices usage as convenient as arrays."}
               {:name "Circular.js"
                :repo "https://github.com/MarinPostma/circular.js"
                :description "A very tiny javascript front-end framework, using virtual dom and inspired by vue.js"}
               {:name "42sh"
                :repo "https://github.com/MarinPostma/42sh"
                :description "42 group project project, shell written in c"}
               {:name "t_800"
                :repo "https://github.com/MarinPostma/t_800"
                :description "A peer-to-peer terminal caster written in rust. Allows you to share your terminal to anybody."}
               {:name "This website"
                :repo "https://github.com/MarinPostma/pws"
                :description "My personal website, written in clojurescript, using reagent and shadow-cljs"}])

(defn project-card []
  (fn [project]
    [:div.project-card
     [:fieldset
      [:legend (:name project)]
      [:div.content
       [:div
        [:p (:description project)]
        [:a {:href (:repo project)} "View more..."]]]]]))

(defn project-page []
  (fn []
    [:div.main
     [:div  [:h3 "A curated list of my projects."]]
     (map #(conj [] project-card %) projects)]))
