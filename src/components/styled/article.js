import React from 'react';
import styled from 'styled-components';
import { colors, fonts, titleStyle } from './variables';

export const Article = styled.article`
  max-width: 760px;

  img {
    max-width: 100%;
  }

  a {
    &:not(.footnote-ref):not(.footnote-backref):not(.example) {
      color: inherit;
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: border-bottom-color .3s ease;
      position: relative;
      padding-right: 3px;

      &::after {
        content: '';
        position: relative;
        top: -.5em;
        left: 3px;
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        border: 1px solid ${colors.accent};
        background: ${props => props.theme.background};
        transition: background .3s ease;
      }

      &:hover,
      &:focus {
        border-bottom-color: ${props => props.theme.primary};
        transition: border-bottom-color .3s ease;

        &::after {
          background: ${colors.accent};
        }
      }
    }

    &.footnote-ref,
    &.footnote-backref {
      margin-left: 2px;
      border: none;
      color: ${colors.accent};
      transition: color .3s ease;

      &:hover,
      &:focus {
        color: ${props => props.theme.primary};
      }
    }
  }
`;

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

export const ArticleTitle = ({children, ...rest}) => (
  <StyledArticleTitle {...rest}>
    <h1>{children}</h1>
  </StyledArticleTitle>
);

const StyledTimestamp = styled.div`
  font-family: ${fonts.title};
  font-style: italic;
  opacity: .6;
  font-weight: 300;
  margin-bottom: 2em;
`;

export const Timestamp = ({date, prefix, ...rest}) => (
  <StyledTimestamp {...rest}>
    {prefix || 'Written on'} <time>{date}</time>
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
    border-bottom: 1px solid ${props => props.theme.primary};
  }
`;
