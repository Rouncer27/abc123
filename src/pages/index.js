import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import logo from "../logos/image-06.png"

const IndexPage = props => {
  console.log(" props.data.allImageSharp", props.data.allImageSharp)
  const imageDisplayOne = getImage(
    props.data.allImageSharp.edges[3].node.gatsbyImageData
  )

  const imageDisplayTwo = getImage(
    props.data.allImageSharp.edges[2].node.gatsbyImageData
  )
  const imageDisplayThree = getImage(
    props.data.allImageSharp.edges[1].node.gatsbyImageData
  )

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <img
          style={{
            textAlign: "center",
            margin: "20px auto",
            maxWidth: "225px",
          }}
          src={logo}
          alt="Switchback Creative"
        />
        <h1>Hi ABC !!</h1>
        <p>Hope you are having an awesome breakfast!</p>
      </div>
      <a href="https://switchbackcreative.ca/">
        <GatsbyImage
          image={imageDisplayTwo}
          alt="Switchback Creative"
          formats={["auto", "webp", "avif"]}
          layout="fullWidth"
        />
        <GatsbyImage
          image={imageDisplayOne}
          alt="Switchback Creative"
          formats={["auto", "webp", "avif"]}
          layout="fullWidth"
        />
        <GatsbyImage
          image={imageDisplayThree}
          alt="Switchback Creative"
          formats={["auto", "webp", "avif"]}
          layout="fullWidth"
        />
      </a>
      <p style={{ margin: "35px auto", textAlign: "center", fontSize: "11px" }}>
        😙😙😙😙 👋👋👋👋 Hi Gary from your bud, Trevor 👋👋👋👋 😙😙😙😙
      </p>
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    allImageSharp {
      edges {
        node {
          id
          gatsbyImageData(width: 2000)
        }
      }
    }
  }
`

export default IndexPage
