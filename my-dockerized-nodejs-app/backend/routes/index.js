const express = require('express');
const router = express.Router();

// GET home page
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Include other routes
router.use('/users', require('./users'));

module.exports = router;