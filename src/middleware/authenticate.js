const jsw = require('jsonwebtoken')



const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "No Token Provided" });

    jwt.verify(token, "123", (err, decoded) => {
        if (err) return res.status(403).json({ message: "not Authorised" })
        req.userId = decoded.userId
        next()
    })
}

module.exports = authenticate