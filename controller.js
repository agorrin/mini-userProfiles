var app = angular.module('userProfiles');
.controller('MainController', 'mainService', function($scope, mainService)	{

	$scope.getUsers = function()	{
		$scope.users = mainService.getUsers();
	}

	$scope.getUsers();
});