import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const rawUrl = process.env.MONGODB_URL || "";
    const cleanedUrl = rawUrl.replace(/\/+$/, ""); // remove trailing slashes

    // Force use of social database.
    // If URL already includes a database name, drop it and append /social.
    const withoutDb = cleanedUrl.replace(/\/(test|social|admin|[a-zA-Z0-9_-]+)$/, "");
    const connectionString = `${withoutDb}/social`;

    console.log("MongoDB connect URL:", connectionString);

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;