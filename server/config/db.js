import mongoose from 'mongoose';
import colors from 'colors';
export const connectDB=async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI)
     console.log(`Connected to Mongodb database ${mongoose.connection.host}`.bgGreen.white)
} catch (error) {
    console.log(`Mongdb connection Error ${error}`.bgRed.white)
  }
}

//module.exports=connectDB