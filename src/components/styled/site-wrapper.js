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
  transition: background .6s ease;

  @media (min-width: ${siteWidth + 40}px) {
    padding: 20px calc(50vw - ${siteWidth / 2}px) 80px;
  }

  main {
    margin-top: 25px;
    overflow: visible;

    @media (min-width: 720px) {
      margin-top: 90px;
      margin-left: ${sidebarSizes.small}px;
    }

    @media (min-width: 900px) {
      margin-left: ${sidebarSizes.default}px;
    }
  }

  em {
    font-family: 'Georgia', serif;
  }
`;

export default SiteWrapper;
