import test from 'tape';

import format from '../format.js';
import fixtures from './fixtures/index.js';

test('format TopoMapsPlus', t => {
  const kml = format(fixtures.Simple, 'TopoMapsPlus');
  t.equal(typeof kml, 'string');
  t.ok(kml.length > 1000);
  t.end();
});
