'use strict';

const supergoose = require('@code-fellows/supergoose');
const jwt = require('jsonwebtoken');

const server = require('../../../src/app.js').server;

const mockRequest = supergoose(server);

let users = {
  admin: { username: 'admin', password: 'password' },
  editor: { username: 'editor', password: 'password' },
  user: { username: 'user', password: 'password' },
};

let SECRET = 'myserverhasfleas';

describe('Auth Router', () => {

  Object.keys(users).forEach(userType => {

    describe(`${userType} users`, () => {

      let id;

      it('can create one', () => {
        return mockRequest.post('/signup')
          .send(users[userType])
          .then(results => {
            let token = jwt.verify(results.text, SECRET);
            id = token.id;
            expect(token.username).toBeDefined();
          });
      });

      it('can signin with basic', () => {
        return mockRequest.post('/signin')
          .auth(users[userType].username, users[userType].password)
          .then(results => {
            let token = jwt.verify(results.text, SECRET);
            expect(token.username).toEqual(users[userType].username);
          });
      });

    });

  });

});
