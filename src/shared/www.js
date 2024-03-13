function wwwRedirect(req, res, next) {
  if (req.headers.host.startsWith("www.")) {
    const newHost = req.headers.host.replace("www.", "")
    return res.redirect(301, "https://" + newHost + req.originalUrl)
  }
  next()
}

module.exports = { wwwRedirect }
