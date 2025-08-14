import mongoose from "mongoose";
import "dotenv/config";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING);
    console.log("connected to database");
  } catch (error) {
    throw new Error(error);
  }
};

 