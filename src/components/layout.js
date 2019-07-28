import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Sidebar from './sidebar';
import '../style/layout.scss';
import '../style/highlight.scss';

export default function Layout({children}) {
  useEffect(insertScripts, []);

  function insertScripts() {
    const scripts = [
      '/scripts/blotter.min.js',
    ];

    scripts.forEach(scriptSrc =>  {
      const script = document.createElement('script');
      script.src = scriptSrc;
      document.body.appendChild(script);
    });
  }

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
