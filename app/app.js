import express from 'express'
import mainRouter from './routers/index.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api',mainRouter)


export default app