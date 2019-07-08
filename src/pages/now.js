import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Now({location}) {
  return (
    <Layout location={location} title="About me">
      <SEO title="Now: what Iʼm up to" />
      <h1>Now</h1>
      <p>
        Loving Gatsby.
      </p>
    </Layout>
  );
}
