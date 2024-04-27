const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: './config/config.env' });

// Initialize express app

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, message: 'Show all bootcamps' });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Get  bootcamp ${req.params.id}` });
});

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, message: 'create new  bootcamps' });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Update  bootcamp ${req.params.id}` });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Delete  bootcamps ${req.params.id}` });
});

// Define port
const PORT = process.env.PORT || 5000;

// Start server

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
