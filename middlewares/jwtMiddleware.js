const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    console.log("inside jwtmiddleware");
    const token = req.headers['authorization'].split(" ")[1]
    console.log(token);
    if (token) {
        try {
            const jwtResponse = jwt.verify(token, process.env.JWTPASSWORD)
            console.log(jwtResponse);
            req.userId = jwtResponse.userId
            next()
        } catch (error) {
            res.status(401).json("Authorisation Failed... Please Login!!!")
        }
    } else {
        res.status(404).json("Authorization Failed... token is missing!!!")
    }
}

module.exports = jwtMiddleware