/** @type {import('next').NextConfig} */
const packageJson = require("./package.json");

const nextConfig = {
  output: "standalone",
  env: {
    APP_VERSION: packageJson.version,
  },
  experimental: {
    optimizePackageImports: [
      "@mui/icons-material",
      "framer-motion",
      "react-feather",
      "@emotion/react",
      "@emotion/styled",
      "frontend-base",
    ],
  },
};

export default nextConfig;
