module.exports = {
  siteMetadata: {
    title: `Aishat Liasu - Software Engineer`,
    siteUrl: `https://aishat-liasu.github.io`,
    description: 'I am a software engineer with a passion for building solutions by utilizing human creativity and technology',
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
        name: `Aishat Liasu - Software Engineer`,
        short_name: `Aishat Liasu`,
        description: `Aishat Liasu's Portfolio Website`,
        lang: `en`,
        start_url: `/`,
        icon: 'src/images/aishat_liasu.png',
      },
    },
  ],
};
