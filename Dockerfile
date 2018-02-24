FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./src/server/* /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]

# no such file or directory, stat '/usr/src/app/dist/index.html'
#no such file or directory, stat '/usr/src/app/dist/index.html'
#no such file or directory, stat '/usr/src/app./dist/index.html'