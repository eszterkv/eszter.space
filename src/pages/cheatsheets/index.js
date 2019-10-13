import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

import Layout from '../../components/layout';
import { Title } from '../../components/styled';

function Link({children, to, ...rest}) {
  return (
    <li>
      {to.match(/^https?:/)
        ? <a href={to} {...rest} target="_blank" rel="noopener noreferrer">{children}</a>
        : <GatsbyLink to={`/cheatsheets${to}`} {...rest}>{children}</GatsbyLink>
      }
    </li>
  );
}

export default function Cheatsheets() {
  return (
    <Layout title="Frontend cheat sheets" breadcrumbs={{path: 'cheatsheets'}}>
      <Title>Cheat sheets & stuff</Title>
      <LinkList>
        <Link to="/cli">Command line</Link> Bash and various CLI tools
        <Link to="/js">JavaScript</Link> (As in, I don’t know JS.)
        <Link to="/typography">Typography</Link> All the right spaces, hyphens and quotation marks
        <Link to="https://gist.github.com/c0derabbit">Gists</Link> Longer snippets of useful (and some not so useful) code
      </LinkList>
    </Layout>
  );
}

const LinkList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    font-weight: 600;

    &:not(:first-of-type) {
      margin-top: 1em;
    }
  }
`;
