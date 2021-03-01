FROM node:12.21.0

RUN apt-get update \
    && apt-get install -y vim

RUN npm install -g pm2 \
    && pm2 install pm2-logrotate@latest \
    && pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

ARG DISABLE_CACHE

RUN echo $DISABLE_CACHE

RUN mkdir -p /var/www/node-sample
COPY . /var/www/node-sample
RUN cd /var/www/node-sample \
    && npm i

WORKDIR /var/www/node-sample

CMD [ "pm2-runtime", "start", "ecosystem.config.js"]
