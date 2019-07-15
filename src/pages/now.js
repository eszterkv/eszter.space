import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Now({location}) {
  return (
    <Layout location={location} title="About me">
      <SEO title="Now: what Iʼm up to" />
      <h1>Now</h1>
      <p className="timestamp">
        Last updated: 10 July, 2019
      </p>
      <article>
        <p>
          <strong>In life</strong> I rediscovered the joy of preparing and eating simple and delicious food. Plus, Iʼve been watching lots of <a href="https://www.imdb.com/title/tt0098878/" target="_blank" rel="noopener noreferrer">Northern Exposure</a>.
        </p>
        <p>
          <strong>At work</strong> Iʼve been busy with Gatsby and Graphql. Iʼm also <a href="https://careers.fidel.uk/jobs/242473-front-end-engineer" target="_blank" rel="noopener noreferrer">looking for a frontend dev</a> (London/Lisbon, full time) to help me build <a href="https://fidel.uk" target="_blank" rel="noopener noreferrer">Fidel</a>ʼs tools for developers.
        </p>
      </article>
    </Layout>
  );
}
