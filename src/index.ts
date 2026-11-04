import express from 'express'

const app = express();

const puerto = process.env.PORT || 4000;

app.get('/', (req,res)=>{
    res.send('fino el pollo');
})

app.listen(puerto, ()=>{
    console.log('funca');
})