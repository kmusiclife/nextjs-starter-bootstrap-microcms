
require('dotenv').config()
module.exports = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    SITE_NAME: process.env.SITE_NAME,
    SITE_DESCRIPTION: process.env.SITE_DESCRIPTION,
    OG_IMAGE: process.env.OG_IMAGE,
    OG_IMAGE_WIDTH: process.env.OG_IMAGE_WIDTH,
    OG_IMAGE_HEIGHT: process.env.OG_IMAGE_HEIGHT,
    OG_TYPE: process.env.OG_TYPE,
    GA_ID: process.env.GA_ID,
    MICROCMS_PATHNAME: process.env.MICROCMS_PATHNAME,
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    MICROCMS_API_URL: process.env.MICROCMS_API_URL,
    MICROCMS_LIMIT: process.env.MICROCMS_LIMIT
  }
}
