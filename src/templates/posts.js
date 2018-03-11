import React from 'react'

const PostTemplate = ({ data: { markdownRemark: post } }) => (
  <article>
    <h1>{post.frontmatter.title}</h1>
    <p>{post.frontmatter.date}</p>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </article>
)

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date(fromNow: true)
        formatedDate: date(formatString: "MMMM D, YYYY")
      }
      html
    }
  }
`

export default PostTemplate
