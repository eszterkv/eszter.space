import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Article, ArticleBody, ArticleTitle, FooterNav, Timestamp } from '../components/styled';

export default function BlogPostTemplate({data, pageContext, location}) {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  useEffect(() => {
    if (post.frontmatter.script) {
      const script = document.createElement('script');
      script.src = `/scripts/${post.frontmatter.script}`;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <Layout
      location={location}
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    >
      <article>
        <ArticleTitle>
          {post.frontmatter.title}
        </ArticleTitle>
        <Timestamp date={post.frontmatter.date} />
        <ArticleBody dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <FooterNav>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </FooterNav>
    </Layout>
  );
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        script
      }
    }
  }
`;
