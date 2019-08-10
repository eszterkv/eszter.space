import styled from 'styled-components';
import { colors, sidebarSizes } from './variables';

const baseFont = '17px \'Helvetica Neue\', \'Helvetica\', sans-serif';
const siteWidth = 1100;

const SiteWrapper = styled.div`
  min-height: calc(100vh - 110px);
  max-width: ${siteWidth}px;
  margin: 0 auto;
  padding: 0;
  color: ${props => props.theme.primary};
  font: ${baseFont};
  letter-spacing: .2px;
  line-height: 1.55;

  main {
    padding-top: 25px;
    overflow: visible;

    @media (min-width: 720px) {
      margin-top: 65px;
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

SiteWrapper.defaultProps = {
  theme: {
    primary: colors.primary,
  },
};

export default SiteWrapper;
