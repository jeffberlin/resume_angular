var app = angular.module('resume', []);

app.controller('myResume', function($scope, $document) {
    //$scope.myName = "Jeff" + " " + "Berlin";
    $scope.myName = function() {
    	return "Jeff" + " " + "Berlin"
    };
    $scope.headLine = "Web Developer";
    $scope.email = "jeff@jbrally.com";
    $scope.phone = "(302) 463-5129";
    $scope.location = "North Myrtle Beach, SC";
});

/* JQuery code for the smooth scrolling on nav item clicks */

$("#skills-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#skills").offset().top
	}, 'slow')
})

$("#experience-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#experience").offset().top
	}, 'slow')
})

$("#education-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#education").offset().top
	}, 'slow')
})

$("#portfolio-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#portfolio").offset().top
	}, 'slow')
})

// Code for portfolio modal's

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})