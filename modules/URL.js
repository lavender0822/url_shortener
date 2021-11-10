const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
    shortURL: { type: String, require: ture },
    originaURL: { type:String, require: ture },
})

module.exports = mongoose.model('URL',urlSchema)