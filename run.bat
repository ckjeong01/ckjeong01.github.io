docker stop jekyll
docker rm jekyll
docker run -p 8080:8080 --name jekyll -v %cd%:/srv/jekyll amirpourmand/al-folio:v0.10.0