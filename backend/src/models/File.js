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
    timestamps: true, // criação automática do created_at e updated_at.
    toObject: {virtuals: true},
    toJSON:{ virtuals:true }
});

File.virtual('url').get(function(){
    const url = process.env.URL || 'http://192.168.0.106:3333'
    return `${url}/files/${encodeURIComponent(this.path)}`
})

module.exports = mongoose.model('File', File);