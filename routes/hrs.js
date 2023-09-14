const express = require('express')
const router = express.Router()

const hrsController = require('../controllers/hrs')

router.get('/', hrsController.userList)

module.exports = router