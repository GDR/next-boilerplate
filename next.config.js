const withSass = require('@zeit/next-sass');

const distDir = (phase) => {
  switch (phase) {
    case "phase-production-build":
      return "../build/.next";
    default:
      return ".next";
  }
};

module.exports = withSass((phase) => {
  return {
    distDir: distDir(phase),
    pageExtensions: ["jsx", "js"]
  };
});
