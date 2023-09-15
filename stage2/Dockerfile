FROM alpine:latest

WORKDIR /usr/src/myapp

RUN apt update && apt-get install php php-mysql

COPY . .

CMD php -S 0.0.0.0:8080 -c php.ini