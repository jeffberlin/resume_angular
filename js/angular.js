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

// Array for development skills
    $scope.developmentSkills = [
    	'HTML', 'CSS', 'Bootstrap', 'Foundation', 'Javascript', 'JQuery', 'KnockoutJS', 'React', 'AngularJS', 'PHP', 'JSON', 'AJAX', 'Jasmine', 'Python', 'Analytics', 'SQL', 'Postgres', 'GitHub', 'WordPress' 
    ];

// Array for design skills
    $scope.designSkills = [
    	'Photoshop', 'Illustrator', 'InDesign', 'Sketch'
    ];

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
			category: 'design',
			modalName: '#truBrochureModalCenter'
		},
		{
			title: 'Appalachian Slab & Timber',
			image: './images/app_st_logo.png',
			url: './images/applogo.jpg',
			category: 'design',
			modalName: '#appLogoModalCenter'
		},
		{
			title: 'Appalachian Slab & Timber',
			image: './images/app_brand_logo.png',
			url: './images/app_brandlogo.jpg',
			category: 'design',
			modalName: '#appBrandModalCenter'
		},
		{
			title: 'Wilmington Brew',
			image: './images/ilm_brew_logo-400.png',
			url: './images/ilm_brew_logo.jpg',
			category: 'design',
			modalName: '#ilmBrewModalCenter'
		}

	];

	// Removes projects from view 
	$scope.removeProjectItem = function(project, event, index) {
		$scope.projects.splice(index, 1);
	};

	// Active tab
	this.tab = 1;

	this.selectTab = function(setTab) {
		this.tab = setTab;
	};

	this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	};

	// Handles the portfolio tab change to ".active"
	$scope.header = document.getElementById("portfolio");
	$scope.activeTab = $scope.header.getElementsByClassName("filter");
	for (var i = 0; i < $scope.activeTab.length; i++) {
		$scope.activeTab[i].addEventListener("click", function() {
			$scope.current = document.getElementsByClassName("active");
			$scope.current[0].className = $scope.current[0].className.replace(" active", "");
			this.className += " active";
		});
	}

});



/* JQuery code for the smooth scrolling on nav item clicks */

$("#topcontrol").click(function() {
	$('html, body').animate({
		scrollTop: $("#top-page").offset().top
	}, 'slow')
})

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