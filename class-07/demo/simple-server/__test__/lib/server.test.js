'use strict';

const { server } = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
  it('responds with a 500 on error', () => {
    return mockRequest
      .get('/real-error')
      .then(results =>{
        expect(results.status).toBe(500);
      })
      .catch(console.error);
  });

  it('responds with a 404 if a route is not found', () => {
    return mockRequest
      .get('/some-route-that-doesnt-exist')
      .then(results =>{
        expect(results.status).toBe(404);
      })
      .catch(console.error);
  });

  it('respond properly to a get request to /api/v1/food', () => {
    return mockRequest
      .get('/api/v1/food')
      .then(results => {
        expect(results.status).toBe(200);
        console.log('************************', results.body);
        expect(typeof results.body.results).toBe('object');
      });
  });

  it('respond properly to a post request to /api/v1/food', () => {
    return mockRequest
      .post('/api/v1/food')
      .send({ name: 'test name' })
      .then(results => {
        expect(results.status).toBe(201);
        expect(results.body.name).toEqual('test name');
        expect(results.body).toBeDefined();
      });
  });
})
