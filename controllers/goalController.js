const asyncHandler=require('express-async-handler')



const getGoal= asyncHandler(async(req,res)=>{
   res.status(200).json({message:"get success"})
})


const postGoal= asyncHandler( async(req,res)=>{
   if(!req.body.text){
      res.status(404)
      
      throw new Error("enter the text")
   }else{
      console.log("//////////");
      res.status(200).json({message:`post created`})           
   }
})


const updateGoal=asyncHandler(async(req,res)=>{   
   res.status(200).json({message:`updated ${req.params.id}`})  
})

const deleteGoal=asyncHandler( async(req,res)=>{
   res.status(200).json({message:`post deleted ${req.params.id}`})
})


module.exports={getGoal,postGoal,updateGoal,deleteGoal}