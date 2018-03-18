module.exports = {
  siteMetadata: {
    title: 'Gatsby'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `q23cnljk36db`,
        accessToken: `2317685212ee4c27abae9c779c4e95399f0239f2afce006c2904f6c7b8efb020`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`
      }
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
}
