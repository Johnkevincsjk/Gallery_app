import express from 'express'
import upload_middleware from '../middlewares/multerMiddleware.js'
import upload_model from '../models/uploadModel.js'
const Router = express.Router()
Router.get('/get', async (req,res) => {
    const getallphotos = await upload_model.find().sort({ createdAt: 'descending' })
    res.send(getallphotos)
})
Router.post('/save', upload_middleware.single('photo'), (req, res) => {
    const photo = req.file.filename

    console.log(photo)
    upload_model.create({ photo }).then((res) => {
        console.log("file uploaded succesfully")
        console.log(photo)
        res.send(data)
    }).catch((err) => {
        console.log(err)
    })
})

export default Router