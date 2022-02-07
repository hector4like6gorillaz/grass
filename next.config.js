const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const nextConfig = {
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
