
/*
Imports

Chai and Mocha libraries were used for unit testing
*/

const expect = require('chai').expect;
const request = require('supertest');

const app = require('./index.js');



describe('GET Test', () => {
  
    it('GET REQ', (done) => {
      request(app).get('/')
        .then((res) => {
          const body = res.body;
          //expect(body.length).to.equal(0);
          done();
        })
        .catch((err) => done(err));
    });
 
})

describe('POST Test', () => {
  
    it('POST REQ', (done) => {
      request(app).post('/')
        .send({ name: 'NOTE TEST', text: 'BBB' })
        .then((res) => {
          request(app).get('/')
            .then((res) => {
              const body = res.body;
             // expect(body.length).to.equal(1);
              done();
            })
        })
        .catch((err) => done(err));
    });
  })