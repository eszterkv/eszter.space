import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Title } from '../components/styled';

export default function About({location}) {
  const profilepic = require('../../content/assets/IMG_4131.jpg');
  const intro = 'I’m Eszter, a front-end engineer based in London, UK.';

  return (
    <Layout location={location} title="About me">
      <SEO title="Iʼm a frontend engineer." />
      <Title>Hi,</Title>
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
