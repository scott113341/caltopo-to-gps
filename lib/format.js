'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;

var _index = require('./formats/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function format(calTopoJson, outputApp) {
  var formatter = _index2.default[outputApp];
  if (!formatter) throw Error('Output app "' + outputApp + '" is unsupported.');
  return formatter(calTopoJson);
}
//# sourceMappingURL=format.js.map