const logger = (req, res, next) => {
  console.log("ben bir middleware'im...");

  next();
};

module.exports = logger;
