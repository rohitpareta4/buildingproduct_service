import mongoose from 'mongoose'

const connecttodb=async()=>{
   try {
    const conn=await mongoose.connect(process.env.MONGODB_URI)
    console.log('connect to db...',conn.connection.host)
   } catch (error) {
    console.log('error...',error)
   }
}
export default connecttodb