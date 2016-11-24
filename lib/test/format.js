'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _format = require('../format.js');

var _format2 = _interopRequireDefault(_format);

var _index = require('./fixtures/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('format TopoMapsPlus', function (t) {
  var kml = (0, _format2.default)(_index2.default.Simple, 'TopoMapsPlus');
  t.equal(typeof kml === 'undefined' ? 'undefined' : _typeof(kml), 'string');
  t.ok(kml.length > 1000);
  t.end();
});
//# sourceMappingURL=format.js.map