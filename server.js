const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views",{
    express: server,
    autoescape: true,
    noCache: true
})


server.get("/", (req, res)=>{
    return res.render("index")
})

server.get("/visaogeral", (req,res)=>{
    return res.render("visaogeral")
})

server.get("/contagio", (req,res)=>{
    return res.render("contagio")
})

server.get("/sintomas", (req,res)=>{
    return res.render("sintomas")
})

server.get("/prevencao", (req,res)=>{
    return res.render("prevencao")
})

server.listen(5000, ()=>{
    console.log("server is running")
})
