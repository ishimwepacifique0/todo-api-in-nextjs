import mongoose from 'mongoose'

const connectionMongodb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        })
        console.log('MongoDB connected')
    }catch(err){
        console.log(err)
    }
}

export default connectionMongodb;

