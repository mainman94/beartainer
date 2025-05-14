FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY index.html .
COPY css/ ./css/
COPY js/ ./js/
COPY images/ ./images/
COPY data/ ./data/

EXPOSE 80