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
FROM node:8.9-alpine as express-server
WORKDIR /usr/src/app/server
COPY /src/server .
RUN npm install --production --silent


#Final image ===================================== 
FROM node:8.9-alpine
WORKDIR /usr/src/app
RUN mkdir -p /dist
RUN mkdir -p /server
#LABEL author="John Papa"
COPY --from=angular-built /usr/src/app/dist /dist
COPY --from=express-server /usr/src/app/server /server
EXPOSE 3000
#Cannot find module '/usr/src/app/server/index.js'
CMD [ "node", "server/index.js" ]