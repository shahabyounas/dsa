const express = require('express')
const app = express()
const path = require('path')
// const livereload = require('livereload')
// const connectLiveReload = require('connect-livereload')

const host = '127.0.0.1'
const port = 3000;
const dsRoutes = require('./dsa/useRoutes')
const { attachBodyTag } = require('./util/utils')
const fetchData = require('./api')



const publicDir = path.join(__dirname, 'public')

// app.use(attachBodyTag());
app.use(express.json())
app.use('/dsa', dsRoutes)

app.get('/', (req, res) => { res.send('Home Page')})

app.get('*', (req, res) => {
    return res.send("resource not found")
})

fetchData()


app.listen(port, host, () => {
    console.log(`Server Running http://${host}:${port}`)
})


// const livereloadServer = livereload.createServer()
// livereloadServer.watch(publicDir)
// livereloadServer.server.once("connection", () => {
//     setTimeout(() => {
//         livereloadServer.refresh("/")
//     }, 500)
// })