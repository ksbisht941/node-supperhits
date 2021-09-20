exports.getAllUser = (req, res) => {
    res.status(200).json({
        code: "0",
        status: "success",
        message :"Fetch User List Successfully"
    })
}