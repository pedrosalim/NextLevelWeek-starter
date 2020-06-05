const express = require('express')
const server = express()


const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
    autoescape: false
})

server.use(express.static('public'))


server.get('/', function(req, res) {
    return res.render("index.html", { title: "Um título"})
})

server.get('/create-point', function(req, res) {
    return res.render("create-point.html")
})

server.get('/search', function(req, res) {
    return res.render("search-results.html")
})

server.listen(3000, function() {
    console.log("server is running!")
})