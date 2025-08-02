import mongoose from 'mongoose';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const connectDB = async (retries = 5, delayMs = 2000) => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error('❌ MONGO_URI not defined in environment');
    process.exit(1);
  }

  for (let i = 0; i < retries; i++) {
    try {
      await mongoose.connect(uri, {
        serverSelectionTimeoutMS: 5000,
        maxPoolSize: 10,
      });

      console.log('✅ MongoDB connected successfully');
      break;
    } catch (error) {
      console.error(`❌ MongoDB connection attempt ${i + 1} failed:`, error.message);

      if (i === retries - 1) {
        console.error('❌ All connection attempts failed. Exiting...');
        process.exit(1);
      }

      console.log(`🔁 Retrying in ${delayMs / 1000}s...`);
      await delay(delayMs);
    }
  }

  mongoose.connection.on('disconnected', () => {
    console.warn('⚠️ MongoDB disconnected');
  });

  process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('👋 MongoDB connection closed on app termination');
    process.exit(0);
  });
};

export default connectDB;
