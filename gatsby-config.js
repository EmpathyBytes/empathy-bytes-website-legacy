module.exports = {
  siteMetadata: {
    title: `Empathy Bytes`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    //   {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     "accessToken": "8-pPEMtOnQgmB8HgnmhQWdlWeRPnuXWXrj4UItYIu5A",
    //     "spaceId": "d608cqxcd02b"
    //   }
    // }
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://educast.library.gatech.edu/graphql`,
        schema: {
          timeout: 1000000,
          perPage: 10,
          requestConcurrency: 5,
          typePrefix: `Wp`,
        },
      },
      type: {
        MediaItem: {
          localFile: {
            maxFileSizeBytes: 0, // 10Mb. Set it to 0 to avoid downloads
          },
        },
      },
    }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sitemap", {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, "gatsby-plugin-mdx", "gatsby-transformer-remark", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }
  ]
};