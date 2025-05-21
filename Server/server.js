import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './routes/user.js';
import whitelabelRouter from './routes/whiteLabel.js';
import prooftypeRouter from './routes/prooftype.js';
import sportsRouter from './routes/sports.js';
import marketRouter from './routes/market.js';
import bodyParser from 'body-parser';
import clientRouter from './routes/client.js';

const app = express();

app.use(bodyParser.json({ limit: '100mb' })); 
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  })
);

app.use('/uploads', express.static('uploads'));
// app.use('/uploads', express.static('uploads'));

app.use(express.json());

app.use('/user', userRouter);

app.use('/whitelabel', whitelabelRouter);

app.use('/prooftype', prooftypeRouter);

app.use('/sports', sportsRouter);

app.use('/market', marketRouter);

app.use('/client', clientRouter)

const PORT = 2030;

mongoose
  .connect('mongodb://127.0.0.1:27017/SpeedLine')
  .then(() => {
    console.log('MongoDB Connected Successfully...!');
    app.listen(PORT, async () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB Connection Error:', err));