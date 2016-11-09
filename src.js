import winston from 'winston'
import path from 'path'

class Logger{
  constructor() {
    this.logFolder = './logs'
    this.logError = new winston.Logger()
    this.logInfo = new winston.Logger()
    this.logDebug = new winston.Logger()

    this.logError.add(winston.transports.File, {
      name: 'error-file',
      level: 'error',
      filename: path.join(this.logFolder, 'error.log'),
      maxsize: 3 * 1048576,
      json: true,
    })

    this.logInfo.add(winston.transports.File, {
      name: 'info-file',
      level: 'info',
      filename: path.join(this.logFolder, 'info.log'),
      maxsize: 3 * 1048576,
      json: true,
    })

    this.logDebug.add(winston.transports.File, {
      name: 'debug-file',
      level: 'debug',
      filename: path.join(this.logFolder, 'debug.log'),
      maxsize: 3 * 1048576,
      json: true,
    })
  }

  error(log) {
    this.logError.log('error', log)
  }

  info(log) {
    this.logInfo.log('info', log)
  }

  debug(log) {
    this.logDebug.log('info', log)
  }

}
const log = new Logger()
module.exports = log
