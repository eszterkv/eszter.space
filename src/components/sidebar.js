import React from 'react';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

export default function Sidebar() {
  return (
    <div
      style={{
        position: 'sticky',
        float: 'left',
        marginTop: 0,
        top: rhythm(1.5),
        left: '-240px',
      }}
    >
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
        to="/"
      >
        Down the rabbithole
      </Link>
    </div>
  );
}
