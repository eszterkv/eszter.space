import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

export default function About() {
  const { profilePic } = useStaticQuery(imgQuery);

  return (
    <Layout title="About me">
      <h1>Hi,</h1>
      <p>
        I’m Eszter, a frontend developer based in Scotland. I believe that form follows function, fast is accessible, and simple is beautiful. Sometimes I yap about something called <em>usability</em>.
      </p>
      <p>
        When I’m not coding, I’m probably drinking coffee, watering plants, or learning how to longboard.
      </p>
      <p>
        Say hi at <code>ekov@pm.me</code>.
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
    profilePic: file(relativePath: { eq: "e2.jpg" }) {
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
