import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { SiteTitle, Tooltip, TooltipTrigger } from './styled';
import { colors, sidebarSizes } from './styled/variables';

export default function Sidebar({lightsOff, setLightsOff}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copied, setCopied] = useState(false);

  const links = [
    {href: '/', label: 'Articles'},
    {href: '/kb', label: 'Cheat sheets'},
    {href: '/hi', label: 'About'},
    {href: '/now', label: 'Now'},
  ];

  function copyToClipboard() {
    const email = document.getElementById('email');
    email.select();
    document.execCommand('copy');
    setCopied(true);
  }

  return (
    <Sb>
      <SiteTitle>
        <Link to="/">
          Down the rabbithole
        </Link>
      </SiteTitle>
      <NavList>
        {links.map(({href, label}) => (
          <li key={href}>
            <Link key={href} to={href}>{label}</Link>
          </li>
        ))}
      </NavList>
      <h2>Get in touch</h2>
      <TooltipTrigger
        onMouseOver={() => setShowTooltip(true)}
        onMouseOut={() => {setCopied(false); setShowTooltip(false)}}
        onClick={copyToClipboard}
      >
        ekov@pm.me
      </TooltipTrigger>
      <input id="email" type="text" value="ekov@pm.me" readOnly />
      <TG>
        {showTooltip && (
          <CSSTransition key="tooltip" classNames="transition" timeout={300}>
            <Tooltip>{copied ? 'Copied 🚀' : 'Click to copy'}</Tooltip>
          </CSSTransition>
        )}
      </TG>
      <ThemeToggle onClick={() => setLightsOff(!lightsOff)}>
        <span>Turn lights {lightsOff ? 'on ' : 'off '}</span>
        <span id="bulb">💡</span>
      </ThemeToggle>
    </Sb>
  );
}

const Sb = styled.div`
  top: 20%;
  left: -${sidebarSizes.default}px;
  font-size: 14px;
  letter-spacing: .8px;
  font-weight: 400;

  h2 {
    display: none;
    font-size: 14px;
    margin-top: 2em;
  }

  @media (min-width: 720px) {
    float: left;
    position: sticky;
    text-align: right;

    h2 {
      display: block;
    }
  }
`;

const TG = styled(TransitionGroup)`
  height: 0;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: inline;
    margin-right: 1em;
    line-height: 1.8;

    @media (min-width: 720px) {
      display: block;
      margin-right: 0;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color .3s ease;

    &:hover,
    &:focus {
      border-bottom: 1px solid ${props => props.theme.primary};
    }
  }
`;

const ThemeToggle = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 30px;
  border: none;
  background: none;
  color: ${props => props.theme.primary};
  font-size: 12px;
  letter-spacing: .2px;
  cursor: pointer;

  @media (min-width: 720px) {
    top: calc(100% + 30px);
    right: -1em;
  }

  span:not(#bulb) {
    opacity: .5;
    transition: opacity .3s ease;
  }

  &:hover,
  &:focus {
    span:not(#bulb) {
      opacity: .84;
      transition: opacity .3s ease;
    }
  }
`;

Sidebar.propTypes = {
  lightsOff: PropTypes.bool.isRequired,
  setLightsOff: PropTypes.func.isRequired,
};
