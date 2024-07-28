// require('dotenv').config({path: './env'})
import connectDB from './db/index.js';

import dotenv from 'dotenv';
dotenv.config({path: './env'});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        app.on('error',(err)=>{
            console.log("Error: " + err);
            throw err;
        })

        console.log(`Server is running on port ${process.env.PORT}`);
        console.log(`MongoDB connected to ${process.env.DB_NAME}`);
    });
})
.catch((err)=>{
    console.log("MongoDB connection failed: " + err);
    throw err;
})

/*
import express from 'express';
const app = express();


;(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        app.on('error',(err)=>{
            console.log("Error: " + err);
            throw err;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
            console.log(`MongoDB connected to ${DB_NAME}`);
        })
    }
    catch(error){
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
})()
    */