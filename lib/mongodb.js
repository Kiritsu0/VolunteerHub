import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://itest7416:Xpno8TJD8hEAoNs5@cluster0.wb3hkjk.mongodb.net/userauth";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error Occurred during connecting to MongoDB", error);
  }
};
