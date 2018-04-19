const withSass = require('@zeit/next-sass');

module.exports = () =>
  withSass({
    distDir: '../_next',
    pageExtensions: ['jsx', 'js'],
    cssModules: true,
  });
