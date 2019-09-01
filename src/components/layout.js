import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Sidebar from './sidebar';
import SEO from './seo';
import { SiteWrapper, lightTheme, darkTheme } from './styled';
import '../style/globals.scss';
import '../style/highlight.scss';

export default function Layout({children, title}) {
  const [lightsOff, setLightsOff] = useState(areLightsOff());

  function areLightsOff() {
    return !!(typeof localStorage !== 'undefined' && localStorage.getItem('espc_lights_off'));
  }

  useEffect(() => {
    insertScripts();
    setLightsOff(areLightsOff());
  }, []);

  useEffect(() => {
    if (lightsOff)
      localStorage.setItem('espc_lights_off', 1);
    else
      localStorage.removeItem('espc_lights_off');
  }, [lightsOff]);

  function insertScripts() {
    const scripts = [
      '/scripts/blotter.min.js',
    ];

    scripts.forEach(scriptSrc => {
      const script = document.createElement('script');
      script.src = scriptSrc;
      document.body.appendChild(script);
    });
  }

  return (
    <ThemeProvider theme={lightsOff ? darkTheme : lightTheme}>
      <SiteWrapper>
        <SEO title={title} />
        <Sidebar setLightsOff={setLightsOff} lightsOff={lightsOff} />
        <main>{children}</main>
      </SiteWrapper>
    </ThemeProvider>
  );
}

Layout.defaultProps = {
  title: 'Down the rabbithole – World of a frontend dev'
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
};
