const mongoose=require("mongoose");


const Allschema= new mongoose.Schema({
    image_url:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    strikedoffprice:{type:Number,required:true},
    pre:{type:String,required:true},
   title:{type:String,required:true},
   cat:{type:String,required:true}
},
{
timestamps:true,
versionKey:false
})


const allProduct= mongoose.model("allpro",Allschema);
module.exports=allProduct;