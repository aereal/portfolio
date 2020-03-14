const contentfulManagement = require("contentful-management")

module.exports = async () => {
  const space = await contentfulManagement
    .createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
    })
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
  return space.getEnvironment("master")
}
