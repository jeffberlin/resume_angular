var app = angular.module('resume', []);

app.controller('resumeCtrl', function($scope, $document) {
    //$scope.myName = "Jeff" + " " + "Berlin";
    $scope.myName = function() {
    	return "Jeff" + " " + "Berlin"
    };
    $scope.headLine = "Web Developer";
    $scope.email = "jeff@jbrally.com";
    $scope.phone = "(302) 463-5129";
    $scope.location = "North Myrtle Beach, SC";

// Projects array to display images and info. Modal info is located in index.html
    $scope.projects = [
		{
			title: 'TRU Colors Brewing Co.',
			image: './images/tcb_screenshot.png',
			url: 'https://www.trucolors.co',
			category: ['development', 'design'],
			modalName: '#truBrochureModalCenter'
		},
		{
			title: 'JOMO',
			image: './images/jomo_screenshot.png',
			url: 'https://jeffberlin.github.io/JOMO_website/index.html',
			category: 'development',
			modalName: '#JomoHomeModalCenter'
		},
		{
			title: 'JOMO Charlotte Giveaway',
			image: './images/jomo_charlotte_screenshot.png',
			url: 'https://jeffberlin.github.io/JOMO_website/charlotte.html',
			category: 'development',
			modalName: '#JomoCharlotteModalCenter'
		},
		{
			title: 'JOMO Campus Rep',
			image: './images/jomo_rep_screenshot.png',
			url: 'https://jeffberlin.github.io/JOMO_website/rep.html',
			category: 'development',
			modalName: '#JomoRepModalCenter'
		},
		{
			title: 'Wilmington Breweries',
			image: './images/wilm_brew_screenshot.png',
			url: 'https://jeffberlin.github.io/Wilmington-Breweries/',
			category: ['development', 'design'],
			modalName: '#wilmBrewModalCenter'
		},
		{
			title: 'JBR',
			image: './images/jbrally_screenshot.png',
			url: 'http://jbrally.com/',
			category: ['development', 'design'],
			modalName: '#jeffBerlinRallyModalCenter'
		},
		{
			title: 'Movie Trailers',
			image: './images/movie_trailers_screenshot.png',
			url: 'ttps://jeffberlin.github.io/Movie_Trailer_python/fresh_tomatoes.html',
			category: 'development',
			modalName: '#movieTrailerModalCenter'
		},
		{
			title: 'Frogger Javascript Game',
			image: './images/frogger_screenshot.png',
			url: 'https://jeffberlin.github.io/Frogger-JavaScript/',
			category: ['development', 'design'],
			modalName: '#froggerModalCenter'
		},
		{
			title: 'Javascript Resume',
			image: './images/javascript_resume_screenshot.png',
			url: 'https://jeffberlin.github.io/javascript-resume/',
			category: ['development', 'design'],
			modalName: '#resumeModalCenter'
		},
		{
			title: 'TCB Brochure',
			image: './images/tcb_brochure.png',
			url: './images/tru-colors-brochure.pdf',
			category: ['development', 'design'],
			modalName: '#truBrochureModalCenter'
		}

	];

	// this.items = projects;
	this.tab = 1;
	this.filterText = '';

	this.select = function(setTab) {
		this.tab = setTab;
		if (setTab === 2)
			this.filterText = "development";
		else if (setTab === 3)
			this.filterText = "design";
		else
			this.filterText = "";
	}

	this.isSelected = function(checkTab) {
		return (this.tab === checkTab);
	}

	// $scope.filterBy = function(setTab) {
	// 	$scope.userOrderBy = setTab;
	// }
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