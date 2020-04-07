const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
},{
    timestamps: true // criação automática do created_at e updated_at
});

module.exports = mongoose.model('File', File);