const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB Database connected')
    } catch (error) {
        console.log('Database connection error')
    }
}

module.exports = connectDB;