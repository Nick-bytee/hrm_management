const path = require('path')

exports.userList = async(req, res) => {
    const filePath = path.join(__dirname, '../', 'views','pages','users.html')
    res.sendFile(filePath)
}