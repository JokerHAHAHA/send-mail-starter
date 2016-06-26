// SERVICE MAIL
function mailService ($http) {
	 return {
	 	sendMail: function (data) {
	 		return $http.post('/mails', data); 
	 	}
	 }; 
}