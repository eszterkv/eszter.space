import React from 'react';
import styled from 'styled-components';
import { colors } from './variables';

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

  h2 {
    margin: 1.5em 0 .5em;
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
      color: #c22;
    }
  }
`;
