const logger = (req, res, next) =>{
    console.log("Burasi Middleware bolgesi");
    next();
};

module.exports = logger;