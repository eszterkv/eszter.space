import styled from 'styled-components';
import { sidebarSizes } from './variables';

const baseFont = '17px \'Helvetica Neue\', \'Helvetica\', sans-serif';
const siteWidth = 1100;

const SiteWrapper = styled.div`
  min-height: 100vh;
  padding: 20px 20px 80px;
  color: ${props => props.theme.primary};
  background: ${props => props.theme.background};
  font: ${baseFont};
  letter-spacing: .2px;
  line-height: 1.55;

  @media (min-width: ${siteWidth + 40}px) {
    padding: 20px calc(50vw - ${siteWidth / 2}px) 80px;
  }

  main {
    padding-top: 25px;
    overflow: visible;

    @media (min-width: 720px) {
      padding-top: 90px;
      padding-left: ${sidebarSizes.small}px;
    }

    @media (min-width: 900px) {
      padding-left: ${sidebarSizes.default}px;
    }
  }

  em {
    font-family: 'Georgia', serif;
  }
`;

export default SiteWrapper;
