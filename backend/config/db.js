import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://arifpustice12:arifarif001122@cluster0.ndaqwy8.mongodb.net/Project_Department').then(()=>console.log("DB Connected"));
}

