import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function About({location}) {
  const profilepic = require('../../content/assets/IMG_4131.jpg');
  const intro = 'I’m Eszter, a front-end engineer based in London, UK. Sometimes I write about CSS, loading speed, being a developer, or whatever comes to my mind.';

  return (
    <Layout location={location} title="About me">
      <SEO title="Iʼm a frontend engineer." />
      <h1>Hi,</h1>
      <p>
        {intro}
      </p>
      <img
        src={profilepic}
        style={{marginTop: '16px', maxWidth: '400px', maxHeight: '40vh'}}
      />
    </Layout>
  );
}

About.propTypes = {
  location: PropTypes.object.isRequired,
};
