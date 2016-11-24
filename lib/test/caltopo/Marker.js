'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _Marker = require('../../caltopo/Marker.js');

var _Marker2 = _interopRequireDefault(_Marker);

var _index = require('../fixtures/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _tape2.default)('Marker#constructor', function (t) {
  var data = _index2.default.Simple.Marker[0];
  var marker = new _Marker2.default(data);
  t.deepEqual(marker.config, data);
  t.deepEqual(marker.name, 'red');
  t.deepEqual(marker.comments, 'commentz');
  t.deepEqual(marker.updated, 1479952049000);
  t.equal(_typeof(marker.icon), 'function');
  t.equal(_typeof(marker.coordinates), 'function');
  t.end();
});

(0, _tape2.default)('Marker#coordinates', function (t) {
  var marker = new _Marker2.default(_index2.default.Simple.Marker[0]);
  t.deepEqual(marker.coordinates(), [39.46486419970058, -106.64050943389896]);
  t.end();
});

(0, _tape2.default)('Marker#icon', function (t) {
  var marker = new _Marker2.default(_index2.default.Simple.Marker[0]);
  t.equal(marker.icon(), 'https://caltopo.com/resource/imagery/icons/circle/FF0000.png');
  t.end();
});

(0, _tape2.default)('Marker.iconFor', function (t) {
  var base = 'https://caltopo.com/resource/imagery/icons';
  t.equal(_Marker2.default.iconFor('#FF0000'), base + '/circle/FF0000.png');
  t.equal(_Marker2.default.iconFor('https://s3-us-west-2.amazonaws.com/gp.us.waypointicons/waypointTrailer.png'), 'https://s3-us-west-2.amazonaws.com/gp.us.waypointicons/waypointTrailer.png');
  t.equal(_Marker2.default.iconFor('c:target,0000FF'), base + '/target/0000FF.png');
  t.equal(_Marker2.default.iconFor('c:ring,0000FF'), base + '/ring/0000FF.png');
  t.equal(_Marker2.default.iconFor('t:GG,00CD00'), base + '/text/GG.png?color=00CD00');
  t.equal(_Marker2.default.iconFor('xc'), 'https://s3-us-west-1.amazonaws.com/caltopo/static/images/icons/xc.png');
  t.end();
});
//# sourceMappingURL=Marker.js.map