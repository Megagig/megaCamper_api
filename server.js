const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

//require the bootcamps file, which contains all the routes
const bootcamps = require('./routes/bootcamps');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Initialize express app

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// Define port
const PORT = process.env.PORT || 5000;

// Start server

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
