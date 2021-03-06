const express = require("express")
const morgan = require("morgan")
const layout = require("./views/layout")

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static('public'))


app.get("/", (req, res) => {
  res.send(layout(""))
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
})


