FROM node:12.21.0

RUN apk update \
    && apk add vim

RUN npm install -g pm2 \
    && pm2 install pm2-logrotate@latest \
    && pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

ARG DISABLE_CACHE

RUN echo $DISABLE_CACHE

RUN mkdir -p /var/www \
    && cd /var/www \
    && git clone --depth 1 https://github.com/postlude/node-sample.git --branch master --single-branch \
    && cd node-sample \
    && npm i

WORKDIR /var/www/node-sample

CMD [ "pm2-runtime", "start", "ecosystem.config.js"]
