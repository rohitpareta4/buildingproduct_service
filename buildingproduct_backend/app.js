import express from 'express'
import  dotenv  from 'dotenv'
import connecttodb from './lib/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import auth from './routes/auth.js'
import hospital from './routes/hospital.js'


const app=express()

dotenv.config()

app.use(cors(
    {
 origin:"http://localhost:3000",
  methods: ["GET", "POST" ,'PUT', 'DELETE', 'PATCH'],
  credentials: true
    }
))

app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('hey from express server...')
})

app.use('/api/auth',auth)
app.use('/api/hospital',hospital)

const port=process.env.PORT


const startServer = async () => {
  try {
    await connecttodb(); // Connect to MongoDB
   app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
  } catch (err) {
    console.error('Failed to start server:', err);
  }
};

startServer();

