import React, { useState } from 'react';
import { Link } from 'gatsby';

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
      <input
        readonly
        id="email"
        type="text"
        value="ekov@pm.me"
        className="email"
        onMouseOver={() => setShowTooltip(true)}
        onMouseOut={() => {setCopied(false); setShowTooltip(false)}}
        onClick={copyToClipboard}
      />
      {showTooltip && (
        <div className="tooltip">
          {copied ? 'Copied 🚀' : 'Click to copy'}
        </div>
        )}
    </div>
  );
}
