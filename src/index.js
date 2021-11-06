const express=require('express')
require('./db/mongoose.js')
const User=require('./models/user.js')
const Task=require('./models/task.js')
const app=express()
const port=process.env.PORT
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
console.log("hello")
app.listen(port,()=>
{
    console.log('server is up on port'+port)
})
