function mainController($scope, $rootScope, $http, mailService) {


	$scope.testSendMail = function () {
		 mailService.sendMail({ msg:'test'});
	}


}