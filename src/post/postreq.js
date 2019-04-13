const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.use(users.json())

app.get('/todo', (req, res) => {

    let data = fs.readFileSync('database.json')

    res.send(data)

})

app.post('/todo', (req, res) => {

    let newData = req.body
    console.log(req.body)

    let data = JSON.parse(fs.readFileSync('database.json'))
    data.push(newData);

    fs.writeFileSync('database.json',JSON.stringify(data))

    res.send(newData)

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))