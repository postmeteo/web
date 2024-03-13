const forceHTTPS = (req, res, next) => {
  if (process.env.NODE_ENV === "production" && !req.secure) {
    res.redirect(301, "https://" + req.headers.host + req.url)
  }
  next()
}

module.exports = { forceHTTPS }
