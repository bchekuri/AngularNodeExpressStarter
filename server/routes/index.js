var express = require('express');

module.exports = function (){
    var router = express.Router();
    require('./health.routes')(router);
    require('./employee.routes')(router);
    require('./executeperl.routes')(router);
    return router;
}
