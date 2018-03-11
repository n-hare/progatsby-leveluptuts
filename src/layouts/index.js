import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children, data, location }) => (
  <div>
    <Helmet
      title="Gatsby"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header data={data} location={location} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}>
      {children()}
    </div>
  </div>
)

export const layoutQuery = graphql`
  query SiteLayout {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: { regex: "/bg.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export default TemplateWrapper
