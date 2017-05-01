const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('../dist'));

//quick and dirty react server-side routing
app.get('/home',(req,res)=>{
    res.send(fs.readFileSync('../dist/index.html','utf8'))
})

app.get('/contact',(req,res)=>{
    res.send(fs.readFileSync('../dist/index.html','utf8'))
})

app.get('/contact/email',(req,res)=>{
    res.send(fs.readFileSync('../dist/index.html','utf8'))
})

app.get('/contact/text',(req,res)=>{
    res.send(fs.readFileSync('../dist/index.html','utf8'))
})

app.get('/microblog',(req,res)=>{
    res.send(fs.readFileSync('../dist/index.html','utf8'))
})

app.get('/education',(req,res)=>{
    res.send(fs.readFileSync('../dist/index.html','utf8'))
})

app.get('/projects',(req,res)=>{
    res.send(fs.readFileSync('../dist/index.html','utf8'))
})

app.listen(80, ()=>{
    console.log('listening');
})
