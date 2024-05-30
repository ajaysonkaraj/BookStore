import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import mongoose, { Mongoose } from 'mongoose';

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app =express();

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 5556;
const URI = process.env.MongoDBURI;

//connect to mongodb

try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongodb");
    
} catch (error) {
    console.log("Error : ", error);
}



//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
});