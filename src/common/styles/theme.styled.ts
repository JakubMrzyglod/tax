const size = {
  xs: '576px',
  sm: '768px',
  lg: '1200px',
};

const color = {
  main: { primary: 'red', secondary: 'green' },
};

export const styledTheme = {
  device: {
    xs: `@media screen and (min-width: ${size.xs})`,
    sm: `@media screen and (min-width: ${size.sm})`,
    lg: `@media screen and (min-width: ${size.lg})`,
  },
  color,
};
