const express=require("express")

const router=express.Router()
const {getGoal,postGoal,updateGoal,deleteGoal}  =require("../controllers/goalController")


router.get('/',getGoal)

router.post('/',postGoal)         

router.put('/:id',updateGoal)

router.delete('/:id',deleteGoal)


module.exports=router