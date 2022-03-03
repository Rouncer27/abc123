/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1250,
          padding: `20px 16px`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            background: `#004565`,
            padding: "40px 20px 20px",
            marginBottom: `1.45rem`,
            textAlign: "center",
            color: "#fff",
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a style={{ color: "#fff" }} href="https://www.gatsbyjs.com">
            Gatsby
          </a>{" "}
          and some love too!
          <p>Hey, thanks for listening!</p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
