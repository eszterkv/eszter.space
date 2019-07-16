import React from 'react';
import { Link } from 'gatsby';

import Sidebar from './sidebar';
import '../style/layout.scss';
import '../style/highlight.scss';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <div className="site">
        <Sidebar />
        <main>{children}</main>
      </div>
    );
  }
}

export default Layout;
