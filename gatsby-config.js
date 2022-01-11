module.exports = {
  siteMetadata: {
    siteUrl: "https://nicolaspaillard.gatsbyjs.io/",
    title: "nicolaspaillard"
  },
  plugins: [
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Nicolas Paillard',
        short_name: 'nicolaspaillard',
        start_url: '/',
        background_color: '#101010',
        theme_color: '#07f0fe',
        display: 'standalone',
        icon: 'src/images/icon.png',      
      },
    }
   // other plugins goes here
  ],
};
