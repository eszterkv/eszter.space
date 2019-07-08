import Typography from 'typography';

const black = '#111';
const accent = 'blue';

const theme = {
  title: 'cr',
  baseFontSize: '18px',
  baseLineHeight: 1.58,
  headerLineHeight: 1.2,
  scaleRatio: 2.2,
  headerFontFamily: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
  headerColor: 'inherit',
  bodyWeight: 400,
  boldWeight: 600,
  blockMarginBottom: 1,
  includeNormalize: true,
  overrideStyles: ({ rhythm }) => ({
    body: {
      letterSpacing: '.2px',
      color: black,
    },
    'h1, h2, h3, h4, h5, h6': {
      marginTop: rhythm(1.5),
    },
    h1: {
      fontWeight: 400,
    },
    p: {
      marginTop: rhythm(.75),
      marginBottom: rhythm(.75),
    },
    li: {
      marginTop: rhythm(.15),
      marginBottom: rhythm(.15),
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
      transition: 'color .2s ease',
    },
    'a:hover, a:active': {
      color: accent,
    },
  }),
};

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production')
  typography.injectStyles();

export default typography;
export const {rhythm} = typography;
export const {scale} = typography;
