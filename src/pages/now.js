import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { SplitColorChannelText } from 'react-text-fun';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Article, Timestamp, Title } from '../components/styled';

export default function Now() {
  const [blotterLoaded, setBlotterLoaded] = useState(false);
  const [blotterPos, setBlotterPos] = useState({x: 0, y: 0});
  const [rgbOffset, setRgbOffset] = useState(0);

  useEffect(() => {
    if (!blotterLoaded)
      checkBlotterLoaded();
  }, []);

  useEffect(() => {
    if (blotterLoaded)
      window.addEventListener('mousemove', e => animateText(e));

    return window.removeEventListener('mousemove', e => animateText(e));
  }, [blotterLoaded]);

  function checkBlotterLoaded() {
    if (typeof window.Blotter !== 'undefined')
      setBlotterLoaded(true);
    else
      window.setTimeout(checkBlotterLoaded, 100);
  }

  function animateText(e) {
    const { clientX, clientY } = e;
    let { x, y } = blotterPos;
    if (!x || !y) {
      const blotterEl = document.getElementById('blotter');
      if (blotterEl) {
        const rect = blotterEl.getBoundingClientRect();
        ({ x, y } = rect);
        setBlotterPos({ x, y });
      }
    }

    if (x && y) {
      const offset = calculateOffset({ x, y, clientX, clientY });
      setRgbOffset(offset);
    }
  }

  function calculateOffset({ x, y, clientX, clientY }) {
    const dist = Math.abs(x - clientX) + Math.abs(y - clientY) / 2;
    return Math.min(0.046, dist * .0001);
  }

  return (
    <Layout title="Now: what Iʼm up to">
      <Title style={{ position: 'relative' }}>
        Now
        {blotterLoaded && (
          <Blotter id="blotter">
            <SplitColorChannelText
              text="Now"
              fill="#111"
              fontFamily="Playfair Display"
              fontWeight={700}
              fontSize={60}
              rgbOffset={rgbOffset}
              addBlur
              addNoise
            />
          </Blotter>
        )}
      </Title>
      <Timestamp prefix="Last updated:" date="27 January, 2020 (OMG It’s the future!)" />
      <p>
        <strong>In life</strong> I rediscovered the joy of preparing and eating simple and delicious food. Plus, Iʼve been watching lots of <a href="https://www.imdb.com/title/tt0098878/" target="_blank" rel="noopener noreferrer">Northern Exposure</a>. I also nurture an ever-growing collection of unfinished projects exploring server-side rendering, Electron, HTML canvas, Chrome extensions etc.
      </p>
      <p>
        <strong>At work</strong> Iʼve been busy with React and Gatsby. We’re hiring <a href="https://careers.fidel.uk/jobs/242473-front-end-engineer" target="_blank" rel="noopener noreferrer">frontend devs</a> in Lisbon!
      </p>
    </Layout>
  );
}

const fadeIn = keyframes`
  from {
    background: transparent;
  }

  to {
    background: white;
  }
`;

const Blotter = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: ${props => props.theme.background === 'white' ? 'inline-block' : 'none'};
    position: absolute;
    top: -1px;
    left: 0;
    background: white;
    width: 200%;
    animation: ${fadeIn} .6s linear;
    top: -2px;
  }
`;
