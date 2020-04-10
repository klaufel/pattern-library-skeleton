import tokens from '../../../tokens/json/breakpoint'

const layout = {
  grid: {
    width: tokens.breakpoint.xl.value,
    columns: 12,
    gutter: {
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '24px',
      xl: '24px'
    },
    margin: {
      xs: '16px',
      sm: '24px',
      md: '32px',
      lg: '32px',
      xl: '32px'
    }
  },
  breakpoints: {
    xs: tokens.breakpoint.xs.value,
    sm: tokens.breakpoint.sm.value,
    md: tokens.breakpoint.md.value,
    lg: tokens.breakpoint.lg.value,
    xl: tokens.breakpoint.xl.value
  }
}

export default layout
