const express = require('express')
const path = require('path')
const cors = require('cors')
const { json, urlencoded } = require('body-parser');
const sequelize = require('./utils/database')

const app = express()
const port = 8082

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors())

app.use(express.static(path.join(__dirname,'views','assets','css')));
app.use(express.static(path.join(__dirname,'views','assets','fonts')));
app.use(express.static(path.join(__dirname,'views','assets','img')));
app.use(express.static(path.join(__dirname,'views','assets','js')));
app.use(express.static(path.join(__dirname,'dom')));


const loginRoutes = require('./routes/login')
const dashboardRoutes = require('./routes/dashboard')
const employeeRoutes = require('./routes/employees')
const hrsRoutes = require('./routes/hrs')

app.use('/users', hrsRoutes)
app.use('/user', loginRoutes)
app.use('/dashboard', dashboardRoutes)
app.use('/employees', employeeRoutes)
app.use('/edit', (req, res) => {
    const filePath = path.join(__dirname, 'views','pages','employeeDetails.html')
    res.sendFile(filePath)
})

app.use('/add', (req, res) => {
    const filePath = path.join(__dirname, 'views','pages','addEmployee.html')
    res.sendFile(filePath)
})

app.use('/', (req, res) => {
    const filePath = path.join(__dirname, 'views','pages','sign-in.html')
    res.sendFile(filePath)
})

sequelize.sync().then(() => {
    console.log(`app is running on port ${port}`)
    app.listen(port)
})