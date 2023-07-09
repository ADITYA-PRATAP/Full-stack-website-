const express=require("express")
const app=express()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
// app.use(express());
const port = 5000;
const mongoB=require('./db');

mongoB();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello world");
})
app.use(require("./routes/CreateUser"));



 app.listen(port,()=>{ 
    console.log(`example app alistening on port ${port}`)
 })