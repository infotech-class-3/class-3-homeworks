
const logger = (req, res, next) =>{
    console.log("ben bir middlewera im.");
    next();
};

module.exports = logger;