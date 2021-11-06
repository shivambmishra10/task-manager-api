const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
const ObjectID=mongodb.ObjectID

const databaseName='task-manager'

MongoClient.connect(process.env.connectionURL,{useNewUrlParser:true},(error,client)=>
{
    if(error)
    return console.log('Unable to connect')
    const db=client.db(databaseName)
    // db.collection('users').insertOne(
    //     {
    //         name:'shivam',
    //         age:18
    //     },(error,result)=>
    //     {
    //         console.log(result.ops)
    //     }
    // )
    // db.collection('users').insertMany(
    //     [{
    //      name:'shivam',
    //      age:18
    //     },
    //     {
    //         name:'rahul',
    //         age:20
    //     }
    // ],(error,result)=>
    // {
    //     if(error)
    //     return console.log('Unable to insert documents!')
    //     console.log(result.ops)
    // }
    
    // )
    //   
    // db.collection('users').findOne({name:"shivam"},(error,user)=>
    // {
    //     if(error)
    //     return console.log('Unable to fetch')
    //     console.log(user)
    // })
    // db.collection('users').find({age:18}).toArray((error,users)=>
    // {
    //     console.log(users)
    // })
    // db.collection('users').find({age:18}).count((error,users)=>
    // {
    //     console.log(users)
    // })
//     db.collection('task').findOne({_id: new ObjectID("616594aa33e37f3c44df46ce")},(error,user)=>
//     {
//        if(error)
//        return console.log("error come")
//        console.log(user)
//     })
//    db.collection('task').find({completed:false}).toArray((error,user)=>
//    {
//        console.log(user)
//    })
//    db.collection('users').updateOne({_id:new ObjectID("61656691f5de03c6addd71c0")},{$set:{
//        name:'raj'
//    }}).then((result)=>
//    {console.log(result)}).catch((error)=>
//    {
//        console.log(error)
//    })
//    db.collection('task').updateMany({completed:true},{$set:{
//        completed:false
//    }}).then((result)=>
//    {console.log(result)}).catch((error)=>
//    {
//        console.log(error)
//    })
   db.collection('users').deleteMany({
       name:'shivam'
   }).then((result)=>
   {console.log(result)}).catch((error)=>
   {
       console.log(error)
    })
 })