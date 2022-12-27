const express=require('express')
const goalRoute=require('./routes/goalRoutes')

const {errorHandler}=require('./middleware/errorMiddleware')

const dotenv=require("dotenv").config()
const port =process.env.PORT


const app=express()

//body parsing middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
     

app.use('/api/goals',goalRoute)  


app.use(errorHandler)  


 

app.listen(port,()=>console.log(`server running in ${port}`))