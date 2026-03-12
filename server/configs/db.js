import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const rawUrl = process.env.MONGODB_URL || "";
    const cleanedUrl = rawUrl.replace(/\/+$/, ""); // remove trailing /
    const connectionString = cleanedUrl.replace(/\/(test|social|admin|[a-zA-Z0-9_-]+)$/, "") + "/social";

    console.log("MongoDB connect URL:", connectionString);

    await mongoose.connect(connectionString);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;