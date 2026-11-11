const express = require('express');
const cors = require('cors');
require('dotenv').config();

const placeRoutes = require('./routes/placeRoutes');

const app = express();

// Middleware
app.use(cors()); // Allows cross-origin requests from the React frontend
app.use(express.json()); // Parses incoming JSON payloads

// API Routes
app.use('/api/places', placeRoutes);

// Server execution
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});