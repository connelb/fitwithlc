FROM node:8.9-alpine as angular-built
#RUN mkdir -p /app
WORKDIR /app

LABEL authors="Brian Connell"

#Linux setup
RUN apk update \
  && apk add --update alpine-sdk \
  && apk del alpine-sdk \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache verify \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd

#Angular CLI
RUN npm install -g @angular/cli@1.6.5

COPY package.json /app
RUN npm install --silent
COPY . /app
RUN ng build --prod --build-optimizer

#Express server =======================================
FROM node:8.9-alpine as express-server
#RUN mkdir -p /usr/src/
WORKDIR /app
COPY src/server /app
RUN npm install --production --silent


#Final image ========================================
FROM node:6.11-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=express-server /app /usr/src/app
COPY --from=angular-built /app/dist /usr/src/app
ENV PORT 80
#ENV API_URL we-could-set-this-here-as-default
CMD [ "node", "node src/server/index.js" ]




