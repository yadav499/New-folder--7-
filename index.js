const express = require("express");
const app = express();
app.use(express.json());
app.post("/webhook",(req,res)=>{
   console.log(req.body);
});


app.get("/",(req,res)=>{
    res.send("Hello world");
})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log("Server is running");
});