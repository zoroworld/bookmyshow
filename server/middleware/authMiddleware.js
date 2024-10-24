const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    //get the token
    //verify the token
    //get the user out of token

    // console.log(req.headers.authorization);
    try{
      const token = req.headers.authorization.split(" ")[1];
      //for verify the token  jwt.verify(token, secret key);
      const verifyToken = jwt.verify(token, 'bookMyShow_BMS');
      //   console.log(verifyToken);
      req.body.userId = verifyToken.userId;

      next();
      
    } catch(error)
    {
        res.status(401).send({
            success: false,
            message: "Token Invalid"
        })
    }
    
}