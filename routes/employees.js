const express = require('express')
const router = express.Router()

const employeesController = require('../controllers/employees')

router.get('/', employeesController.employees)

router.get('/editEmployee', employeesController.employees)

module.exports = router