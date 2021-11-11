const mongoose = require('mongoose') // import mongoose module

// subscriber schema
const subscriberSchema = new mongoose.Schema({
  name: String,
  email: String,
  dateSigned: String
})

module.exports = mongoose.model('subscriber', subscriberSchema) // export mongoose