module.exports = (req, res, next) => {
    if (req.headers["x-forwarded-proto"] == "https")
        next()
    else 
        res.redirect("https://" + req.headers.host + req.originalUrl)
}