const express = require('express')
const app = express()
const port = 2070;
const chef = require('./data/Chef.json')
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Recipe Is Running')
})
app.get('/chef', (req, res) => {
    res.send(chef)
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chef.find(cf => cf.id === id)
    res.send(selectedChef)
})
app.listen(port, () => {
    console.log(`Port ${port}`)
})