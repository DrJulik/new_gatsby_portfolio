import React from "react"
import Image from "gatsby-image"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShareSquare } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add(fab)

const Project = ({ title, description, github, url, main_image, stack }) => {
  return (
    <article className="project">
      {main_image && (
        <Image
          fluid={main_image.childImageSharp.fluid}
          className="project-img"
        />
      )}
      <div className="project-info">
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(stack => {
            return <span key={stack.id}>{stack.stack_description}</span>
          })}
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              className="project-icon"
              icon={["fab", "github-square"]}
            />
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faShareSquare} className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
