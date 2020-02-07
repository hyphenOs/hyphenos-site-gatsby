import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blogs</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.fields.slug}>
            <Link
              className={blogStyles.blogItem}
              to={`/blog/${edge.node.fields.slug}`}
            >
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>
            <p>{edge.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
