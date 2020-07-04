import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { SiteTitle } from './styled';
import { sidebarSizes } from './styled/variables';

export default function Sidebar() {
  const links = [
    { href: '/', label: 'Articles' },
    { href: '/projects', label: 'Projects' },
    { href: '/cheatsheets', label: 'Cheat sheets' },
    { href: '/hi', label: 'About' },
    { href: '/now', label: 'Now' },
  ];

  return (
    <Sb>
      <SiteTitle>
        <Link to="/">
          Down the rabbithole
        </Link>
      </SiteTitle>
      <NavList>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link key={href} to={href}>{label}</Link>
          </li>
        ))}
      </NavList>
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
