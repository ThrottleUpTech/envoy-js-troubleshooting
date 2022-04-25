module.exports = {
  siteMetadata: {
    author: "Whole30",
    siteUrl: "https://envoy.whole30.com",
    title: "Whole30 Envoy",
    description: "Whole30 Envoys Website",
    headline: "",
    banner: "/resources/logo-throttleup.png",
    siteLanguage: "en",
    ogLanguage: "en_US",
    twitter: "@whole30",
    facebook: "Whole30",
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL,
      },
    },
    "gatsby-plugin-layout",
    `gatsby-plugin-sass`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-gravity-forms",
      options: {
        url: process.env.WPGRAPHQL_URL,
      },
    }
  ],
};
