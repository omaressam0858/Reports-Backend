import { Sequelize } from 'sequelize'
import { DATABASE_URL } from './config.js'

const sequelize = new Sequelize(DATABASE_URL,{
    logging: false
})

sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))

export default sequelize