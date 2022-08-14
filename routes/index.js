const express = require('express')
app = express()
const router = express.Router()



//! adding user to database
// middleware 
const addUserMiddleware = require('../middleware/index')
// controller 
const addUserController = require('../controller/index')
// router.post('/add-user', addUserMiddleware, addUserController.addUser);
router.get('/add-user', addUserMiddleware, addUserController.addUser);


//! contacts 
// middleware
const contactMiddleware = require('../middleware/contact')
// controller
const contactController = require('../controller/contact')
router.get('/contact', contactController.contactController)

module.exports = router