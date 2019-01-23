module.exports = {
  siteMetadata: {
    siteName: 'aereal',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-36542486-1',
      },
    },
  ],
};
