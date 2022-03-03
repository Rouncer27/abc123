import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = props => {
  const imageDisplayOne = getImage(
    props.data.allImageSharp.edges[6].node.gatsbyImageData
  )

  const imageDisplayTwo = getImage(
    props.data.allImageSharp.edges[5].node.gatsbyImageData
  )
  const imageDisplayThree = getImage(
    props.data.allImageSharp.edges[4].node.gatsbyImageData
  )

  const imageDisplayFour = getImage(
    props.data.allImageSharp.edges[3].node.gatsbyImageData
  )

  const imageDisplayFive = getImage(
    props.data.allImageSharp.edges[2].node.gatsbyImageData
  )

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <h1>Hi ABC !!</h1>
        <p>Hope you are having an awesome breakfast!</p>
      </div>
      {/* <a href="https://switchbackcreative.ca/">
        <GatsbyImage
          image={imageDisplayOne}
          alt="Switchback Creative"
          formats={["auto", "webp", "avif"]}
          layout="fullWidth"
        />
        <GatsbyImage
          image={imageDisplayTwo}
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
        <GatsbyImage
          image={imageDisplayFour}
          alt="Switchback Creative"
          formats={["auto", "webp", "avif"]}
          layout="fullWidth"
        />
        <GatsbyImage
          image={imageDisplayFive}
          alt="Switchback Creative"
          formats={["auto", "webp", "avif"]}
          layout="fullWidth"
        />
      </a> */}
      <p style={{ textAlign: "center", fontSize: "9.5px" }}>
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
