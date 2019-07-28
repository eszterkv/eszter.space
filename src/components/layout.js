import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from './sidebar';
import '../style/layout.scss';
import '../style/highlight.scss';

export default function Layout({children}) {
  return (
    <div className="site">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
