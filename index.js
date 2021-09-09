const express = require("express")
const cors = require("cors");
const app = express()
app.use(express.static(`dist/`))
app.use(cors())

app.listen(process.env.PORT || 80, () => {
    console.log(`Listening on port: ${process.env.PORT || 80}`)
})

app.get("/*", (req, res) => {
    res.sendFile(`index.html`)
})  