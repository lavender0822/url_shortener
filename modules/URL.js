const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
    shortURL: { type: String, require: true },
    originaURL: { type: String, require: true },
})

module.exports = mongoose.model('URL', urlSchema)