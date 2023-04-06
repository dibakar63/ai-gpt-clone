import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import colors from 'colors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
//routes path
import authRoute from './routes/authRoute.js'
import errorHandler from './middlewares/errorMiddleware.js';
import aiRoutes from './routes/openaiRoutes.js'
dotenv.config()
connectDB()
 const PORT=process.env.PORT || 8080
//rest object
const app=express()

//middlewares
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(errorHandler)

//routes
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/openai',aiRoutes)

//listen server
app.listen(PORT,()=>{
    console.log(`Server running on mode ${process.env.DEV_MODE} port ${process.env.PORT}`.bgCyan.white)
})