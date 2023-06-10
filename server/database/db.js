 import mongoose from "mongoose";
 
 const Connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-7u934sf-shard-00-00.gzbeilc.mongodb.net:27017,ac-7u934sf-shard-00-01.gzbeilc.mongodb.net:27017,ac-7u934sf-shard-00-02.gzbeilc.mongodb.net:27017/?ssl=true&replicaSet=atlas-zcb4p8-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL);
        console.log("database connected sucessfully")
    }
    catch(error){
        console.log("error while connecting the database",error.message)
    }
}
export default Connection;