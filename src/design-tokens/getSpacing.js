import { camelCase } from './utils';

const getSpacing = (layerName, stylesArtboard) => {
  const palette = {};
  const paletteArtboard = stylesArtboard.filter((item) => {
    return item.name === layerName;
  })[0].children;

  paletteArtboard.map((item) => {
    if (item.type === 'COMPONENT') {
      const { name, absoluteBoundingBox } = item;
      const spacingObj = {
        [camelCase(name)]: `${absoluteBoundingBox.width}px`,
      };
      Object.assign(palette, spacingObj);
    }
    return null;
  });
  return palette;
};

export default getSpacing;
