const express = require('express')
// const connectLiveReload = require('connect-livereload')
const router = express.Router()

const  { LinkedList } = require('./index')

// router.use(connectLiveReload())

router.get('/LinkedList', (req, res) => {
    const linkList = new LinkedList()
     linkList.append(33)
     linkList.append(22)
     linkList.append(22)
     console.log(linkList)
     return res.status(200).send(linkList)
})


module.exports = router