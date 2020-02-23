let homeMessage = (req, res) => {
    res.status(200).json({
        status: 200,
        message: "welcome to paple api you will need to add /api/v1 to work with api"
    })
}

module.exports = {
    homeMessage
}