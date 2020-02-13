import React from 'react';
import styled from 'styled-components';
import { fonts, titleStyle } from './variables';

export const ArticleBody = styled.div`
  padding-bottom: 4em;

  > p:first-of-type:first-letter {
    font-size: 3.4em;
    line-height: 1;
    float: left;
    position: relative;
    margin-top: -4px;
    margin-right: 3px;

    @-moz-document url-prefix() {
      margin-top: 6px;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2em;
  }

  li {
    > p {
      margin: 0;
    }

    ul {
      margin-bottom: .5em;
    }
  }

  .gatsby-resp-image-wrapper {
    margin-left: 0 !important;
  }

  .gatsby-resp-image-link {
    border: none;

    &::after {
      display: none !important;
    }
  }

  hr {
    margin: 2.2em 0 2em;
    border: 0;
    height: 1px;
    background: #999;
  }

  .footnotes {
    font-size: 90%;

    li {
      margin-bottom: .5em;
    }

    hr {
      display: none;
    }

    p {
      display: inline;
    }
  }
`;

const StyledArticleTitle = styled.div`
  border-bottom: 5px solid ${props => props.theme.primary};
  margin-bottom: 20px;

  @media (min-width: 1100px) {
    width: 100vw;
  }

  h1 {
    ${titleStyle}
  }
`;

export const ArticleTitle = ({ children, ...rest }) => (
  <StyledArticleTitle {...rest}>
    <h1>{children}</h1>
  </StyledArticleTitle>
);

const StyledTimestamp = styled.div`
  opacity: .6;
  letter-spacing: .8px;
  font-size: 15px;
  margin-bottom: ${props => props.marginBottom || '2em'};
`;

export const Timestamp = ({ date, prefix, ...rest }) => (
  <StyledTimestamp {...rest}>
    {prefix} <time>{date}</time>
  </StyledTimestamp>
);

export const FooterNav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 1em;
  }

  a {
    text-decoration: none;
    color: inherit;
    border-bottom: 1px solid ${props => props.theme.primary} !important;

    &::after {
      display: none !important;
    }
  }
`;
