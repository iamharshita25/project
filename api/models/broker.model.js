const mongoose = require('mongoose');

const brokerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    experience: { type: Number, required: true },
    about: { type: String, required: true },
}, { timestamps: true });

const Broker = mongoose.model('Broker', brokerSchema);

module.exports = Broker;
