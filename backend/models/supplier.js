const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    supplier_id: { type: String, required: true, unique: true },
    company_name: { type: String, required: true },
    website: { type: String },
    location: { type: String, required: true },
    nature_of_business: { type: String, enum: ['small_scale', 'medium_scale', 'large_scale'], required: true },
    manufacturing_processes: { type: [String], enum: ['moulding', '3d_printing', 'casting', 'coating'], required: true }
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
