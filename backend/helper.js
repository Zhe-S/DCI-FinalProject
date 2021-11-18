const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    console.log(req.session)
    next()
    //TODO Authenticate with jwt and express passport session
    // try {
    //     var decoded = jwt.verify(req.headers.authorization, '88882bc9n5739025739rcuinoewhsrjksehfjksef');
    //     if (req.session.userId === decoded.userId) {
    //         next()
    //     }

    // } catch (error) {
    //     console.log(error)
    //     res.status(500).send(err)
    // }
}
module.exports = { authenticate }