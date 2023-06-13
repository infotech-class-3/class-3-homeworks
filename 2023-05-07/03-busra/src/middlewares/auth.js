const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
    const headerAuth = req.headers["authorization"];
    if(!headerAuth){
        return res.status(403).json({message: "no token data."});
    }
    const token = headerAuth.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, data)=>{
        if(err){
            return res.status(403).json({message: "Unautorised user...", err });

        };

        next();
    })
};

module.exports=auth;