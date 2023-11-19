const express=require('express');
const app=express();
const path=require('path');
const mongoose = require('mongoose');

const PORT=process.env.PORT || 3000;

app.use(express.static('public'));//to tell express where all static sources of style.css are
app.use(express.json());//to parse req.body otherwise it'll show undefined
//Template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Routes
app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'))
app.use('/files/download',require('./routes/download'));


mongoose.connect("mongodb+srv://aarushikohli737:PydGzFFI6u5IAmhQ@cluster0.dyxp4bl.mongodb.net/inShare?retryWrites=true&w=majority").then(()=>app.listen(PORT)).then(()=>console.log("Connected to DB.")).catch((err)=>console.log(err));

