// console.log("vaii")

require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
  name: "Vaishnavi",
  repo: "backend",
  url: "https://github.com/Vaishnavi2613/backend"
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>
{
    res.send("vaii@google.com")
})

app.get('/login', (req,res)=>
{
    res.send("<h1>vaishii's first login server</h1>")
})

app.get('/youtube', (req,res)=>
{
    res.send("<h2>learning from chai & code</h2>")
})

app.get('/github', (req,res)=>
{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
