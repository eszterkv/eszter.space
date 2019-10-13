import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/layout';
import { Title } from '../../components/styled';

export default function Typography() {
  return (
    <Layout title="JavaScript cheat sheet" breadcrumbs={{path: 'cheatsheets', sub: 'js'}}>
      <Title>JavaScript</Title>

      <h2>Objects</h2>
      <dl>
        <dt>Renaming a const while destructuring</dt>
        <dd>
          <pre>
            const officeDog = &#123;name: 'Lola', age: 10, type: 'labradoodle'&#125;;<br />
            const &#123;name, age, type: breed&#125; = officeDog;<br />
            <br />
            console.log(breed); // 'labradoodle'
          </pre>
        </dd>
      </dl>
    </Layout>
  );
}
