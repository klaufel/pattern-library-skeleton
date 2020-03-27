import { camelCase } from './utils';

const getTypography = (layerName, stylesArtboard) => {
  const palette = {};
  const paletteArtboard = stylesArtboard.filter((item) => {
    return item.name === layerName;
  })[0].children;

  paletteArtboard.map((item) => {
    if (item.type === 'COMPONENT') {
      const { name } = item;
      const { fontFamily, fontSize, lineHeightPx, fontWeight } = item.children[0].style;

      const typographyObj = {
        [camelCase(name)]: {
          fontFamily: fontFamily,
          fontSize: `${fontSize}px`,
          lineHeight: `${Math.floor(lineHeightPx)}px`,
          fontWeight: fontWeight,
        },
      };
      Object.assign(palette, typographyObj);
    }
    return null;
  });
  return palette;
};

export default getTypography;
