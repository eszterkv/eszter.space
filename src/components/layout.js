import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Sidebar from './sidebar';
import { SiteWrapper, lightTheme, darkTheme } from './styled';
import '../style/globals.scss';
import '../style/highlight.scss';

export default function Layout({children}) {
  const [lightsOff, setLightsOff] = useState(
    localStorage.getItem('espc_lights_off') || false
  );
  useEffect(insertScripts, []);
  useEffect(() => {
    updateBodyBg();
    localStorage.setItem('espc_lights_off', lightsOff);
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

  function updateBodyBg() {
    const theme = lightsOff ? darkTheme : lightTheme;
    document.getElementsByTagName('body')[0].style.background = theme.background;
  }

  return (
    <ThemeProvider theme={lightsOff ? darkTheme : lightTheme}>
      <SiteWrapper>
        <Sidebar setLightsOff={setLightsOff} lightsOff={lightsOff} />
        <main>{children}</main>
      </SiteWrapper>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
