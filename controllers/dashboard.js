const path = require('path')

exports.dashBoard = async(req, res) => {
    const filePath = path.join(__dirname, '../', 'views','pages','dashboard.html')
    res.sendFile(filePath)
}