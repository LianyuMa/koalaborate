const app = require('../index');
const request = require('supertest').agent(app.listen());

describe('Server', function () {
  describe('when GET /', function () {
    it('should say `Koalaborate`', function (done) {
      request
        .get('/')
        .expect(200)
        .expect('Koalaborate', done);
    });

    it('should set X-Response-Time', function (done) {
      request
        .get('/')
        .expect('X-Response-Time', /ms$/)
        .expect(200, done);
    });
  });
});