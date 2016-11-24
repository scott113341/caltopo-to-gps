import formats from './formats/index.js';

export default function format (calTopoJson, outputApp) {
  const formatter = formats[outputApp];
  if (!formatter) throw Error(`Output app "${outputApp}" is unsupported.`);
  return formatter(calTopoJson);
}
