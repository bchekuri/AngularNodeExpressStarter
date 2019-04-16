var executePerlController = require('../controllers/executeperl.controller');



module.exports = function (router) {

    /**
     * Employee list
     */
    router.post('/executeperl', function(req, res, next) {
        executePerlController.executePerlScript(req, res);
    });
};