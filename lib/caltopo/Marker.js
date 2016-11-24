'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Marker = function () {
  function Marker(config) {
    _classCallCheck(this, Marker);

    this.config = config;
    this.name = config.label;
    this.comments = config.comments;
    this.updated = parseInt(config.updated);
  }

  _createClass(Marker, [{
    key: 'coordinates',
    value: function coordinates() {
      var pos = this.config.position;
      return [pos.lat, pos.lng];
    }
  }, {
    key: 'icon',
    value: function icon() {
      return Marker.iconFor(this.config.url);
    }
  }], [{
    key: 'iconFor',
    value: function iconFor(icon) {
      var base = 'https://caltopo.com/resource/imagery/icons';

      // HEX DOT
      var hexDot = icon.match(/^#(\w{6})$/);
      if (hexDot) {
        return base + '/circle/' + hexDot[1] + '.png';
      }

      // URL
      var url = icon.match(/^https?:\/\//);
      if (url) {
        return icon;
      }

      // CUSTOMIZED CALTOPO
      var customCaltopo = icon.match(/^(\w+):(\w+),(\w{6})$/);
      if (customCaltopo) {
        return base + custom[customCaltopo[1]](customCaltopo);
      }

      // CALTOPO
      var caltopo = icon.match(/^(\w+)$/);
      if (caltopo) {
        return 'https://s3-us-west-1.amazonaws.com/caltopo/static/images/icons/' + caltopo[1] + '.png';
      }
    }
  }]);

  return Marker;
}();

exports.default = Marker;


var custom = {
  c: function c(a) {
    return '/' + a[2] + '/' + a[3] + '.png';
  },
  t: function t(a) {
    return '/text/' + a[2] + '.png?color=' + a[3];
  }
};
//# sourceMappingURL=Marker.js.map