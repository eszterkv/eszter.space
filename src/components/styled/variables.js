import { css } from 'styled-components';

export const colors = {
  primary: '#111',
  accent: 'darkorange',
  lightAccent: 'beige',
  grey: '#eee',
  invertedGrey: '#445',
  invertedBg: '#202426',
  invertedPrimary: '#f0f0f0',
  invertedLightAccent: '#30343a',
};

export const fonts = {
  title: 'Playfair Display',
};

export const sidebarSizes = {
  small: 220,
  default: 280,
};

export const titleStyle = css`
  max-width: 780px;
  margin: 6px 0 30px;
  font-size: 40px;
  line-height: 1.2;
  font-family: ${fonts.title};

  @media (min-width: 900px) {
    font-size: 58px;
  }
`;
