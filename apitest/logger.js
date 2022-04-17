const { format, createLogger, transports } = require('winston');
const { timestamp, combine, errors, json } = format;

function buildProdLogger(loglevel) {
  return createLogger({
    level: loglevel,
    format: combine(format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }), errors({ stack: true }), json()),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.Console()],
  });
}

module.exports = buildProdLogger;