import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/layout';
import { Title, ArticleBody } from '../../components/styled';

export default function Typography() {
  return (
    <Layout title="Typography cheat sheet" breadcrumbs={{path: 'cheatsheets', sub: 'typography'}}>
      <Title>Punctuation</Title>

      <p>
        Using the standard characters our keyboard types is sometimes not good enough.
        <sup id="fnref-1">
          <a className="footnote-ref" href="#fn-1">1</a>
        </sup>
        <br />
        Here are some better alternatives.
      </p>

      <h2>Quotes, ellipses, dashes</h2>
      <dl>
        <dt>‘single quotes’</dt>
        <dd>option + shift + ]</dd>
        <dt>“double quotes”</dt><dd>option + shift + [</dd>
        <dt>ellipses…</dt><dd>option + ;</dd>
        <dt>en–dash</dt><dd>option + -</dd>
        <dt>em—dash</dt><dd>option + shift + -</dd>
        <dt>non-breaking hyphen</dt><dd>&#8209;</dd>
      </dl>

      <h2>Spaces</h2>
      <dl>
        <dt>Hair space</dt>
        <dt>Six-per-em space</dt>
        <dt>Thin space</dt>
        <dt>Four-per-em space</dt>
        <dt>Mathematical space</dt>
        <dt>Punctuation space</dt>
        <dt>Three-per-em space</dt>
        <dt>En space</dt>
        <dt>Ideographic　space</dt>
        <dt>Em space</dt>
        <dt>Narrow no-break space</dt>
        <dt>No-break space</dt>
        <dt>Figure space</dt>
        <dt>Zero-width space</dt>
        <dt>Zero-width non-joiner</dt><dd>& #8204 ; & zwnj ;</dd>
      </dl>

      <ArticleBody>
        <hr />

        <div className="footnotes">
          <p id="fn-1">
            For more info on correct punctuation, read{' '}
            <a href="http://practicaltypography.com/type-composition.html" target="_blank">
              Butterick’s Practical Typograhpy
            </a>
            .{' '}
            <a className="footnote-backref" href="#fnref-1">
              ↩
            </a>
          </p>
        </div>
      </ArticleBody>
    </Layout>
  );
}
