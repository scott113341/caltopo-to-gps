import getJson from 'caltopo-json';
import fs from 'fs';

import format from './src/index.js';

(async () => {
  const json = await getJson('F56K');
  const kml = format(json, 'TopoMapsPlus');
  fs.writeFileSync('yolo.kml', kml);
})();
