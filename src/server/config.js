module.exports = {
  
  AUTH0_DOMAIN: 'balance.auth0.com',
  AUTH0_API_AUDIENCE:'https://webappcontainername.azurewebsites.net/api/', // e.g., 'http://localhost:8083/api/'
  //MONGO_URI: process.env.MONGO_URI || `mongodb://${process.env.COSMOSDB_ACCOUNT}:${process.env.COSMOSDB_KEY}@${process.env.COSMOSDB_ACCOUNT}.documents.azure.com:${process.env.COSMOSDB_PORT}/?ssl=true`,
  //MONGO_URI: process.env.MONGO_URI || `mongodb://briancosmosdb:om80PC7xPkBliz5pS9zqIBfC3NEnkLlzPHcUCvElmTZW7wAaU34AmjQYWncEfCQd0wCuTsu2YACsVu16pgZPMg==@briancosmosdb.documents.azure.com:10255/?ssl=true`,
  MONGO_URI: process.env.MONGO_URI || `mongodb://localhost:C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw==@localhost:10255/admin?ssl=true`,
  NAMESPACE: 'https://webappcontainername.azurewebsites.net/api/roles' // e.g., http://myapp.com/roles
};

//https://webappcontainername.azurewebsites.net
//test
//mongodb://<dbuser>:<dbpassword>@<ds111111>.mlab.com:<port>/<dbname>

/* accountName: 'briancosmosdb',
databaseName: 'admin',
key: 'om80PC7xPkBliz5pS9zqIBfC3NEnkLlzPHcUCvElmTZW7wAaU34AmjQYWncEfCQd0wCuTsu2YACsVu16pgZPMg==',
port: 10255 
fitWithLc API
http://brianazuretest2.azurewebsites.net
5a25fc4499029f7e93ed9975


fitwithlc2API
http://brianazuretest2.azurewebsites.net/api/
5a2d2dee5506f9630e459915


module.exports = {
  AUTH0_DOMAIN: '[YOUR_AUTH0_DOMAIN]', // e.g., kmaida.auth0.com
  AUTH0_API_AUDIENCE: '[YOUR_AUTH0_API_NAME]', // e.g., 'http://localhost:8083/api/'
  MONGO_URI: process.env.MONGO_URI || 'mongodb://[USER]:[PASSWORD]@[DS######].mlab.com:[PORT]/[DB_NAME]',
  NAMESPACE: '[YOUR_AUTH0_ROLES_RULES_NAMESPACE]' // e.g., http://myapp.com/roles
};
*/