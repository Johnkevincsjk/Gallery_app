import mongoose from "mongoose";



const connect_DB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("DataBase connected successfully !!!")
    } catch (error) {
        console.log({
            Feedback: "DataBase is not connected",
            error
        })
    }
}

export default connect_DB