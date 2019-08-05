import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from './variables';

export const Article = styled.article`
  max-width: 760px;

  img {
    max-width: 100%;
  }

  a {
    &:not(.footnote-ref):not(.footnote-backref) {
      border-bottom-color: transparent;
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
        border: 1px solid $accent;
        background: white;
        transition: background .3s ease;
      }

      &:hover,
      &:focus {
        border-bottom-color: ${colors.primary};

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
        color: ${colors.primary};
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

  .gatsby-resp-image-wrapper {
    margin-left: 0 !important;
  }
`;

const StyledArticleTitle = styled.div`
  border-bottom: 5px solid ${colors.primary};
  margin-bottom: 20px;

  @media (min-width: 1100px) {
    width: 100vw;
  }

  h1 {
    max-width: 760px;
    margin: 6px 0 30px;
    font-size: 40px;
    line-height: 1.2;
    font-family: ${fonts.title};

    @media (min-width: 900px) {
      font-size: 60px;
    }
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

export const Timestamp = ({date, ...rest}) => (
  <StyledTimestamp {...rest}>
    Written on <time>{date}</time>
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
    color: inherit;
  }
`;
