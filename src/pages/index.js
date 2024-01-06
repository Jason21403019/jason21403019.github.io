import React from "react"
import { Link, graphql } from "gatsby"
import But from "../components/But"
import "../styles/style.css"

export default ({ data }) => (
  <div>
    <h1 className="blog_title">My Blog</h1>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.fields.slug}>
            {node.frontmatter.title} - {node.frontmatter.date}
          </Link>
        </li>
      ))}
    </ul>
    <h2>Public Files</h2>
    <ul>
      {data.allFile.nodes.map(file => (
        <li key={file.name}>
          <a href={file.publicURL} target="_blank" rel="noopener noreferrer">
            {file.name}
          </a>
        </li>
      ))}
    </ul>
    <But />
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "public" } }) {
      nodes {
        name
        publicURL
      }
    }
  }
`
