const express = require('express');
const Broker = require('../models/broker.model.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const brokers = await Broker.find();
        res.json(brokers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const { name, age, experience, about } = req.body;
    const newBroker = new Broker({
        name,
        age,
        experience,
        about
    });

    try {
        const broker = await newBroker.save();
        res.json(broker);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
