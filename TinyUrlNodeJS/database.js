import mongoose from "mongoose"

const uriLocal = process.env.DB_URI

const connectDB = async () => {
    await mongoose.connect(uriLocal)
};

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

database.set('toJson', {
    virtuals: true,
    transform: (doc, converted) => {
        delete converted._id;
    }
})

export default connectDB;