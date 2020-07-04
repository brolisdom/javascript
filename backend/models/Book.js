const { Schema, model } = require('mongoose')

const BookSchema = new Schema({
    _title: { type: String, required: true },
    _author: { type: String, required: true},
    _isbn: { type: String, required: true},
    _imagePath: { type: String },
    _createdAt: { type: Date, default: Date.now }
})

module.exports = model('Book', BookSchema)