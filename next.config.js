const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const nextConfig = {
  assetPrefix: "/grass/",
  basePath: "https://github.com/hector4like6gorillaz",
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
