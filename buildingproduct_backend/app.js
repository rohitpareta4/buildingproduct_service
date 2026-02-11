import express from 'express'
import  dotenv  from 'dotenv'
import connecttodb from './lib/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import auth from './routes/auth.js'
import hospital from './routes/hospital.js'
import user from './routes/user.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

const app=express()



dotenv.config()

console.log('✅ MONGODB_URI:', process.env.MONGODB_URI);
console.log('✅ PORT:', process.env.PORT);
console.log('✅ JWT_SECRET:', process.env.JWT_SECRET);


app.use(cors(
    {
 origin:"https://buildingproduct-service-rayd.vercel.app/",
  methods: ["GET", "POST" ,'PUT', 'DELETE', 'PATCH'],
  credentials: true
    }
))
app.use('/public',express.static(path.join(__dirname,"public")))

app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('hey from express server...')
})

app.use('/api/auth',auth)
app.use('/api/hospital',hospital)
app.use('/api/user',user)

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

