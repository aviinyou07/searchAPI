const express = require('express');
const mongoose = require('mongoose');
const supplierRoutes = require('./routes/supplier');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

// Db conn
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Failed to connect MongoDB', err);
    }
};

connectDb();

// routes
app.use('/api/supplier', supplierRoutes);

// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
