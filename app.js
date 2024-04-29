import express from 'express'
import path from 'path'

const app = express()
const port = 3000

const __dirname = path.resolve()

app.use(express.static('public'));


app.get('/home', (req, res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.get('/', (req, res) =>{
    res.redirect('/home')
})

app.get('/info', (req, res) =>{
    res.sendFile(__dirname + "/public/info.html")
})

app.listen(port, () => {
    console.log(`Here is the link: http://localhost:${port}`)
})