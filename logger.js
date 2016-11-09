'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);

    this.logFolder = './logs';
    this.logError = new _winston2.default.Logger();
    this.logInfo = new _winston2.default.Logger();
    this.logDebug = new _winston2.default.Logger();

    this.logError.add(_winston2.default.transports.File, {
      name: 'error-file',
      level: 'error',
      filename: _path2.default.join(this.logFolder, 'error.log'),
      maxsize: 3 * 1048576,
      json: true
    });

    this.logInfo.add(_winston2.default.transports.File, {
      name: 'info-file',
      level: 'info',
      filename: _path2.default.join(this.logFolder, 'info.log'),
      maxsize: 3 * 1048576,
      json: true
    });

    this.logDebug.add(_winston2.default.transports.File, {
      name: 'debug-file',
      level: 'debug',
      filename: _path2.default.join(this.logFolder, 'debug.log'),
      maxsize: 3 * 1048576,
      json: true
    });
  }

  _createClass(Logger, [{
    key: 'error',
    value: function error(log) {
      this.logError.log('error', log);
    }
  }, {
    key: 'info',
    value: function info(log) {
      this.logInfo.log('info', log);
    }
  }, {
    key: 'debug',
    value: function debug(log) {
      this.logDebug.log('info', log);
    }
  }]);

  return Logger;
}();

var log = new Logger();
module.exports = log;