var app = angular.module('resume', []);

app.controller('myResume', function($scope) {
    $scope.firstName = "Jeff";
    $scope.lastName = "Berlin";
    $scope.headLine = "Web Developer";
});