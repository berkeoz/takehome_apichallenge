

/*
Imports

Express library was used mainly to treat the requests
*/
const { header } = require('express/lib/request');
const req = require('express/lib/request');
const { createLogger } = require('winston');
const buidLogger = require('./logger.js');

var bodyParser=require('body-parser')
var urlencodedParser=bodyParser.urlencoded({extended:false})



const app=require('express')();

//Port is set in advance.
//Change the port if the port is used by some other service
const PORT=8080;


app.listen(
    PORT,
    ()=> console.log(`Started working on http://localhost:${PORT}`)
)



//In order to change the debugging level please change the debug to info or warning
//For example "logger1 = logger('info');"

const logger = require('./logger.js');
logger1 = logger('debug');

app.post('/',(req,res) => {

    logger1.info('URL: http://'+ req.hostname+':'+PORT+req.path)
//    logger1.warn("Test")
//    logger1.error("Test")
      
    if(req.headers['accept']=='*/*') 
        {
            res.status(200).send({message: "Hello, World"})
            logger1.debug('REQ: POST - Header: NONE - URL: http://'+ req.hostname+':'+PORT+req.path)     
        }
       
    else{
            res.status(200).send('<p>Hello, World</p>') 
            logger1.debug('REQ: POST - Header: ACCEPT - URL: http://'+ req.hostname+':'+PORT+req.path)     
            
        }

});

app.get('/',(req,res) => {
    logger1.info('URL: '+ req.hostname+':'+PORT+req.path)
    
    if(req.headers['accept']=='*/*') 
        {
            res.status(200).send({message: "Hello, World"})
            logger1.debug('REQ: GET - Header: NONE - URL: http://'+ req.hostname+':'+PORT+req.path)     
        }
    else{
            res.status(200).send('<p>Hello, World</p>')
            logger1.debug('REQ: GET - Header: ACCEPT - URL: http://'+ req.hostname+':'+PORT+req.path)     
        }
 
})

module.exports = app;
