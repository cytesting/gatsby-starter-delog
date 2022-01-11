import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contacto — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Contacto</h1>
          <p>Profesores de álgebra lineal &rarr;</p>
          <p>Teléfono / Whatsapp: 3107489655 </p>
        </div>
        <div>
          <form className="form-container" name="micontacto" netlify-honeypot="bot-field" data-netlify="true">
            <input type="hidden" name="form-name" value="micontacto" />
            <div hidden aria-hidden="true">
              <label>
                No rellenes este campo si eres humano: 
                <input name="bot-field" />
              </label>
            </div>
            <div>
              <label for="email">Correo</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div>
              <label for="message">Mensaje</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`