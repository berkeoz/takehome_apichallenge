
/*
Imports

Chai and Mocha libraries were used for unit testing
*/

const expect = require('chai').expect;
const request = require('supertest');

const app = require('./index.js');

const logger = require('./logger.js');
logger1 = logger('debug');



describe('GET Test', () => {
  
    it('GET REQ', (done) => {
      request(app).get('/')
        .then((res) => {
          
          //console.log(res.text);
          logger1.debug(res.text)
          if(res.text.includes('<p>Hello, World</p>'))
            {
            //console.log("With Header - TEST SUCCESSFUL");
            logger1.debug("With Header - TEST SUCCESSFUL");
            }
          else if (res.text.includes('{message: "Hello, World"}'))
          {
            //console.log(" No Header - TEST SUCCESSFUL");
            logger1.debug(" No Header - TEST SUCCESSFUL");
          }
          else 
          {
            //console.log("Other use case");
            logger1.debug("Other use case");
          }
      
          
          
          done();
        })
        .catch((err) => done(err));
    });
 
})

describe('POST Test', () => {
  
    it('POST REQ', (done) => {
      request(app).post('/')
        .send({ id: '9' })
        .then((res) => {
          
          //console.log(res.text);
          logger1.debug(res.text)
          if(res.text.includes('<p>Hello, World</p>'))
            {
            //console.log("With Header - TEST SUCCESSFUL");
            logger1.debug("With Header - TEST SUCCESSFUL");
            }
          else if (res.text.includes('{message: "Hello, World"}'))
          {
            //console.log(" No Header - TEST SUCCESSFUL");
            logger1.debug(" No Header - TEST SUCCESSFUL");
          }
          else 
          {
            //console.log("Other use case");
            logger1.debug("Other use case");
          }
      

          done();
          

        })
        .catch((err) => done(err));
    });
  })