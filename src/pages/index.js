import React from 'react'

import PostListing from '../components/Posts/PostListing'
const IndexPage = ({ data: { allContentfulBlogPost } }) => (
  <div>
    <h1>Latest Posts</h1>
    {allContentfulBlogPost.edges.map(({ node }) => <PostListing post={node} key={node.id} />)}
  </div>
)

export const getPosts = graphql`
  query getPosts {
    allContentfulBlogPost(sort: { order: DESC, fields: [updatedAt] }, limit: 5) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`

export default IndexPage
