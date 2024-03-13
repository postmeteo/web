const { config } = require("../app/config.js")

const robots = (req, res, next) => {
  const isProd = req.headers.host === config.domain
  const disallow = isProd ? "" : " /"

  res.type("text/plain")
  res.send("User-agent: *\nDisallow:" + disallow)
}

module.exports = { robots }
