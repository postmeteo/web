const { config } = require("../app/config.js")

const robots = (req, res, next) => {
  const isProd = req.headers.host === config.domain
  res.type("text/plain")
  res.send("User-agent: *\nDisallow:" + isProd ? "" : " /")
}

module.exports = { robots }
