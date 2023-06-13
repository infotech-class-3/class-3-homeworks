const logger = (req, res, next) => {
    console.log("Middleware olarak burdayim");

    next();
}

module.exports = logger;