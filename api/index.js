const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const fs=require('fs')

const port=3000;
const app=express()

app.get('/',(res,req)=>{
    res.send('hello world')
})

app.listen(port,()=>{
    console.log(`port listerning on port ${port}`)
})

