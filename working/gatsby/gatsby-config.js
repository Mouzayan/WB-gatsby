import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

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
        projectId: 'gos5ohby',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
