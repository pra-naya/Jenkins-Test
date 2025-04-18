import chai from 'chai';
import chaiHttp from 'chai-http';
import { app, server } from '../src/index.js';

const { expect } = chai;
chai.use(chaiHttp);

describe('GET /', () => {
  it('should return 200 and a greeting', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello from Express Build!');
        done();
      });
  });

  after(() => {
    if (server) {
      server.close(); // Close the server after tests
    }
  });
});

