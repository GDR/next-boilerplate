const withSass = require('@zeit/next-sass');

const distDir = (phase) => {
  switch (phase) {
    case "phase-production-build":
      return "../build/.next";
    default:
      return ".next";
  }
};

module.exports = (phase) => {
  return withSass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            publicPath: './',
            outputPath: 'static/',
            name: '[name].[ext]'
          }
        }
      });
      console.log(config.module.rules);
      return config;
    },
    distDir: distDir(phase),
    pageExtensions: ['jsx', 'js']
  });
};
