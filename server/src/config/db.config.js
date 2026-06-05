import mongoose from 'mongoose';
import dns from 'dns';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error('MONGODB_URI is not defined in your .env file');
    }

    // Force a reliable public DNS resolver for Atlas SRV lookups on Windows/local setups
    dns.setServers(['8.8.8.8', '8.8.4.4']);

    // Mongoose 9.x handles connection options automatically
    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
