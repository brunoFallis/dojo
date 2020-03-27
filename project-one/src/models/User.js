const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        min: 1
    },
    age: {
        type: Number,
        min: 1
    }
});

module.exports = mongoose.model('User', schema)