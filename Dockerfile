FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/config.conf /etc/nginx/conf.d

COPY ./out /usr/share/nginx/html/
EXPOSE 80
