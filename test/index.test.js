const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index');

const { expect } = chai;
chai.use(chaiHttp);

describe('GET /hello', () => {
  it('should return a greeting message', done => {
    chai.request(app)
      .get('/hello')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'Hello, Jenkins!');
        done();
      });
  });
});

