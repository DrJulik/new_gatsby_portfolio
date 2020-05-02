import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const fluid = image.node.childImageSharp.fluid
      return <Img alt={props.alt} fluid={fluid} />
    }}
  />
)

export default Image
