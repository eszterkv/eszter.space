import React from 'react';

import Layout from '../components/layout';
import { Title } from '../components/styled';

export default function NotFoundPage() {
  const siteTitle = data.site.siteMetadata.title;
  const img = require('../../static/notfound.png');

  return (
    <Layout>
      <Title>Not found</Title>
      <p>But here are two rabbits.</p>
      <img src={img} style={{maxHeight: '44vh'}} />
    </Layout>
  );
}
