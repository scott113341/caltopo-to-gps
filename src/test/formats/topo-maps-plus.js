import test from 'tape';

import format from '../../formats/topo-maps-plus.js';
import fixtures from '../fixtures/index.js';

test('format', t => {
  const kml = format(fixtures.Simple);
  t.equal(typeof kml, 'string');
  t.ok(kml.length > 1000);
  t.end();
});
