const express = require('express');
const router = express.Router()

const contactController = require('../controller/contact')
router.route('/')
.get(contactController.getContactUsController)
.post(contactController.postContactUsController)

module.exports = router