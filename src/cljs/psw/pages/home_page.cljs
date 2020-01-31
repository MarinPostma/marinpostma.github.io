(ns psw.pages.home-page
  (:require
    ["react-terminal-component" :refer [ReactTerminal, ReactTerminalStateless]]
   [reagent.core :as reagent :refer [atom]]
    [cljs.pprint :refer [pprint]]
    ["javascript-terminal" :refer [EmulatorState, Outputs, defaultCommandMapping, OutputFactory, CommandMapping]]))


(def state
  (. EmulatorState create  
     (clj->js 
       { 
        "commandMapping" (. 
                           CommandMapping 
                           create 
                           (clj->js (assoc 
                                      (js->clj defaultCommandMapping) 
                                      "help" {
                                               "function" (fn [state opts]
                                                            (let [input (. opts join " ") ]
                                                              (clj->js {:output (. OutputFactory makeTextOutput (str 
"The following commands are available:
\t- resume: downloads a copy of my resume
\t- projects: go to my projects page
\t- bio: go to my bio page"))}) 
                                                              ))
                                               "optDef" {}
                                               })))
        "outputs" (. Outputs create [(. OutputFactory makeTextOutput "Welcome to Marin's personal website\nType \"help\" to get started")])})))

(def state-atom (atom {:state state :input-str ""}))

(defn home-page []
  (fn [] (let []
           [:div.main
            [:div#term-container
             [:h4 "Welcome to my website."]
             [:h5 "Type \"help\" to get started"]
             [:> ReactTerminalStateless {:theme 
                                         {:background "#282828"
                                          :height "50vh"
                                          :promptSymbolColor "#458588"
                                          :spacing "1%"
                                          :fontSize "1.1rem"
                                          :commandColor "#fbf1c7"
                                          :outputColor "#ebdbb2"
                                          :errorOutputColor "#cc241d"
                                          :fontFamily "Cutive Mono"}
                                         :promptSymbol "\u03BB "
                                         :emulatorState (:state @state-atom)
                                         :onStateChange (fn [new-state] (swap! state-atom assoc :state new-state :input-str ""))
                                         :onInputChange (fn [input] (swap! state-atom assoc :input-str input))
                                         :clickToFocus true
                                         :inputStr (:input-str @state-atom)}] ]] )))

