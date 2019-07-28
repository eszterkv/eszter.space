import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function NotFoundPage({data, location}) {
  const siteTitle = data.site.siteMetadata.title;
  const img = require('../../static/notfound.png');

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not found" />
      <h1>Not found</h1>
      <p>But here are two rabbits.</p>
      <img src={img} style={{maxHeight: '44vh'}} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

NotFoundPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
