const express=require("express");
const connect = require("./configs/db");
const app=express();
const AllController=require("./controller/allProduct.controller");
const cartController=require("./controller/cartProduct.controller");
const cors=require("cors");
app.use(express.json());
app.use(cors());

app.use("/all",AllController);
app.use("/cart",cartController);
app.use("/all/:car",AllController)

app.listen(5000,async(req,res)=>{
try{
    await connect();
console.log("Connected to 5000");
}catch(err){
console.log(err.message);
}
})

