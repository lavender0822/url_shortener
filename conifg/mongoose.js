const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/url-shortener',  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
const db = mongoose.connection

db.on('error', () => console.error('mongoose error!'))
db.once('open', () => console.log('mongoose connected!'))

module.exports = db