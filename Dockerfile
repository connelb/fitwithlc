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
FROM node:8.9.3-alpine as express-server
RUN mkdir -p /usr/src/app
COPY ./src/server /usr/src/app/
WORKDIR /usr/src/app
RUN npm install --production --silent


#Final image ===================================== 
FROM node:8.9-alpine
WORKDIR /usr/src/app
#RUN mkdir -p /usr/src/app/dist
#RUN mkdir -p /usr/src/app/server
#LABEL author="John Papa"
COPY --from=angular-built /usr/src/app/dist .
#COPY --from=express-server /usr/src/app/server /usr/src/app/server
EXPOSE 3000
#Cannot find module '/usr/src/app/server/index.js
#Cannot find module '/usr/src/app/server/index.js'
#Cannot find module '/usr/src/app/server/index.js'
#
CMD [ "ng", "serve" ]


#CMD node /usr/src/app/index.js