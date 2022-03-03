import * as React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#35C567`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, textAlign: "center" }}>
        <a
          href="https://switchbackcreative.ca/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </a>
      </h1>
    </div>
  </header>
)

export default Header
