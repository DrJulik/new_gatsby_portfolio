import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/Image"

const about = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <div className="about-container">
        <div className="text-image-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 className="page-title">About Me</h2>
            <div style={{ width: "100%" }} className="about-image">
              <Image filename="portrait.jpg" alt="my face" />
            </div>
          </div>
        </div>

        <p>
          My name is Yuliy and I am a self-taught Front-End Designer and
          Developer! I prefer minimalistic design, which delivers the best user
          experience with clear and user-friendly interfaces. Whether you need a
          simple, one-page solution, or a complex, multi-page website, I am at
          your service! Here is a list of technologies that I use in my work:
        </p>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6)</li>
          <li>CSS Frameworks (Bootstrap, Materialize etc)</li>
          <li>SASS</li>
          <li>Flexbox and Grid</li>
        </ul>
        <ul>
          <li>Git</li>
          <li>Responsive Design (Media queries, rem units)</li>
          <li>NPM</li>
          <li>WordPress</li>
          <li>VueJS</li>
        </ul>
      </div>
    </Layout>
  )
}

export default about
