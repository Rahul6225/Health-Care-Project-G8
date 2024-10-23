import mongoose from 'mongoose';

const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_String);
        console.log(`MongoDb Connection Successful || HOST ${connect.connection.host}`);
    }
    catch(error){
        console.log('Mongo connection Failed',error);
        process.exit(1);
        
    }
}
export default connectDB;