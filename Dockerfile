FROM node:8.9-alpine as angular-built
WORKDIR /usr

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

COPY package.json package.json
RUN npm install --silent
COPY . .
RUN ng build --prod --build-optimizer

#Express server =======================================
FROM node:8.9-alpine as express-server
RUN mkdir -p /usr/server
WORKDIR /usr
COPY /server /usr/server
RUN npm install --production --silent

#Final image ========================================
FROM node:8.9-alpine
RUN mkdir -p /usr/dist
RUN mkdir -p /usr/server
WORKDIR /usr
COPY --from=express-server /usr/server /usr/server
COPY --from=angular-built /usr/dist /usr/dist
ENV PORT 80
#EXPOSE 80 443
#ENV API_URL we-could-set-this-here-as-default
CMD [ "node", "serve", "-g", "daemon off;" ]