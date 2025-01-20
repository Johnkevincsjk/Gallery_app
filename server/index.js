import express from 'express'
import dotenv from 'dotenv'
import connect_DB from './Config.js'
import cors from 'cors'
import Router from './Routes/uploadRoute.js'
dotenv.config()
const APP = express()
APP.use(express.json())
APP.use(cors())
APP.use(express.static('public'))
connect_DB()
APP.use('/api', Router)
APP.listen(process.env.PORT, () => {
    console.log(`The app is running on ${process.env.PORT}`)
})