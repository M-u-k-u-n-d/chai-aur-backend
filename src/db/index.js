import mongoose from "mongoose";
import {DB_NAME} from '../constants.js';

const connectDB = async function (){

    console.log("MONGODB_URL " + process.env.MONGODB_URI);
    console.log("db_name " + DB_NAME);
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected  !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

export default connectDB;