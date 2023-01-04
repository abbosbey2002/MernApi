 const mongoose=require('mongoose')
 mongoose.set('strictQuery', true)
const uri=process.env.MONGO_URI || 'mongodb://localhost:27017/mern'

 const connectDb=async ()=>{
    console.log('so`rov amalga oshirilmoqda kutingcl')
        try{
                const conn= await mongoose.connect(uri, {
                        useNewUrlParser: true
        })
        console.log('connect db men bu ishni qildim', `${conn.connection.host}` );
    }catch(err){
            console.log("abbos error bu yerda" , err )
        }
     }
    
     module.exports=connectDb
