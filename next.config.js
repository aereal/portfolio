/**
 * @type {import('next').NextConfig}
 */
const config = {
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_DELIVERY_ACCESS_TOKEN:
      process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  },
  output: "export",
  distDir: "dist",
}
module.exports = config
