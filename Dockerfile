FROM centos:7

RUN yum clean all \
    && yum -y update \
    && yum -y install vim curl ntp git

ENV HOME /root
ENV NVM_DIR $HOME/.nvm
RUN mkdir $NVM_DIR && curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

ENV NODE_VERSION 12.19.0
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
RUN source ~/.bash_profile \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

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
