const Supplier = require('../models/supplier');
const getManufacturers = async (req, res) => {
    try {
        const { location, nature_of_business, manufacturing_processes } = req.body;

        if (!location && !nature_of_business && (!manufacturing_processes || manufacturing_processes.length === 0)) {
            return res.status(400).json({ message: 'Please provide at least one search criterion.' });
        }

        const query = {};

        if (location) query.location = location;
        if (nature_of_business) query.nature_of_business = nature_of_business;
        if (manufacturing_processes && manufacturing_processes.length > 0) {
            query.manufacturing_processes = { $in: manufacturing_processes };
        }

        const manufacturers = await Supplier.find(query)
            .select('supplier_id company_name website location nature_of_business manufacturing_processes');

        res.status(200).json(manufacturers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = { getManufacturers };
