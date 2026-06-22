#!/bin/bash
docker stop jekyll
docker rm jekyll
docker run -p 8080:8080 --name jekyll -v "//c/homepage/ckjeong01.github.io-teaching":/srv/jekyll amirpourmand/al-folio:v0.10.0