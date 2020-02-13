(ns psw.pages.about-page
  (:require
   [psw.icons :refer [star-solid]]
   [markdown-to-hiccup.core :refer [md->hiccup component]]))

(def col1-content
  "
#tl;dr
- Engineering student
- passionate about programing and computer science
- Strongly self-motivated & deeply curious
- Programming skills in Rust, C, Clojure, Python, Javascript
- Product Management experience
- Linux/Unix experienced user.

#About Me
  I am a engineering student, passionate about computer programing, puzzles, and learning new things. I am also obsessed with human-machine interface design, reading, music and learning new things. I am currently looking for an internship in a mid-size tech startup, as a software engineer.
  ")

(def col2-content
  "
# Skills
- Programming languages: Rust, C, Clojure, Python, Ruby, Javascript, bash
- Unix programming
- Functional & Object oriented programming
- System Programming
- Machine Learning: Deep Neural Networks, CNN, RNN, NLP...
- Algorithms and Data-structures
  ")

(def col3-content
  "
# Tools
- Vim
- shell: Bash, zsh, fish
- Language Server Protocol
- Valgrind, kcachegrind, gdb, lldb
- Linux 
  ")

(defn about-page []
  (fn []
    [:div
     [:div.main
      [:div.title-bar
       [:h1 "Marin Postma."]
       [:div.container
        (->>
         col1-content
         (md->hiccup)
         (component))]
       [:div.container
        [:div.col (->>
                   col2-content
                   (md->hiccup)
                   (component))]
        [:div.col (->>
                   col3-content
                   (md->hiccup)
                   (component))]]
       [:div.container
        [:div [:h1 "Languages"]
         [:div#languages
          [:div [:span (repeat 5 star-solid)] [:p "French"]]
          [:div [:span (repeat 4 star-solid)] [:p "English"]]
          [:div [:span (repeat 2 star-solid)] [:p "Spanish"]]
          [:div [:span (repeat 2 star-solid)] [:p "Hebrew"]]]]]]
      [:div#resume [:button {:on-click (fn [e] (.open js/window "./assets/cv.pdf" "_blank" "fullscreen=yes"))}"Get my Resume"]]]]))


