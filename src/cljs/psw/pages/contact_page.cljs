
(ns psw.pages.contact-page)

(defn contact-page []
  (fn []
    [:div.main
     [:h1 "hello visitor!"]
     [:p "Want to know more about me, work with me, or just have a nice chat? You can contact me on " [:a {:href "https://www.linkedin.com/in/marinpostma/"}"Linkedin"] " or at marin.postma@gmail.com"]]))
