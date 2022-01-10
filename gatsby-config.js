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
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/icon.png',      
      },
    }
   // other plugins goes here
  ],
};
