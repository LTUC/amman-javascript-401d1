'use strict';

const supergoose = require('@code-fellows/supergoose');
const auth = require('../../../src/auth/basic-auth-middleware.js');
const Users = require('../../../src/auth/users.js');

let users = {
  admin: { username: 'admin', password: 'password', role: 'admin' },
  editor: { username: 'editor', password: 'password', role: 'editor' },
  user: { username: 'user', password: 'password', role: 'user' },
};

beforeAll(async (done) => {
  const adminUser = await Users.save(users.admin);
  const editorUser = await Users.save(users.editor);
  const userUser = await Users.save(users.user);
  done();
});

describe('Auth Middleware', () => {

  // admin:password: YWRtaW46cGFzc3dvcmQ=
  // admin:foo: YWRtaW46Zm9v

  describe('user authentication', () => {

    it('fails a login for a user (admin) with the incorrect basic credentials', () => {

      let req = {
        headers: {
          authorization: 'Basic YWRtaW46Zm9v',
        },
      };
      let res = {};
      let next = jest.fn();

      return auth(req, res, next)
        .then(() => {
          expect(next).toHaveBeenCalledWith("Invalid Login");
        });

    }); // it()

    it('logs in an admin user with the right credentials', () => {

      let req = {
        headers: {
          authorization: 'Basic YWRtaW46cGFzc3dvcmQ=',
        },
      };
      let res = {};
      let next = jest.fn();

      return auth(req, res, next)
        .then(() => {
          expect(next).toHaveBeenCalledWith();
        });

    }); // it()

  });

});
