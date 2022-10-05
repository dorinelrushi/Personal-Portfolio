const express = require('express');
const PORT = process.env.PORT || 6969;

const app = express();

app.set("view engine",'ejs')

app.get('/',(req,res)=>{
    res.render('index')
})



app.listen(PORT,()=>{console.log(`port is running on port ${PORT}`)})