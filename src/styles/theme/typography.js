import tokens from '../../../tokens/json/typography'

const typography = {
  global: {
    family: "'Open Sans'"
  },
  heading: {
    big: {
      fontSize: tokens.typography.headingBig.fontSize.value,
      lineHeight: tokens.typography.headingBig.lineHeight.value,
      fontWeight: tokens.typography.headingBig.fontWeight.value
    },
    normal: {
      fontSize: tokens.typography.headingNormal.fontSize.value,
      lineHeight: tokens.typography.headingNormal.lineHeight.value,
      fontWeight: tokens.typography.headingNormal.fontWeight.value
    },
    small: {
      fontSize: tokens.typography.headingSmall.fontSize.value,
      lineHeight: tokens.typography.headingSmall.lineHeight.value,
      fontWeight: tokens.typography.headingSmall.fontWeight.value
    }
  },
  body: {
    normal: {
      fontSize: tokens.typography.bodyNormal.fontSize.value,
      lineHeight: tokens.typography.bodyNormal.lineHeight.value
    }
  }
}

export default typography
