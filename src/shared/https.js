const forceHTTPS = (req, res, next) => {
  if (process.env.NODE_ENV === "production" && !req.secure) {
    return res.redirect(301, "https://" + req.headers.host + req.originalUrl)
  }
  next()
}

module.exports = { forceHTTPS }
