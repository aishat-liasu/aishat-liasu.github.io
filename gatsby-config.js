module.exports = {
  siteMetadata: {
    title: `Aishat Liasu - Software Engineer`,
    siteUrl: `https://aishatliasu.com`,
    description:
      'I am a software engineer passionate about building solutions using human creativity and technology',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
      __key: 'content',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Aishat Liasu - Software Engineer`,
        short_name: `Aishat Liasu`,
        description: `Aishat Liasu's Portfolio Website`,
        lang: `en`,
        start_url: `/`,
        icon: 'src/images/aishat_liasu.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
  partytownProxiedURLs: [
    `https://www.googletagmanager.com/gtag/js?id=${'G-89HHSZSCLE'}`,
  ],
};
