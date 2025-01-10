const fs = require("fs");

const logReqRes = (filename) => {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `${Date.now()}: ${req.method}: ${req.path}: ${req.ip}\n`,
      (error, data) => {
        console.log("hello from middleware");
        next();
      }
    );
  };
};

module.exports = logReqRes;
