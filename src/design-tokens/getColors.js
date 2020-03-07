import { camelCase } from './utils';

const trim = str => str.replace(/^\s+|\s+$/gm, '');

const rgbaGen = (r, g, b, a) => {
  const getColor = color => {
    return Math.round(color * 255);
  };
  return `rgba(${getColor(r)}, ${getColor(g)}, ${getColor(b)}, ${a})`;
};

const rgbaGenObject = (r, g, b, a) => {
  const getColor = color => {
    return Math.round(color * 255);
  };
  return { r: getColor(r), g: getColor(g), b: getColor(b), a: a };
};

const rgbGen = (r, g, b) => {
  const getColor = color => {
    return Math.round(color * 255);
  };
  return `rgba(${getColor(r)}, ${getColor(g)}, ${getColor(b)})`;
};

const rgbToHex = rgb => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
};

const fullColorHex = (r, g, b) => {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return `#${red + green + blue}`;
};

const getColors = (layerName, stylesArtboard) => {
  const palette = {};
  const paletteArtboard = stylesArtboard.filter(item => {
    return item.name === layerName;
  })[0].children;

  paletteArtboard.map(item => {
    if (item.type === 'COMPONENT') {
      const { r, g, b, a } = item.children[0].fills[0].color;
      const colorRGBA = rgbaGenObject(r, g, b, a);
      const colorObj = {
        [camelCase(item.name)]: `${fullColorHex(colorRGBA.r, colorRGBA.g, colorRGBA.b)}`,
      };

      Object.assign(palette, colorObj);
    }
    return null;
  });
  return palette;
};

export default getColors;
