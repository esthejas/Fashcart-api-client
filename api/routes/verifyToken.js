const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token
    if (authHeader) {
        // const token = authHeader;
        const token = authHeader.split(" ")[1];
        // console.log(token);
        // console.log(authHeader+"hello");
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
            // console.log(user);
            if(err) res.status(403).json("Token is not valid!")
            // console.log(err);
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("You are not authenticated!")
    }
}

const verifyTokenAndAuthorisation = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
           next()
        }else{
            res.status(403).json("you are not allowed to do that")
        }
    })
}

const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        // console.log( req.user);
        if(req.user.isAdmin){
           next()
        }else{
            res.status(403).json("you are not allowed to do that")
        }
    })
}

module.exports = {verifyToken,
    verifyTokenAndAuthorisation,
    verifyTokenAndAdmin};