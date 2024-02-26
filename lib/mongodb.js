import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://Hussein:yk07ovtvJJJTXRuN@cluster0.9hd45fk.mongodb.net/";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error Occurred during connecting to MongoDB", error);
  }
};
