import { camelCase } from '../utils';

const getTypography = (layerName, stylesArtboard) => {
  const palette = { typography: {} };
  const paletteArtboard = stylesArtboard.filter((item) => {
    return item.name === layerName;
  })[0].children;

  paletteArtboard.map((item) => {
    if (item.type === 'COMPONENT') {
      const { name } = item;
      const { fontFamily, fontSize, lineHeightPx, fontWeight } = item.children[0].style;

      const typographyObj = {
        [camelCase(name)]: {
          fontFamily: { value: `'${fontFamily}'` },
          fontSize: { value: `${fontSize}px` },
          lineHeight: { value: `${Math.floor(lineHeightPx)}px` },
          fontWeight: { value: fontWeight },
        },
      };
      Object.assign(palette.typography, typographyObj);
    }
    return null;
  });
  return palette;
};

export default getTypography;
