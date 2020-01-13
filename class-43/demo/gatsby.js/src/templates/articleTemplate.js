import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (

    <Layout>
      <SEO title="An article" />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <hr />
      <ul>
        <li><Link to="/">Go back to the homepage</Link></li>
        <li><Link to="/words/">See some words</Link></li>
        <li><Link to="/article/">Read an article</Link></li>
      </ul>
    </Layout>
  );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;
