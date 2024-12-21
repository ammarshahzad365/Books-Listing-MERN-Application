let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Student Model
let bookSchema = require('../Models/Book')

// CREATE Student
router.route('/create-book').post((req, res, next) => {
  bookSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ Students
router.route('/').get((req, res) => {
  bookSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Student
router.route('/view-book/:id').get((req, res) => {
  bookSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-book/:id').put((req, res, next) => {
  bookSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error)
        return next(error)
      } else {
        res.json(data)
        console.log('Book updated successfully !')
      }
    },
  )
})

// Delete Book
router.route('/delete-book/:id').delete((req, res, next) => {
  bookSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      console.log(error)
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
