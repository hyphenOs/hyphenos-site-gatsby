import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <footer>
        Created by {data.site.siteMetadata.title}. © {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
