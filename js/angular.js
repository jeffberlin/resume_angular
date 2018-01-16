var app = angular.module('resume', []);

app.controller('myResume', function($scope) {
    $scope.myName = "Jeff" + " " + "Berlin";
    $scope.headLine = "Web Developer";
    $scope.email = "jeff@jbrally.com";
    $scope.phone = "(302) 463-5129";
    $scope.location = "North Myrtle Beach, SC";
    $scope.headingTitle = "Skills";
});