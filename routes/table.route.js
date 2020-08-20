const { Router } = require('express');
const testArr = require('../convert');
const router = new Router();
const arr = testArr;

router.get('/get_table', (req, res) => {
  res.json(arr)
})

module.exports = router;