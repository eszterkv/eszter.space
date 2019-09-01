import styled from 'styled-components';
import { titleStyle } from './variables';

export const SiteTitle = styled.h1`
  font-size: 15px;
  margin: -2px 0 10px;

  a {
    color: inherit;
    border: none;
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  ${titleStyle}
`;
