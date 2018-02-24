FROM node:8.9-alpine as angular-built
WORKDIR /usr/src/app

LABEL authors="John Papa"

#Linux setup
RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

#Angular CLI
RUN npm install -g @angular/cli@1.6.5

COPY package.json package.json
RUN npm install --silent
COPY . .
RUN ng build --prod --build-optimizer

#Express server =====================================
#FROM node:8.9.3-alpine as express-server
#RUN mkdir -p /usr/src/app
#COPY ./src/server/* /usr/src/app/
#WORKDIR /usr/src/app
#RUN npm install --production --silent
#COPY . .


#FROM node:8.9.3-alpine
#RUN mkdir -p /usr/src/app
#COPY ./app/* /usr/src/app/
#WORKDIR /usr/src/app
#RUN npm install
#CMD node /usr/src/app/index.js

FROM node:8.9.3-alpine as express-server
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./src/server/* /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app


#Final image =====================================@@@@@@@@@ 
FROM node:8.9-alpine
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server
#RUN mkdir -p /usr/src/app/dist

#LABEL author="John Papa"
#COPY --from=angular-built /usr/src/app/dist/* ../../
COPY --from=express-server /usr/src/app /usr/src/server/
EXPOSE 3000
#no such file or directory, stat '/usr/src/dist/index.html'  __dirname, '../../dist/index.html'
# Cannot find module './models/hero.model' (/usr/src/server/hero.service.js /usr/src/server/routes.js
#Error: Cannot find module 'express'
#Error: Cannot find module '/usr/src/server/index.js'
#stat '/usr/src/server/index.html'
#CMD [ "ng", "serve" ]
#CMD [ "npm", "start" ]
CMD [ "node", "index.js" ]
