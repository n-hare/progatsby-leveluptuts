import React from 'react'

import PostListing from '../components/Posts/PostListing'
const IndexPage = ({ data: { allMarkdownRemark } }) => (
  <div>
    <h1>Latest Posts</h1>
    {allMarkdownRemark.edges.map(({ node }) => <PostListing post={node} key={node.id} />)}
  </div>
)

export const getPosts = graphql`
  query getPosts {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 5) {
      edges {
        node {
          id
          frontmatter {
            title
            date(fromNow: true)
            formatedDate: date(formatString: "MMMM D, YYYY")
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`

export default IndexPage
