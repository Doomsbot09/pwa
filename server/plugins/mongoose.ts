import mongoose from 'mongoose';

export default async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.error('❌ Missing MONGODB_URI');
    return;
  }

  const config = {
    dbName: 'mydb', // Change to your DB name
  };

  try {
    await mongoose.connect(process.env.MONGODB_URI, config);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
};
