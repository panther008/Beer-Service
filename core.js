var config = require("./config");
var winston = require("winston");

var self = (module.exports = {
  createLogger: function() {
    var transports = [new winston.transports.Console()];
    if (config.log.path) {
      transports.push(
        new winston.transports.File({ filename: config.log.path })
      );
    }
    return winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      transports: transports
    });
  }
});
