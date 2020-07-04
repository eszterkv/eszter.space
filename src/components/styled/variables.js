import { css } from 'styled-components';

export const colors = {
  primary: '#111',
  accent: 'darkorange',
  lightAccent: 'beige',
  grey: '#eee',
  invertedGrey: '#556',
  invertedBg: '#303436',
  invertedPrimary: '#f0f0f0',
  invertedLightAccent: '#40444a',
};

export const fonts = {
  title: 'Playfair Display',
};

export const sidebarSizes = {
  small: 220,
  default: 280,
};

export const titleStyle = css`
  max-width: 720px;
  margin: 6px 0 30px;
  font-size: 30px;
  line-height: 1.22;
  letter-spacing: .6px;
  font-family: ${fonts.title};

  @media (min-width: 900px) {
    font-size: 48px;
  }
`;
