import mongoose, { mongo } from "mongoose";

const connection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/files");
        console.log("Connected to database");
        
    } catch(err) {
        console.error("Error connecting to database");
        console.log(err);
        
    }
}

export default connection;