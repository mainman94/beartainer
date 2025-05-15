FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY ../src/index.html .
COPY ../src/css/ ./css/
COPY ../src/js/ ./js/
COPY ../src/images/ ./images/
COPY ../src/data/ ./data/

EXPOSE 80