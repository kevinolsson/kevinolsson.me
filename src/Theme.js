import { createMuiTheme } from '@material-ui/core/styles';

const scaffolding = createMuiTheme({
  spacing: 4
});

const palette = {
  portfolio: {
    pink: '#E556A2',
    green: '#48EC95',
    dark: '#453751',
    grey: '#A9A2AF'
  }
};

const typography = {
  h1: {
    fontFamily: 'Lora, serif',
    fontSize: '43.94px',
    lineHeight: '52px',
    fontWeight: 700,
    [scaffolding.breakpoints.up('md')]: {
      fontSize: '68.66px',
      lineHeight: '80px',
      fontWeight: 700
    }
  },
  h2: {
    fontFamily: 'Lora, serif',
    fontSize: '35.16px',
    lineHeight: '44px',
    fontWeight: 700,
    [scaffolding.breakpoints.up('md')]: {
      fontSize: '43.94px',
      lineHeight: '52px',
      fontWeight: 700
    }
  },
  h3: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '28.12px',
    lineHeight: '32px',
    fontWeight: 700,
    [scaffolding.breakpoints.up('md')]: {
      fontSize: '35.16px',
      lineHeight: '44px',
      fontWeight: 700
    }
  },
  h4: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '22.5px',
    lineHeight: '28px',
    fontWeight: 700,
    [scaffolding.breakpoints.up('md')]: {
      fontSize: '28.12px',
      lineHeight: '32px',
      fontWeight: 700
    }
  },
  h5: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '22.5px',
    lineHeight: '28px',
    fontWeight: 400,
    [scaffolding.breakpoints.up('md')]: {
      fontSize: '28.12px',
      lineHeight: '32px',
      fontWeight: 400
    }
  },
  body1: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14.4px',
    lineHeight: '24px',
    fontWeight: 400,
    [scaffolding.breakpoints.up('md')]: {
      fontSize: '18px',
      lineHeight: '32px',
      fontWeight: 400
    }
  },
  body2: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14.4px',
    lineHeight: '24px',
    fontWeight: 400,
    [scaffolding.breakpoints.up('md')]: {
      fontSize: '14.4x',
      lineHeight: '24px',
      fontWeight: 400
    }
  }
};

// eslint-disable-next-line array-callback-return
Object.keys(typography).map(key => {
  typography[key]['--webkit-font-smoothing'] = 'antialiased';
  typography[key].textRendering = 'optimizeLegibility';
  typography[key].transition = '0.2s ease-out all';
});

export const theme = createMuiTheme({
  spacing: 4,
  palette: {
    portfolio: palette.portfolio,
    common: {
      ...scaffolding.palette.common,
      transparentWhite: 'rgba(255,255,255,0.95)'
    },
    primary: {
      light: palette.portfolio.pink,
      main: palette.portfolio.pink,
      dark: palette.portfolio.pink,
      contrastText: palette.portfolio.dark
    }
  },
  typography: {
    ...scaffolding.typography,
    ...typography,
    fontFamily: 'Open Sans, sans-serif'
  },
  shape: {
    borderRadius: '3px'
  },
  overrides: {
    MuiTypography: {
      root: {
        color: palette.portfolio.dark
      },
      gutterBottom: {
        marginBottom: scaffolding.spacing(8)
      }
    }
  }
});
