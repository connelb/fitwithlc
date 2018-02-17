import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'seb7PkmMXqiZ3oXbjd76wJGpj1HtcSAn',
  CLIENT_DOMAIN: 'balance.auth0.com', // e.g., kmaida.auth0.com
  AUDIENCE: 'https://webappcontainername.azurewebsites.net/api/', // https://balance.auth0.com/api/v2/ e.g., http://localhost:8083/api/  http://brianazuretest2.azurewebsites.net/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile',
  NAMESPACE: 'https://webappcontainername.azurewebsites.net/api/roles'
};

/* 

https://webappcontainername.azurewebsites.net

http://brianazuretest2.azurewebsites.net
Set Up an API
API
fitWithLc
id 5a25fc4499029f7e93ed9975 
API Audience http://brianazuretest2.azurewebsites.net
Identifier http://brianazuretest2.azurewebsites.net

fitWithLc test client
Client ID:  FdMTDXaDvlDl58PNEG7jyieFsh95ogQ8


Set Up a Client App
Clients
Fit with LC
Client ID seb7PkmMXqiZ3oXbjd76wJGpj1HtcSAn	
seb7PkmMXqiZ3oXbjd76wJGpj1HtcSAn


*/


