import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const about = () => {
  return (
    <Layout>
      <SEO title="Contact Me" />
      <div className="contact-container">
        <div className="info">
          <h2 className="page-title">Contact Me</h2>
          <p style={{ margin: "0" }}>
            Whether you want me to look at your design or you are looking for
            some to design and build your next project from scratch, I am here
            for you! Do not hesitate to contact me for any additional info or
            pricing. I respond to emails virtually every day, almost all day
            long! Hit me up on my social media accounts or just use the form on
            this page to send me a quick message. I appreciate your interest in
            my work!
          </p>
          <br />
          My email is:
          <span> julius.webdesigns@gmail.com</span>
          <div className="socials">
            <a
              href="https://twitter.com/DesignsJulius"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="social-icon"
                icon={["fab", "twitter"]}
              />
            </a>
            <a
              href="https://dribbble.com/DrJULIK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="social-icon"
                icon={["fab", "dribbble-square"]}
              />
            </a>
            <a
              href="https://www.instagram.com/julius.designs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="social-icon"
                icon={["fab", "instagram"]}
              />
            </a>
            <a
              href="https://github.com/DrJulik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="social-icon"
                icon={["fab", "github"]}
              />
            </a>
          </div>
        </div>

        <div id="form">
          <h3>If you want a quote or for other general inquiries:</h3>
          <form className="topBefore" name="contact" method="POST" netlify>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="NAME"
              aria-label="Name Input"
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-MAIL"
              aria-label="Email Input"
            />
            <textarea
              id="message"
              name="message"
              type="text"
              placeholder="MESSAGE"
              aria-label="Message input"
            ></textarea>
            <input
              id="submit"
              type="submit"
              value="SUBMIT"
              aria-label="Submit button"
            />
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default about
