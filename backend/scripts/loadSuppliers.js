const mongoose = require('mongoose');
const Supplier = require('../models/supplier');
const fs = require('fs');

const uri = process.env.MONGODB_URI;

const loadSuppliers = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB');

        const data = JSON.parse(fs.readFileSync('supplierDetail.json', 'utf-8'));

        await Supplier.deleteMany({}); 
        await Supplier.insertMany(data);

        console.log('Suppliers data loaded successfully');
    } catch (err) {
        console.error('Error loading suppliers data:', err);
    } finally {
        mongoose.disconnect();
    }
};

loadSuppliers();
