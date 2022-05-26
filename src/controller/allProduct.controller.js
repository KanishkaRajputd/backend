const express =require("express");
const allProduct = require("../models/allproduct.model");

const router=express.Router();

router.post("/",async(req,res)=>{

try{
const all=await allProduct.create(req.body);
   return res.status(201).send(all);

}catch(err){
   return res.status(500).send({msg:err.message});
}

})
router.get("/",async(req,res)=>{

    try{
        const all=await allProduct.find().lean().exec();
       return res.status(200).send(all);
    
    }catch(err){
       return res.status(500).send({msg:err.message});
    }
    
    })
    router.get("/:cat",async(req,res)=>{

      try{
          const all=await allProduct.find({cat:req.params.cat}).lean().exec();
         return res.status(200).send(all);
      
      }catch(err){
         return res.status(500).send({msg:err.message});
      }
      
      })
    module.exports=router;