const distDir = (phase) => {
  switch (phase) {
    case "phase-production-build":
      return "../build/.next";
    default:
      return ".next";
  }
};

module.exports = (phase) => {
  return {
    webpack: (config) => {
      return config;
    },
    distDir: distDir(phase),
    pageExtensions: ["jsx", "js"]
  };
};
