import mongoose from "mongoose";    

const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("connect To MongoDB")
    }catch(err){
        console.log("Error", err);
    }
}
export default connectToMongoDB