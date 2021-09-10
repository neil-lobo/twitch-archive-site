const express = require("express")
const cors = require("cors");
const history = require("connect-history-api-fallback")
const app = express()

app.use(history())
app.use(express.static(`dist/`))
app.use(cors())

function log(str) {
    const date = new Date()
    console.log(`(UTC/GMT${(-1)*date.getTimezoneOffset()/60}) ${date.toLocaleString()} |> ${str}`)
}

app.get("/", (req, res) => {
    res.sendFile(`index.html`)
})

app.listen(process.env.PORT || 5000, () => {
    log(`Listening on port: ${process.env.PORT || 5000}`)
})