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
      resolve: "gatsby-plugin-gatsby-cloud",
      options: {
          headers: {
              "/fonts/*": [
                  "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"
              ],
              "/images/*": [
                  "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"
              ],
              "**/*.ttf": [
                  "Cache-Control: public,max-age=31536000,s-maxage=31536000,immutable"
              ],
          },
          allPageHeaders: [
              "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
          ],
      },
    }
   // other plugins goes here
  ],
};
