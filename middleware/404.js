module.exports = function notFoundHandler(req, res, next){
    res.status(404).send("Error 404: Sarcasm module has not been found.");
};