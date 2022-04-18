
/*
Imports

Winston library was used to create a custom logger
*/
const { format, createLogger, transports } = require('winston');
const { timestamp, combine, errors, json } = format;




//Timestamp has been added
function buildLogger(loglevel) {
  return createLogger({
    level: loglevel,
    format: combine(format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }), errors({ stack: true }), json()),
      transports: [new transports.Console()],
  });
}

module.exports = buildLogger;