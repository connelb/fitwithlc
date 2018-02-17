FROM node:8.9-alpine as angular-built
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
WORKDIR /app
COPY /src/server /app
RUN npm install --production --silent

#Final image ========================================
FROM node:6.11-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=express-server /app /usr/src/app
COPY --from=angular-app /app/dist /usr/src/app
ENV PORT 80
#ENV API_URL we-could-set-this-here-as-default
CMD [ "node", "index.js" ]


#COPY sshd_config /etc/ssh/
#COPY init.sh /usr/local/bin/
#RUN chmod u+x /usr/local/bin/init.sh

#EXPOSE 80 443
#ENV API_URL we-could-set-this-here-as-default
#CMD [ "node", "server.js", "-g", "daemon off;" , "runserver", "0.0.0.0:8000"]
#CMD ["python", "/code/manage.py", "runserver", "0.0.0.0:8000"]
#ENTRYPOINT ["init.sh"]




