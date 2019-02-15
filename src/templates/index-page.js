import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
/* import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll"; */

export const IndexPageTemplate = ({ title }) => (
  <div>
    <section className="hero is-primary is-medium is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">Hero subtitle</h2>
        </div>
      </div>
    </section>

    <main className="section">
      <div className="container">asd</div>
    </main>
  </div>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate title={frontmatter.title} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
