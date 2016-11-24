'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Simple = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Simple = exports.Simple = loadJson('F56K');

exports.default = {
  Simple: Simple
};


function loadJson(file) {
  var filePath = _path2.default.resolve(__dirname, file + '.json');
  var data = _fs2.default.readFileSync(filePath);
  return JSON.parse(data);
}
//# sourceMappingURL=index.js.map