import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Title } from '../components/styled';

export default function Projects() {
  const projects = [
    {
      name: 'medict',
      link: 'https://medict.netlify.com',
      description: 'Minimalist dictionary using Merriam-Webster’s API. React, TypeScript, antd.',
      repo: 'medict',
    },
    {
      name: 'weathertop.now.sh',
      link: 'https://weathertop.now.sh',
      description: 'Yet another weather app. SSR using Next.js, TypeScript and styled-components.',
      repo: 'w2',
    },
  ];

  return (
    <Layout title="Projects">
      <Title>Projects</Title>
      <dl>
        {projects.map(({ name, link, description, repo }) => (
          <Project key={name}>
            <ProjectTitle>
              <a href={link}>{name}</a>
            </ProjectTitle>
            <dd>
              {description}<br />
              🐙 <code><a href={`https://github.com/c0derabbit/${repo}`}>c0derabbit/{repo}</a></code>
            </dd>
          </Project>
        ))}
      </dl>
    </Layout>
  );
}

const Project = styled.div`
  margin-bottom: 30px;
`;

const ProjectTitle = styled.h2`
  font-size: inherit;
  margin-bottom: 0;
`;
