module.exports = {
  siteMetadata: {
    title: `Aishat Liasu`,
    siteUrl: `https://aishatliasu.com`,
    description: 'Aishat Liasu | Full Stack Web Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
      __key: 'posts',
    },
  ],
  pathPrefix: '/portfolio',
};
