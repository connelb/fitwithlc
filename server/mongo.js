const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const env = require('./config');

// eslint-disable-next-line max-len
//const mongoUri = `mongodb://${env.accountName}:${env.key}@${env.accountName}.documents.azure.com:${env.port}/${env.databaseName}?ssl=true`; //&replicaSet=globaldb`;
const mongoUri = `mongodb://briancosmosdb:om80PC7xPkBliz5pS9zqIBfC3NEnkLlzPHcUCvElmTZW7wAaU34AmjQYWncEfCQd0wCuTsu2YACsVu16pgZPMg==@briancosmosdb.documents.azure.com:10255/?ssl=true`;

function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
  connect,
  mongoose
};
