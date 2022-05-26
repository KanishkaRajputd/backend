const mongoose=require("mongoose");


const cartSchema= new mongoose.Schema({
   productID:{type:mongoose.Schema.Types.ObjectId,
    ref:"allpro",
    required:true
}
},
{
timestamps:true,
versionKey:false

})


const cartProduct= mongoose.model("cart",cartSchema);
module.exports=cartProduct;