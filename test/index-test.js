const app = require('../index');
const request = require('supertest').agent(app.listen());

describe('Server', () => {
  describe('when GET /', () => {
    it('should say `Koalaborate`', (done) => {
      request
        .get('/')
        .expect(200)
        .expect('Koalaborate', done);
    });

    it('should set X-Response-Time', (done) => {
      request
        .get('/')
        .expect('X-Response-Time', /ms$/)
        .expect(200, done);
    });
  });
});