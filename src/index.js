const express = require("express")
const app = express()
const { robots } = require("./shared/robots.js")

app.use("/robots.txt", robots)
app.use(express.json())
app.use(express.static("public"))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App listening on port ${port}. Try http://localhost:${port}`)
})
