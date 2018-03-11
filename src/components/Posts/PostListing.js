import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const BlogLink = styled(Link)`
  color: hsla(50, 0%, 10%, 0.7);
  text-decoration: none;
  &:hover {
    color: hsla(90, 0%, 10%, 0.5);
  }
`
const PostListing = ({ post }) => (
  <BlogLink to={`/blog/${post.frontmatter.slug}`}>
    <h2>{post.frontmatter.title}</h2>
  </BlogLink>
)

export default PostListing
