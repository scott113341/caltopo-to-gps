'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;

var _Marker = require('../caltopo/Marker.js');

var _Marker2 = _interopRequireDefault(_Marker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Style = function Style(id, iconUrl) {
  _classCallCheck(this, Style);

  this.id = id;
  this.url = iconUrl;
};

function stylesFrom(markers) {
  var styles = new Map();
  markers.forEach(function (marker, i) {
    var icon = marker.icon();
    if (styles.has(icon)) return;
    styles.set(icon, new Style('style' + i, marker.icon()));
  });
  return styles;
}

function format(calTopoJson) {
  var markers = calTopoJson.Marker.map(function (m) {
    return new _Marker2.default(m);
  });
  var styles = stylesFrom(markers);

  return ('\n<?xml version="1.0" encoding="UTF-8"?>\n<kml xmlns="http://www.opengis.net/kml/2.2">\n  <Document>\n    ' + Array.from(styles.values()).map(style).join('') + '\n    ' + markers.map(function (m) {
    return placemark(m, styles);
  }).join('') + '\n  </Document>\n</kml>').trim();
}

function style(style) {
  return '\n    <Style id="' + style.id + '">\n      <IconStyle>\n        <Icon>\n          <href>' + style.url + '</href>\n        </Icon>\n      </IconStyle>\n    </Style>\n  ';
}

function placemark(marker, styles) {
  return '\n    <Placemark>\n      <name>' + marker.name + '</name>\n      <styleUrl>' + styles.get(marker.icon()).id + '</styleUrl>\n      <Point>\n        <coordinates>' + [].concat(_toConsumableArray(marker.coordinates())).reverse().join(',') + '</coordinates>\n      </Point>\n    </Placemark>  \n  ';
}
//# sourceMappingURL=topo-maps-plus.js.map