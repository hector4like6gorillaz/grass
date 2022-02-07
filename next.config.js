const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
  reactStrictMode: true,
  basePath: '/grass',
  
  assetPrefix: 'https://cdn.statically.io/gh/hector4like6gorillaz.github.io/grass/',
  images: {
    disableStaticImages: true,
  },
};
module.exports = withPlugins(
  [
    [
      withImages({
        webpack(config, options) {
          return config;
        },
      }),
    ],
  ],
  nextConfig
);
