var Mail = require('../models/mail.js');
module.exports = function (app) {
	 app.post('/mails', Mail.sendMail);
};