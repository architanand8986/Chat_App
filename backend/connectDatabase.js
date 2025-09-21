const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

const connectDatabase = async () => {
    if (!MONGO_URL) {
        console.error('MONGO_URL is not defined in environment variables');
        process.exit(1);
    }

    try {
        await mongoose.connect(MONGO_URL);
        console.log('✅ Database connected successfully');
        console.log(`📊 Connected to: ${mongoose.connection.db.databaseName}`);
    } catch (error) {
        console.error('❌ Database connection error:', error.message);
        process.exit(1);
    }

    // Handle connection events
    mongoose.connection.on('disconnected', () => {
        console.log('📡 Database disconnected');
    });

    mongoose.connection.on('error', (err) => {
        console.error('❌ Database error:', err);
    });
}

module.exports = connectDatabase;