//server ban gya h joki '/' and '/twitter' dono pe hi listen kr rha h
require('dotenv').config()

const express=require('express');
const app=express();
const port=4000

//app aap '/' wale route pe listen kro aur agar voh aati h toh ek callback function chala do

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.get('/twitter',(req,res)=>{
    res.send('Twitter pr aagay');
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login Anushka baby</h1>')
})

app.get('/chai',(req,res)=>{
    res.send('<h2>CHai is ready</h2>')
})

app.listen(process.env.PORT,()=>{
    console.log(`EG APP LISTENING ON PORT ${port}`);
})
