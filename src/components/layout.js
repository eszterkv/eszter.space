import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Sidebar from './sidebar';
import { SiteWrapper } from './styled';
import '../style/globals.scss';
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
    <SiteWrapper>
      <Sidebar />
      <main>{children}</main>
    </SiteWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
