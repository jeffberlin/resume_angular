var app = angular.module('resume', []);

app.controller('myResume', function($scope) {
	$scope.contact = "[phone, email]";
    $scope.firstName = "Jeff";
    $scope.lastName = "Berlin";

});