FROM node:8.9-alpine as angular-built
LABEL authors="Brian Connell"
#WORKDIR /usr/src/app

#Linux setup
RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

#Angular CLI
RUN npm install -g @angular/cli@1.6.5
#COPY package.json ./
#RUN npm install --silent
#COPY . .
#RUN ng build --prod --build-optimizer

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN ng build --prod

#Express server =======================================
#FROM node:8.9-alpine as express-server
#WORKDIR /usr/src/app
#COPY ["package.json", "npm-shrinkwrap.json*", "./"]
#RUN npm install --production --silent && mv node_modules ../
#COPY /src/server /usr/src/app

FROM node:8.9-alpine as express-server
WORKDIR /app
COPY /src/server /app
RUN npm install --production --silent

#Final image ========================================
FROM node:8.9-alpine
#WORKDIR /usr
#RUN mkdir -p /usr/src
#RUN mkdir -p /usr/dist
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=express-server /app /usr/src/app
#COPY --from=express-server /usr/src/app /src/server

#COPY --from=express-server /app /usr/src/app
#COPY --from=express-server /usr/src/app /usr/src
#COPY --from=angular-app /app/dist /usr/src/app
#WORKDIR /usr/src/app/dist

COPY --from=angular-built /app/dist /usr/src/app
#COPY --from=angular-built /usr/src/app/dist /dist
EXPOSE 3000
CMD [ "node", "index.js" ]
#CMD ["node", "/src/server/index.js"]


