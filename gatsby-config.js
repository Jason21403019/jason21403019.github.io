/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
// module.exports = {
//   // siteMetadata: {
//   //   title: `Gatsby Default Starter`,
//   //   description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
//   //   author: `@gatsbyjs`,
//   //   siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
//   // },
//   plugins: [
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         // The unique name for each instance
//         name: `blog`,
//         // Path to the directory
//         path: `${__dirname}/src/blog/`,
//       },
//     },
//     `gatsby-transformer-remark`,
//     // {
//     //   resolve: `gatsby-source-filesystem`,
//     //   options: {
//     //     name: `data`,
//     //     path: `${__dirname}/src/data/`,
//     //     // Ignore files starting with a dot
//     //     ignore: [`**/\.*`],
//     //     // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
//     //     fastHash: true,
//     //   },
//     // },
//     // `gatsby-plugin-image`,
//     // {
//     //   resolve: `gatsby-source-filesystem`,
//     //   options: {
//     //     name: `images`,
//     //     path: `${__dirname}/src/images`,
//     //   },
//     // },
//     // `gatsby-transformer-sharp`,
//     // `gatsby-plugin-sharp`,
//     // {
//     //   resolve: `gatsby-plugin-manifest`,
//     //   options: {
//     //     name: `gatsby-starter-default`,
//     //     short_name: `starter`,
//     //     start_url: `/`,
//     //     background_color: `#663399`,
//     //     // This will impact how browsers show your PWA/website
//     //     // https://css-tricks.com/meta-theme-color-and-trickery/
//     //     // theme_color: `#663399`,
//     //     display: `minimal-ui`,
//     //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
//     //   },
//     // },
//   ],
// }

module.exports = {
  pathPrefix: "/Jason21403019.github.io",
  siteMetadata: {
    siteUrl: "https://jason21403019.github.io/",
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`, // 你想要使用的字体
          // 可以添加更多的字体
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `public`,
        path: `${__dirname}/public/index.html`,
      },
    },
  ],
}
