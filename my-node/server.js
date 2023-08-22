const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const initWebRouter = require('./src/route/web') 
const { Sequelize } = require('sequelize');
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
initWebRouter.initWebRouter(app)

const sequelize = new Sequelize('phungquy', 'root', null, {
    host: 'localhost',
    dialect:  'mysql'
  })

  const connectDb = async() => {
    try {
      await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
connectDb()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})