const express = require('express');
const server = express();

const path = require('path');
const hbs = require('hbs');

// ----setting paths ---------
let staticPath = path.join(__dirname,"../Taarunyam/src");
let viewPath = path.join(__dirname,"../Taarunyam/temps/views");
let tempPath = path.join(__dirname,"../Taarunyam/temps/templates");
//  ---------setting partials ------
hbs.registerPartials(tempPath)

// -----using static files -----
server.use(express.static(staticPath));
server.set("view engine","hbs");
server.set("views",viewPath);

server.get("/home",(req,res)=>{
    res.render('index')
})
server.get("/technical",(req,res)=>{
    res.render('technical')
})
server.get("/nonTech",(req,res)=>{
    res.render('nonTech')
})
server.get("/sports",(req,res)=>{
    res.render('sports')
})
server.get("/cultural",(req,res)=>{
    res.render('cultural')
})
server.get("/register",(req,res)=>{
    res.render('register')
})


// ---listening to the port ----
server.listen(3000,()=>{
    console.log("server started successfully")
})