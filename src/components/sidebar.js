import React from 'react';
import { Link } from 'gatsby';

export default function Sidebar() {
  const links = [
    {href: '/', label: 'Articles'},
    {href: '/hi', label: 'About'},
    {href: '/now', label: 'Now'},
  ];
  return (
    <div className="sidebar">
      <h1 className="site-title">
        <Link to="/">
          Down the rabbithole
        </Link>
      </h1>
      <ul className="nav-list">
        {links.map(({href, label}) => (
          <li key={href}>
            <Link key={href} to={href}>{label}</Link>
          </li>
        ))}
      </ul>
      <h2>Get in touch</h2>
      <a className="email" href="mailto:ekov@pm.me">ekov@pm.me</a>
    </div>
  );
}
