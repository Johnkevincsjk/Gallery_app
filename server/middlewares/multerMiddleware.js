import multer from 'multer'
import { v4 as uudiv4 } from 'uuid'
import path from 'path'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${uudiv4()}_${path.extname(file.originalname)}`)
    }
})

const filefilter = (req, file, cb) => {
    const allowed_file = ['image/jpeg', 'image/jpg', 'image/png']

    if (allowed_file.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload_middleware = multer({ storage, filefilter })

export default upload_middleware