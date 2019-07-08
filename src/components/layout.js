import React from 'react';
import { Link } from 'gatsby';

import Sidebar from './sidebar';
import { rhythm } from '../utils/typography';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(40),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Sidebar />
        <main style={{paddingLeft: '240px'}}>{children}</main>
      </div>
    );
  }
}

export default Layout;
