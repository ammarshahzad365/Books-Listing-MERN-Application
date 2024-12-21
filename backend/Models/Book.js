const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true
  },
  title: {
    type: String
  },
  isbn: {
    type: String
  },
  pageCount: {
    type: Number
  },
  shortDescription: {
    type: String
  },
  authors: {
    type: Array
  },
  categories: {
    type: Array
  }
}, {
    collection: 'book'
  })

module.exports = mongoose.model('Book', bookSchema)