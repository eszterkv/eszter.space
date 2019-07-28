import React, { useState } from 'react';
import { Link } from 'gatsby';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function Sidebar() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copied, setCopied] = useState(false);

  const links = [
    {href: '/', label: 'Articles'},
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
      <span
        className="email"
        onMouseOver={() => setShowTooltip(true)}
        onMouseOut={() => {setCopied(false); setShowTooltip(false)}}
        onClick={copyToClipboard}
      >
        ekov@pm.me
      </span>
      <input
        className="hidden"
        id="email"
        type="text"
        value="ekov@pm.me"
      />
      <TransitionGroup>
        {showTooltip && (
          <CSSTransition key="tooltip" classNames="transition" timeout={300}>
            <div className="tooltip">
              {copied ? 'Copied 🚀' : 'Click to copy'}
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}
