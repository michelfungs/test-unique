const express = require ('express')
const app = express ()
const port = 3000

app.get ('/', (req, res) => {
    res.send ('Bienvenu dans notre site')
})

app.listen (port, () => {
    console.log ('Le serveur est en marche')
})