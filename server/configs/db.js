import mongoose, { connect } from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('MongoDB connected successfully'));

        const rawUrl = process.env.MONGODB_URL || '';
        const cleanedUrl = rawUrl.replace(/\/+$/, ''); // remove trailing slashes

        // If MONGODB_URL already includes a database path, do not append /social again.
        const hasDatabase = cleanedUrl.match(/\/[^\/\?]+(\?|$)/);
        const connectionString = hasDatabase ? cleanedUrl : `${cleanedUrl}/social`;

        await mongoose.connect(connectionString);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default connectDB;