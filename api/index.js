import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
import chatRouter from './routes/chat.route.js';
import messageRouter from './routes/message.route.js';
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser';
// import brokerRouter from './routes/broker.routes.js'
dotenv.config();

const mongoURI = process.env.MONGO;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB', err);
  });

const app = express();

app.use(express.json()); 

app.use(cookieParser());
app.use(cors());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);
app.use('/api/chats',chatRouter)
app.use('/api/messages',messageRouter)
// app.use('/api/broker',brokerRouter)
app.use((err,req, res,next) =>{
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  })
})