import { createMuiTheme } from '@material-ui/core/styles';

const scaffolding = createMuiTheme({});

const palette = {
  portfolio: {
    pink: '#E556A2',
    green: '#48EC95',
    dark: '#453751',
    grey: '#A9A2AF',
  },
};

const typography = {
  h1: {
    fontSize: '43.94px',
    lineHeight: '56px',
    fontWeight: 700,
    [scaffolding.breakpoints.up('md')]: {
      fontSize: '68.66px',
      lineHeight: '84px',
      fontWeight: 700,
    },
  },
  h2: {
    fontSize: '35.16px',
    lineHeight: '48px',
    fontWeight: 700,
    [scaffolding.breakpoints.up('md')]: {
      fontSize: '43.94px',
      lineHeight: '56px',
      fontWeight: 700,
    },
  },
  h3: {
    fontSize: '28.12px',
    lineHeight: '36px',
    fontWeight: 700,
    [scaffolding.breakpoints.up('md')]: {
      fontSize: '35.16px',
      lineHeight: '48px',
      fontWeight: 700,
    },
  },
  h4: {
    fontSize: '22.5px',
    lineHeight: '32px',
    fontWeight: 700,
    [scaffolding.breakpoints.up('md')]: {
      fontSize: '28.12px',
      lineHeight: '36px',
      fontWeight: 700,
    },
  },
  h5: {
    fontSize: '22.5px',
    lineHeight: '32px',
    fontWeight: 400,
    [scaffolding.breakpoints.up('md')]: {
      fontSize: '28.12px',
      lineHeight: '36px',
      fontWeight: 400,
    },
  },
  body1: {
    fontSize: '14.4px',
    lineHeight: '24px',
    fontWeight: 400,
    [scaffolding.breakpoints.up('md')]: {
      fontSize: '18px',
      lineHeight: '32px',
      fontWeight: 400,
    },
  },
};

// eslint-disable-next-line array-callback-return
Object.keys(typography).map((key) => {
  typography[key]['--webkit-font-smoothing'] = 'antialiased';
  typography[key].textRendering = 'optimizeLegibility';
  typography[key].fontFamily = 'Open Sans, sans-serif';
  typography[key].transition = '0.2s ease-out all';
});

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    portfolio: palette.portfolio,
    common: {
      ...scaffolding.palette.common,
      transparentWhite: 'rgba(255,255,255,0.95)',
    },
    primary: {
      light: palette.portfolio.pink,
      main: palette.portfolio.pink,
      dark: palette.portfolio.pink,
      contrastText: palette.portfolio.dark,
    },
  },
  typography: {
    ...scaffolding.typography,
    ...typography,
  },
  overrides: {
    MuiTypography: {
      root: {
        color: palette.portfolio.dark,
      },
    },
  },
});

export default theme;
