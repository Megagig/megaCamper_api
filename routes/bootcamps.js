const express = require('express');
//initialize the router
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Show all bootcamps' });
});

router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Get  bootcamp ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.status(200).json({ success: true, message: 'create new  bootcamps' });
});

router.put('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Update  bootcamp ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `Delete  bootcamps ${req.params.id}` });
});

module.exports = router;
