const { header } = require('express/lib/request');
const req = require('express/lib/request');
const { createLogger } = require('winston');
const buildProdLogger = require('./logger.js');

var bodyParser=require('body-parser')
var urlencodedParser=bodyParser.urlencoded({extended:false})






const app=require('express')();
const PORT=8080;




app.listen(
    PORT,
    ()=> console.log(`it's alive on http://localhost:${PORT}`)
)

/*
const path = require('path')
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index2.html'));
  });

  */
//console.log(req.get())




//PROD LOGGER TEST
const logger = require('./logger.js');



logger1 = logger('debug');

app.post('/',(req,res) => {

        /*
    if(res.status(200))
    {
        
        console.log(req.headers);
        console.log(req.headers['accept']);
      //req.headers['accept'] === null
    }
    
    res.write('<p>Hellow World</p>')

    */    
    logger1.info('URL: '+ req.hostname+':'+PORT+req.path)
    logger1.warn("Test")
    logger1.error("Test")
    logger1.debug("Test")
    
    //
    console.log(logger1.url)

    console.log(req.headers['accept']);
    if(req.headers['accept']=='*/*') 
        (
            res.status(200).send(
            {
            message: "Hello, World"
            }
        )
            
    )
    else{
        
            res.status(200).send('<p>Hello, World</p>')
        
    }

    console.log(req.url)
    console.log(req.originalUrl)
    console.log(req.baseUrl)
    console.log(req.hostname)
    console.log(req.path)
    console.log(req.PORT)
    
});

app.get('/',(req,res) => {

    /*
    if(res.status(200))
    {
        
        console.log(req.headers);
        console.log(req.headers['accept']);
      //req.headers['accept'] === null
    }
    
    res.write('<p>Hellow World</p>')

    */    
    logger1.info('URL: '+ req.hostname+':'+PORT+req.path)
    logger1.warn("Test")
    logger1.error("Test")
    logger1.debug("Test")
    
    //
    console.log(logger1.url)

    console.log(req.headers['accept']);
    if(req.headers['accept']=='*/*') 
        (
            res.status(200).send(
            {
            message: "Hello, World"
            }
        )
            
    )
    else{
        
            res.status(200).send('<p>Hello, World</p>')
        
    }

    console.log(req.url)
    console.log(req.originalUrl)
    console.log(req.baseUrl)
    console.log(req.hostname)
    console.log(req.path)
    console.log(req.PORT)
    
    
})


