const express = require('express');
const { postDatum, getData, getDatum } = require('../controller/controller');

const router = express.Router();
router.route('/').get(getData).post(postDatum);

module.exports = router;
