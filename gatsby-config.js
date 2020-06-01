const dotenv = require('dotenv');
const path = require('path');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Matt Mahler || Web Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matt Mahler || Web Developer`,
        short_name: `Matt Mahler`,
        start_url: `/`,
        background_color: `#8A9CA2`,
        theme_color: `#427ACA`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/mattlogo.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'oylzzzobb2ca',
        accessToken: '1HnOd0W4ejaSczDMgBrVVztd2c2EAn3112C8JVGhSi0',
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: '855584744.1677ed0.52ec393495a54bf9829d662afed71b5d',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `Montserrat`, 'Mansalva', 'Pacifico'],
        display: 'swap',
      },
    },
  ],
};
