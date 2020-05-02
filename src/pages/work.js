import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/Image"

const about = () => {
  return (
    <Layout>
      <SEO title="Work" />
      <div className="work-container">
        <h1 className="page-title">My Projects</h1>
        <div className="project-container">
          <Image
            filename="projects/paintersdepot.jpg"
            alt="my face"
            className="project-image"
          />
          <div className="description-box">
            <h2>This is project title</h2>
            <p>
              This is project description. It could be really long so I have to
              deal with that
            </p>
          </div>
        </div>
        <div className="project-container-reversed">
          <div className="description-box">
            <h2>This is project title</h2>
            <p>
              This is project description. It could be really long so I have to
              deal with that
            </p>
          </div>
          <Image
            filename="projects/paintersdepot.jpg"
            alt="my face"
            className="project-image"
          />
        </div>
        <div className="project-container">
          <Image
            filename="projects/paintersdepot.jpg"
            alt="my face"
            className="project-image"
          />
          <div className="description-box">
            <h2>This is project title</h2>
            <p>
              This is project description. It could be really long so I have to
              deal with that
            </p>
          </div>
        </div>
        <div className="project-container-reversed">
          <div className="description-box">
            <h2>This is project title</h2>
            <p>
              This is project description. It could be really long so I have to
              deal with that
            </p>
          </div>
          <Image
            filename="projects/paintersdepot.jpg"
            alt="my face"
            className="project-image"
          />
        </div>
        <div className="project-container">
          <Image
            filename="projects/paintersdepot.jpg"
            alt="my face"
            className="project-image"
          />
          <div className="description-box">
            <h2>This is project title</h2>
            <p>
              This is project description. It could be really long so I have to
              deal with that
            </p>
          </div>
        </div>
        <div className="project-container-reversed">
          <div className="description-box">
            <h2>This is project title</h2>
            <p>
              This is project description. It could be really long so I have to
              deal with that
            </p>
          </div>
          <Image
            filename="projects/paintersdepot.jpg"
            alt="my face"
            className="project-image"
          />
        </div>
      </div>
    </Layout>
  )
}

export default about
