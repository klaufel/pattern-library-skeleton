import tokens from './tokens';

const colors = {
  primary: {
    light: tokens.colors.primaryLight,
    main: tokens.colors.primaryMain,
    dark: tokens.colors.primaryDark,
  },
  neutral: {
    percent00: tokens.colors.neutral00,
    percent05: tokens.colors.neutral05,
    percent20: tokens.colors.neutral20,
    percent40: tokens.colors.neutral40,
    percent80: tokens.colors.neutral80,
  },
  alert: {
    success: tokens.colors.alertSuccess,
    warning: tokens.colors.alertWarning,
    error: tokens.colors.alertError,
  },
};

export default colors;
