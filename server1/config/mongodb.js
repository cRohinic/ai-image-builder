import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log("MONGO_URI =>", process.env.MONGODB_URL);

    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "ai-image-db",
    });

    console.log("MongoDB Connected Successfully ✅");
  } catch (error) {
    console.error("MongoDB Error ❌:", error.message);
    process.exit(1);
  }
};

export default connectDB;
