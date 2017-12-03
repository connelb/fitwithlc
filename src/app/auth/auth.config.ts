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
  AUDIENCE: 'http://brianazuretest2.azurewebsites.net/api/', // e.g., http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile',
  NAMESPACE: 'http://brianazuretest2.azurewebsites.net/api/roles'
};
