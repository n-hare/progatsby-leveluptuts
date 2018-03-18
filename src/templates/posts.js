import React from 'react'

const PostTemplate = ({ data: { contentfulBlogPost: post } }) => (
  <article>
    <h1>{post.title}</h1>
    <p>{post.createdAt}</p>
    <div dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }} />
  </article>
)

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      createdAt(fromNow: true)
      formattedDate: createdAt
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default PostTemplate
