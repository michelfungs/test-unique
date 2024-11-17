const express = require ('express')
const app = express ()
const port = 3000

app.set ('view engine', 'ejs')
app.set ('views', './src/views')

app.get ('/', (req, res) => {
    res.render ('home')
})

app.listen (port, () => {
    console.log ('Le serveur est en marche')
})