config = require('config');
var multer  = require('multer');

function executePerlScript(req, res) {
    var storage = multer.diskStorage({
        destination: function(req, file, callback) {
            callback(null, 'C:\BCheks\private-git-repo\AngularNodeExpressStarter');
        },
        filename: function(req, file, callback) {
            callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    });

    var upload = multer({
		storage: storage
	}).single('userFile');

    upload(req, res, function(err) {
		res.send('File is uploaded');
	});

}


module.exports = {
    executePerlScript
}