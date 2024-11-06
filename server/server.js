require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const limiter = require('./Middlewares/rateLimitMiddleware');
const rollRoutes = require('./routes/rollRoute');
const dobRoutes = require('./Routes/dobRoute');
const feeRoutes = require('./Routes/feeRoute');
const paymentRoutes = require('./Routes/paymentRoute');

const app = express();

// CORS configuration
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};

// Apply CORS and JSON body parser middleware
app.options('*', cors(corsOptions)); // Preflight requests
app.use(cors(corsOptions));
app.use(express.json());
app.use(limiter);

// Connect to the database
connectDB();

// Define routes
app.use('/v1/api/roll', rollRoutes);
app.use('/v1/api/dob', dobRoutes);
app.use('/v1/api/fee', feeRoutes);
app.use('/v1/api/razor/payment', paymentRoutes);
app.use("/v1/api/razor/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);

// Export the app for Vercel to use as a serverless function
module.exports = app;