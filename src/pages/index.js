import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// index.js
import React from "react";
import { graphql } from "gatsby";
import { get } from "lodash"; // Optional

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Noon</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

// Item Component
const Item = ({title, imageSrc}) => (
  <div>
    <h1>{title}</h1>
    <img src={imageSrc} alt={title} />
  </div>
)

// Index Page Component
const IndexPage = ({ data }) => {
  const nodes = get(data, "allGoogleSheetProjectsRow.edges", [])

  return (<div>{nodes.map(node => <Item key={node.id} {...node} />)}</div>)
}

export default IndexPage;

// GraphQL query to our spreadsheet
export const query = graphql`
  query {
    allGoogleSheetProjectsRow {
      edges {
        node {
          id
          title
          imageSrc
        }
      }
    }
  }
`;
