import tokens from './tokens';

const typography = {
  global: {
    family: "'Open Sans'",
  },
  heading: {
    big: {
      fontSize: tokens.typography.headingBig.fontSize,
      lineHeight: tokens.typography.headingBig.lineHeight,
      fontWeight: tokens.typography.headingBig.fontWeight,
    },
    normal: {
      fontSize: tokens.typography.headingNormal.fontSize,
      lineHeight: tokens.typography.headingNormal.lineHeight,
      fontWeight: tokens.typography.headingNormal.fontWeight,
    },
    small: {
      fontSize: tokens.typography.headingSmall.fontSize,
      lineHeight: tokens.typography.headingSmall.lineHeight,
      fontWeight: tokens.typography.headingSmall.fontWeight,
    },
  },
  body: {
    normal: {
      fontSize: tokens.typography.bodyNormal.fontSize,
      lineHeight: tokens.typography.bodyNormal.lineHeight,
    },
  },
};

export default typography;
