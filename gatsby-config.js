module.exports = {
  siteMetadata: {
    title: `Aishat Liasu - Full Stack Web Developer`,
    siteUrl: `https://aishatliasu.com`,
    description: 'I am a problem solver seeking to solve problems through human creativity and by properly utilising technology',
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Aishat Liasu - Full Stack Web Developer`,
        short_name: `Aishat Liasu`,
        description: `Aishat Liasu's Portfolio Website`,
        lang: `en`,
        start_url: `/`,
        icon: 'src/images/myoctocat.png',
      },
    },
  ],
  pathPrefix: '/portfolio',
};
