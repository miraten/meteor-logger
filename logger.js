var winston = Npm.require("winston");

var winstonTransportType = function(type) {
  switch (type) {
    case 'file':
      return winston.transport.File;
      
    case 'dailyFile':
      return winston.transport.DailyRotateFile;
      
    case 'http':
      return winston.transport.Http;  

    default:
      return winston.transport.Console;
  }
};

Logger = {
  addTransport: function(type, options) {
    return winston.add(winstonTransportType(type), options);
  },
  
  removeTransport: function(type) {
    return winston.remove(winstonTransportType(type));
  },
  
  log: function(level, message) {
    return winston.log(level, message);
  },
  
  debug: function(message) {
    return winston.debug(message);
  },
  
  info: function(message) {
    return winston.info(message);
  },
  
  warn: function(message) {
    return winston.warn(message);
  },
  
  error: function(message) {
    return winston.error(message);
  },
  
  getWinston: function() {
    return winston;
  }
};

Logger.info('Meteor Logger initialized...');





