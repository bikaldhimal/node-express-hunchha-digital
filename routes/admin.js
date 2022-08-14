const express = require('express')

const router = express.Router();

//! Get admin panel
const adminPanelController = require('../controller/admin')
router.get('/', adminPanelController.getAdmin)

module.exports = router