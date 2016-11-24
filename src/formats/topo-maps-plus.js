import Marker from '../caltopo/Marker.js';

class Style {
  constructor (id, iconUrl) {
    this.id = id;
    this.url = iconUrl;
  }
}

function stylesFrom (markers) {
  const styles = new Map();
  markers.forEach((marker, i) => {
    const icon = marker.icon();
    if (styles.has(icon)) return;
    styles.set(icon, new Style(`style${i}`, marker.icon()));
  });
  return styles;
}

export default function format (calTopoJson) {
  const markers = calTopoJson.Marker.map(m => new Marker(m));
  const styles = stylesFrom(markers);

  return `
<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    ${Array.from(styles.values()).map(style).join('')}
    ${markers.map(m => placemark(m, styles)).join('')}
  </Document>
</kml>`.trim();
}


function style (style) {
  return `
    <Style id="${style.id}">
      <IconStyle>
        <Icon>
          <href>${style.url}</href>
        </Icon>
      </IconStyle>
    </Style>
  `;
}

function placemark (marker, styles) {
  return `
    <Placemark>
      <name>${marker.name}</name>
      <styleUrl>${styles.get(marker.icon()).id}</styleUrl>
      <Point>
        <coordinates>${[...marker.coordinates()].reverse().join(',')}</coordinates>
      </Point>
    </Placemark>  
  `;
}
