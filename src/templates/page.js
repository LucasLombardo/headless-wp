import React, { Component } from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage
    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
        <p>
          Published: {currentPage.date} Modified: {currentPage.modified}
        </p>
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      slug
      date(formatString: "MMMM DD, YYYY")
      modified(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`