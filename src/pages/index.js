import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

export default function Index({ data }) {
  const { posts } = data.allMarkdownRemark;

  return (
    <Layout>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <ArticleListItem key={node.fields.slug}>
            <ArticleListItemTitle>
              <Link to={node.fields.slug}>
                {title}
              </Link>
            </ArticleListItemTitle>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </ArticleListItem>
        );
      })}
    </Layout>
  );
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

const ArticleListItem = styled.div`
  margin-bottom: 30px;
`;

const ArticleListItemTitle = styled.h2`
  margin-bottom: 0;
  font-size: 20px;

  a {
    border: none !important;
    color: inherit;
    text-decoration: none;

    &::after {
      display: none !important;
    }
  }

  + * {
    margin-top: .33em;
  }

`;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      posts: edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
