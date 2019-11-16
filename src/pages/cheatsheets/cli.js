import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/layout';
import { Title } from '../../components/styled';

export default function Typography() {
  return (
    <Layout title="Typography cheat sheet" breadcrumbs={{path: 'cheatsheets', sub: 'cli'}}>
      <Title>Command line</Title>

      <h2>Bash</h2>
      <dl>
        <dt>What’s running on port 3000?</dt>
        <dd><code>lsof -i :3000</code></dd>

        <dt>What’s eating my memory?</dt>
        <dd><code>top -o MEM</code></dd>

        <dt>Create an SSH key for GitHub</dt>
        <dd><code>ssh-keygen -t rsa -C "your.email.used.on.github@example.com"</code></dd>
      </dl>

      <h2>AWS</h2>
      <small>You’ll need <a href="https://aws.amazon.com/cli/" rel="noopener noreferrer" target="_blank">awscli</a> for these.</small>
      <dl>
        <dt>Deploy a static site to s3</dt>
        <dd><code>aws s3 sync ./dist s3://my-repo --delete</code></dd>
        <dt>Invalidate Cloudfront cache</dt>
        <dd><code>aws cloudfront create-invalidation --distribution-id myDistributionId --paths '/*'</code></dd>
      </dl>

      <h2>Image manipulation</h2>
      <small>
        Tools: <a href="https://imagemagick.org/script/download.php" rel="noopener noreferrer" target="_blank">
          imagemagick
        </a> and ffmpeg (<code>brew install ffmpeg</code>).
      </small>
      <dl>
        <dt>Create a favicon</dt>
        <dd><code>magick input.png -resize 32x32 favicon.ico</code></dd>
        <dt>Extract first frame of a video to image</dt>
        <dd><code>ffmpeg -i input.mp4 -vframes 1 output.png</code></dd>
      </dl>

      <h2>Fun stuff</h2>
      <dl>
        <dt>Check what time it is</dt>
        <dd><code>date</code></dd>

        <dt>Check the weather</dt>
        <dd><code>curl wttr.in/yourLocation</code></dd>
      </dl>
    </Layout>
  );
}
