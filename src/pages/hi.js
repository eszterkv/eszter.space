import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function About({location}) {
  const profilepic = require('../../content/assets/IMG_4131.jpg');

  return (
    <Layout location={location} title="About me">
      <SEO title="Iʼm a frontend engineer." />
      <h1>Hi,</h1>
      <p>
        I’m Eszter, a front-end engineer based in London, UK. Sometimes I write about CSS, loading speed, being a developer, or whatever comes to my mind.
      </p>
      <img
        src={profilepic}
        style={{marginTop: '16px', maxWidth: '400px', maxHeight: '40vh'}}
      />
    </Layout>
  );
}
