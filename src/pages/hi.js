import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Title } from '../components/styled';

export default function About({location}) {
  const {profilePic} = useStaticQuery(imgQuery);
  const intro = 'I’m Eszter, a frontend engineer based in London, UK.';

  return (
    <Layout location={location} title="About me">
      <SEO title="Iʼm a frontend engineer." />
      <Title>Hi,</Title>
      <p>
        {intro}
      </p>
      <Pic fixed={profilePic.childImageSharp.fixed} />
    </Layout>
  );
}

About.propTypes = {
  location: PropTypes.object.isRequired,
};

const Pic = styled(Img)`
  margin-top: 1em;
`;

const imgQuery = graphql`
  query {
    profilePic: file(relativePath: { eq: "e.jpg" }) {
      childImageSharp {
        fixed(
          width: 199,
          duotone: {
            highlight: "#fdf1e5",
            shadow: "#111111"
          }
        ) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;
