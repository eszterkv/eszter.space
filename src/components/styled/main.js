import React from 'react';
import styled from 'styled-components';
import { colors, fonts, titleStyle } from './variables';

export const Main = styled.main`
  max-width: 760px;
  position: relative;

  img {
    max-width: 100%;
  }

  dl {
    dd {
      margin-left: 0;
      margin-bottom: 10px;
    }
  }

  h1 {
    ${titleStyle}
  }

  h2,
  h3,
  h4 {
    margin: 1.5em 0 .5em;
  }

  h3,
  h4 {
    + p {
      margin-top: .5em;
    }
  }

  figcaption {
    font-size: 90%;
    opacity: .8;
  }

  sup {
    line-height: 1;
  }

  blockquote {
    font: 700 22px / 1.52 ${fonts.title};
    margin: 0;
    padding: 14px 18px;
    max-width: 660px;
    border-left: 6px solid ${colors.accent};
    background: ${props => props.theme.lightAccent};

    p {
      margin: 0;
    }
  }

  a {
    &:not(.footnote-ref):not(.footnote-backref):not(.example) {
      color: inherit;
      text-decoration: none;
      border-bottom: 1px dotted ${props => props.theme.midGrey};
      position: relative;
      transition: all .3s ease;

      &:hover,
      &:focus {
        border-bottom-color: ${props => props.theme.primary};
        background: ${props => props.theme.lightAccent};
      }
    }

    &.gatsby-resp-image-link {
      border-bottom: none !important;
    }

    &.footnote-ref,
    &.footnote-backref {
      margin-left: 2px;
      border: none;
      text-decoration: none;
      color: ${colors.accent};
      transition: color .3s ease;

      &:hover,
      &:focus {
        color: ${props => props.theme.primary};
      }
    }
  }

  h2 a {
    background: none;

    &:hover,
    &:focus {
      background: none !important;
    }
  }

  pre,
  code {
    color: ${props => props.theme.primary};
    background: ${props => props.theme.codeBg};
  }

  .token {
    &.punctuation {
      color: ${props => props.theme.primary};
    }

    &.property,
    &.tag,
    &.boolean,
    &.number,
    &.constant,
    &.symbol {
      color: ${props => props.theme.codeBoolNum};
    }

    &.keyword {
      color: ${props => props.theme.codeKeyword};
    }

    &.selector,
    &.attr-name,
    &.string,
    &.char,
    &.builtin,
    &.inserted {
      color: ${props => props.theme.codeString};
    }

    &.regex,
    &.important,
    &.variable {
      color: ${props => props.theme.codeVar};
    }

    &.function,
    &.class-name {
      color: ${props => props.theme.codeFn};
    }

    &.comment,
    &.prolog,
    &.doctype,
    &.cdata {
      color: ${props => props.theme.codeComment};
    }

    &.deleted {
      color: ${props => props.theme.codeDel};
      background: ${props => props.theme.codeDelBg};
    }

    &.inserted {
      color: ${props => props.theme.codeIns};
      background: ${props => props.theme.codeInsBg};
    }
  }
`;
