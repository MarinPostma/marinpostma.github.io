#!/usr/bin/bash
rm -rf ./resources/public/js/*
shadow-cljs release app
lein sass4clj once  
cp -r ./resources/public/* .
git add .
git commit -m "update gh-page"
git push
