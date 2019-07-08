import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function About({location}) {
  return (
    <Layout location={location} title="About me">
      <SEO title="Iʼm a frontend engineer." />
      <h1>Hi, Iʼm Eszter.</h1>
      <p>
        I’m a front-end engineer based in London, UK. Sometimes I write about CSS, loading speed, being a developer, or whatever comes to my mind.
      </p>
    </Layout>
  );
}
