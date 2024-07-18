const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
