import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import { Title } from '../components/styled';

export default function About() {
  const {profilePic} = useStaticQuery(imgQuery);
  const intro = 'I’m Eszter, a frontend developer based in London, UK.';

  return (
    <Layout title="About me">
      <Title>Hi,</Title>
      <p>
        {intro}
      </p>
      <Pic fixed={profilePic.childImageSharp.fixed} />
    </Layout>
  );
}

const Pic = styled(Img)`
  margin-top: 1em;
`;

const imgQuery = graphql`
  query {
    profilePic: file(relativePath: { eq: "e.jpg" }) {
      childImageSharp {
        fixed(
          width: 198,
          grayscale: true
        ) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;
