const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let osList = [];

app.post("/os",(req,res)=>{

const os = "OS"+Date.now();

const nova = {
os_numero: os,
...req.body
};

osList.push(nova);

res.json({ok:true,os});

});

app.get("/os",(req,res)=>{
res.json(osList);
});

app.listen(3000,()=>{
console.log("rodando");
});