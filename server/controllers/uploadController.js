

export const upload_controller = async (req, res) => {
    try {


        return res.status(200).json({
            Feedback: "Uploaded controller"
        })
    } catch (error) {
        return res.status(500).json({
            Feedback: "Something went wrong",
            error
        })
    }
}