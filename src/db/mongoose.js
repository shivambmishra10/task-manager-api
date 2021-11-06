const mongoose=require('mongoose')
const validator=require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})

// const me=new User(
//     {
//         name:'mishra',
//         email:' mishra10@gmail.com ',
//         password:'passwo',
//         age:19
//     }
// )
// me.save().then(()=>
// {
//     console.log(me)
// }).catch((error)=>
// {
//     console.log('Error!',error)
// })

// const me=new tasks({
//     description:" app-dev    ",
    
// })
// me.save().then(()=>
// {
//     console.log(me)
// }).catch((error)=>
// {
//     console.log(error)
// })