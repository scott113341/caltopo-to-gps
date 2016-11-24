export default class Marker {

  constructor (config) {
    this.config = config;
    this.name = config.label;
    this.comments = config.comments;
    this.updated = parseInt(config.updated);
  }

  coordinates () {
    const pos = this.config.position;
    return [pos.lat, pos.lng];
  }

  icon () {
    return Marker.iconFor(this.config.url);
  }

  static iconFor (icon) {
    const base = 'https://caltopo.com/resource/imagery/icons';

    // HEX DOT
    const hexDot = icon.match(/^#(\w{6})$/);
    if (hexDot) {
      return `${base}/circle/${hexDot[1]}.png`;
    }

    // URL
    const url = icon.match(/^https?:\/\//);
    if (url) {
      return icon;
    }

    // CUSTOMIZED CALTOPO
    const customCaltopo = icon.match(/^(\w+):(\w+),(\w{6})$/);
    if (customCaltopo) {
      return base + custom[customCaltopo[1]](customCaltopo);
    }

    // CALTOPO
    const caltopo = icon.match(/^(\w+)$/);
    if (caltopo) {
      return `https://s3-us-west-1.amazonaws.com/caltopo/static/images/icons/${caltopo[1]}.png`;
    }
  }

}

const custom = {
  c: a => `/${a[2]}/${a[3]}.png`,
  t: a => `/text/${a[2]}.png?color=${a[3]}`
};
