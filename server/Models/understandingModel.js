const mongoose = require('mongoose');

const understandingSchema = new mongoose.Schema({
    userId: String,
    understandingUser: String,
});

const understandingModel = mongoose.model('Understanding', understandingSchema);

module.exports = understandingModel;