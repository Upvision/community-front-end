module.exports = {
  env: {
    SITE_NAME: process.env.SITE_NAME,
    GOOGLE_AUTH: process.env.GOOGLE_AUTH
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
