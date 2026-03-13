const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const stayRoutes = require('./routes/stayRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/stays', stayRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));