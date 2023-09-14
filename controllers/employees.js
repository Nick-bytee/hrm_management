const path = require('path')

exports.employees = async(req, res) => {
    const filePath = path.join(__dirname, '../', 'views','pages','employees.html')
    res.sendFile(filePath)
}

exports.editEmployee = async(req, res) => {
    const filePath = path.join(__dirname, '../', 'views','pages','employeeDetails.html')
    res.sendFile(filePath)
}