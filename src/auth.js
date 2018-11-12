import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'lukedavis.auth0.com',
    clientID: '1ENo4EF46bA1B2d9aC4LLIkB6Tb9ok80',
    // maybe change this to anthropolocast
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
