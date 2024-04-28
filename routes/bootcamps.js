const express = require('express');

//import the bootcamp controller
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require('../controllers/bootcamps');
const router = express.Router();

//route to get all bootcamps
router.route('/').get(getBootcamps).post(createBootcamp);

//route to get a single bootcamp
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
