import { camelCase } from './utils';

const trim = str => str.replace(/^\s+|\s+$/gm, '');

const rgbaGen = (r, g, b, a) => {
  const getColor = color => {
    return Math.round(color * 255);
  };
  return `rgba(${getColor(r)}, ${getColor(g)}, ${getColor(b)}, ${a})`;
};

const rgbaToHex = rgba => {
  const parts = rgba.substring(rgba.indexOf('(')).split(',');
  const r = parseInt(trim(parts[0].substring(1)), 10);
  const g = parseInt(trim(parts[1]), 10);
  const b = parseInt(trim(parts[2]), 10);
  const a = parseFloat(trim(parts[3].substring(0, parts[3].length - 1))).toFixed(2);
  return (
    '#' +
    r.toString(16) +
    g.toString(16) +
    b.toString(16) +
    (a * 255).toString(16)
  ).substring(0, 7);
};

const getColors = (layerName, stylesArtboard) => {
  const palette = {};
  const paletteArtboard = stylesArtboard.filter(item => {
    return item.name === layerName;
  })[0].children;

  paletteArtboard.map(item => {
    if (item.type === 'COMPONENT') {
      const { r, g, b, a } = item.children[0].fills[0].color;

      const colorObj = {
        [camelCase(item.name)]: `${rgbaToHex(rgbaGen(r, g, b, a))}`,
      };

      Object.assign(palette, colorObj);
    }
    return null;
  });
  return palette;
};

export default getColors;
