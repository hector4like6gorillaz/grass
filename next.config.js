const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const nextConfig = {
  assetPrefix: "https://hector4like6gorillaz.github.io/grass",
  basePath: "https://hector4like6gorillaz.github.io/grass",
  reactStrictMode: true,
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
