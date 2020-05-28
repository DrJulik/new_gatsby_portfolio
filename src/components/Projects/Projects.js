import React from "react"
import Project from "./Project"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiProject(sort: { fields: created_at, order: DESC }) {
      nodes {
        description
        title
        id
        github
        dribbble
        stack {
          id
          stack_description
        }

        main_image {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        url
      }
    }
  }
`

const Projects = () => {
  const {
    allStrapiProject: { nodes: projects },
  } = useStaticQuery(query)

  return (
    <>
      {projects.map(project => {
        return <Project key={project.id} {...project} />
      })}
    </>
  )
}

export default Projects
