import { css } from 'styled-components';

export const colors = {
  primary: '#111',
  accent: 'darkorange',
};

export const fonts = {
  title: 'Playfair Display',
};

export const sidebarSizes = {
  small: 220,
  default: 280,
};

export const titleStyle = css`
  max-width: 760px;
  margin: 6px 0 30px;
  font-size: 40px;
  line-height: 1.2;
  font-family: ${fonts.title};

  @media (min-width: 900px) {
    font-size: 60px;
  }
`;
