import mongoose from "mongoose";


const uploadSchema = new mongoose.Schema({
    photo: {
        type: String,
        requred: true
    },

},
    {
        timestamps: true
    }
)

const upload_model = mongoose.model("upload", uploadSchema)

export default upload_model