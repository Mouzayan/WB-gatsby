export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza in Hamilton!`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin we are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: ,
      }
    }
  ],
};
