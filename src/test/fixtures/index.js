import fs from 'fs';
import path from 'path';

export const Simple = loadJson('F56K');

export default {
  Simple
};

function loadJson (file) {
  const filePath = path.resolve(__dirname, `${file}.json`);
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}
