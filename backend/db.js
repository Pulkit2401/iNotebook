const mongoose= require('mongoose');
const mongoURI='mongodb://localhost:27017/inotebook'

const connectToMongo= async ()=>{
    try{
        await mongoose.connect(mongoURI);
        console.log("connected to Mongo successfully")
    } catch(err){
        console.log("Error connecting to MongoDB");
    }

   
}

module.exports= connectToMongo;