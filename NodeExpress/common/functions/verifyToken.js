//verify token
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== "undefined") {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // get token from array
        const bearerToken = bearer[1];
        req.token = bearerToken;
        //next middleware
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = verifyToken;