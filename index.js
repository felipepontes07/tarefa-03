const express = require('express')
const app = express()
const port = 5000

const path = require("path")
const inicio = require('./inicio')
const inicio2 = require('./inicio2')

const basepath = path.join(__dirname)

app.use('/inicio', inicio)
app.use('/inicio2', inicio2)


app.get('/', (req, res) => {
    res.sendFile(`${basepath}/index.html`)
})

app.listen(port, () => {
    console.log(`App esta rodando na porta ${port}`)
})  