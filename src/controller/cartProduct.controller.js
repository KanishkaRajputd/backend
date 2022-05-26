const cartProduct=require("../models/cart.model");
const express=require("express");
const router=express.Router();

router.post("/",async(req,res)=>{

try{
const all=await cartProduct.create(req.body);
   return res.status(201).send(all);

}catch(err){
   return res.status(500).send({msg:err.message});
}

})
router.get("/",async(req,res)=>{

    try{
        const all=await cartProduct.find().populate({
         path:"productID"
        }).lean().exec();
       return res.status(200).send(all);
    
    }catch(err){
       return res.status(500).send({msg:err.message});
    }
    
    })
    module.exports=router;
