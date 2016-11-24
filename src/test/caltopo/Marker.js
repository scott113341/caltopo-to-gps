import test from 'tape';

import Marker from '../../caltopo/Marker.js';
import fixtures from '../fixtures/index.js';

test('Marker#constructor', t => {
  const data = fixtures.Simple.Marker[0];
  const marker = new Marker(data);
  t.deepEqual(marker.config, data);
  t.deepEqual(marker.name, 'red');
  t.deepEqual(marker.comments, 'commentz');
  t.deepEqual(marker.updated, 1479952049000);
  t.equal(typeof marker.icon, 'function');
  t.equal(typeof marker.coordinates, 'function');
  t.end();
});

test('Marker#coordinates', t => {
  const marker = new Marker(fixtures.Simple.Marker[0]);
  t.deepEqual(marker.coordinates(), [39.46486419970058, -106.64050943389896]);
  t.end();
});

test('Marker#icon', t => {
  const marker = new Marker(fixtures.Simple.Marker[0]);
  t.equal(marker.icon(), 'https://caltopo.com/resource/imagery/icons/circle/FF0000.png');
  t.end();
});

test('Marker.iconFor', t => {
  const base = 'https://caltopo.com/resource/imagery/icons';
  t.equal(Marker.iconFor('#FF0000'), `${base}/circle/FF0000.png`);
  t.equal(Marker.iconFor('https://s3-us-west-2.amazonaws.com/gp.us.waypointicons/waypointTrailer.png'), 'https://s3-us-west-2.amazonaws.com/gp.us.waypointicons/waypointTrailer.png');
  t.equal(Marker.iconFor('c:target,0000FF'), `${base}/target/0000FF.png`);
  t.equal(Marker.iconFor('c:ring,0000FF'), `${base}/ring/0000FF.png`);
  t.equal(Marker.iconFor('t:GG,00CD00'), `${base}/text/GG.png?color=00CD00`);
  t.equal(Marker.iconFor('xc'), 'https://s3-us-west-1.amazonaws.com/caltopo/static/images/icons/xc.png');
  t.end();
});
