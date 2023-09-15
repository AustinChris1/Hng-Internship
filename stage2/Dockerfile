FROM debian:latest

WORKDIR /usr/src/myapp

RUN apt update -y && apt-get install php php-mysql -y

COPY . .

CMD php -S 0.0.0.0:8080 -c php.ini