const jwt =require('jsonwebtoken');

// middleware yazma islemi------------------

const auth = (req, res, next) => {

    //jwt isleminin yapilmasi.......
    const headerAuth = req.headers["authorization"];//req teki headers in altindaki autorization altinda token i almak icin
    if (!headerAuth) {
        return  res.status(403).json({message:"Has no token"});
    }
    const token = headerAuth.split(" ")[1];// split ile bosluklu array'in ikinci elemani token
    
    //const user = req.body;
    jwt.verify(token, process.env.ACCESS_TOKEN, (err,data) =>{
        if(err) {
            return  res.status(403).json({message:"unautherized person", err});
        }
        next();
    });
}

module.exports = auth;