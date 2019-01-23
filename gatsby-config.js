module.exports = {
  siteMetadata: {
    title: 'aereal.org',
    description: `aereal's portfolio`,
    facebookApp: {
      id: '588890224485471',
      publisher: 'https://www.facebook.com/ryota.nkzw',
    },
    twitterCard: {
      type: 'summary',
      owner: '@aereal',
    },
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
