FROM node:14

ENV SERVER_HOME /node-sample

RUN npm install -g pm2 \
    && pm2 install pm2-logrotate@latest \
    && pm2 set pm2-logrotate:rotateInterval '0 0 * * *'

RUN mkdir ${SERVER_HOME}

COPY ./* ${SERVER_HOME}

WORKDIR ${SERVER_HOME}

RUN npm i

CMD [ "pm2-runtime", "start", "ecosystem.config.js"]