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

// Array for Work Experience
	$scope.workExperience = [
		{
			jobTitle: 'UI/UX Developer (Contractor)',
			workDate: 'December 2017 - Present',
			company: 'TRU Colors Brewing Co.',
			companyURL: 'https://www.trucolors.co',
			workLocation: 'Wilmington, NC',
			jobDescription: 'A local startup that will ultimately be run and operated by active gang members - working together to end gang-on-gang violence in our area, this company reached out to me to handle their developer and certain design needs. My primary responsiblities was creating their company website, consulting on ad design questions, and creating their brochure to distribute to potential partners. The technology I used to handle the work consists of HTML, CSS, Bootstrap, Javascript, JQuery, Photoshop, InDesign, Illustrator, and Sketch.'
		},
		{
			jobTitle: 'Frontend Web Developer',
			workDate: 'January 2017 - December 2017',
			company: 'JOMO, Inc.',
			companyURL: 'https://jeffberlin.github.io/JOMO_website/index.html',
			workLocation: 'Wilmington, NC',
			jobDescription: 'JOMO was a local mobile app startup, where I was in charge of creating and maintaining their website and additional webpages. Aside from creating, updating, and maintaining the website, I was heavily involved in the daily graphic work that was used for advertising and website content. To create the website and ads, I relied on HTML, CSS, Bootstrap, Javascript, JQuery, Branch.io, Photoshop, Illustrator, and Sketch.'
		},
		{
			jobTitle: 'Operations Manager',
			workDate: 'September 2015 - January 2017',
			company: 'No Limit Customs',
			workLocation: 'North Myrtle Beach, SC',
			jobDescription: 'Even though No Limit is a custom automotive shop, I was in charge of project scheduling, handling online sales, shipments, and also created the designs for the images used in online stores and ads.'
		},
		{
			jobTitle: 'Parts Associate',
			workDate: 'July 2014 - June 2015',
			company: 'Hadwin-White Buick, GMC, Subaru',
			workLocation: 'Conway, SC',
			jobDescription: 'Worked closely with the Parts Manager to ensure we were being as efficient and accurate as possible with our work. I handled all shipments, ordering, and assisting co-workers and customers with any parts needs.'
		},
		{
			jobTitle: 'Night Manager',
			workDate: 'September 2007 - July 2014',
			company: 'J & P Management, Inc., DBA Jersey Mike\'s',
			workLocation: 'North Myrtle Beach, SC',
			jobDescription: 'Assigned duties for co-workers to have completed by the end of the shift, counted the money at the end of the shift, and handled any issues that may arise.'
		}
	];

// Array for Education
	$scope.education = [
		{
			schoolName: 'Udacity',
			schoolURL: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
			course: 'Front-end Web Development - Nanodegree',
			date: 'August 2016 - March 2017',
			courseInfo: 'Through this Front-end Developer program, I learned how to become proficient using HTML, CSS, and Javascript. Some of the tools, skills, and languages I had to use in order to properly complete the course projects were: DOM manipulation, browser leveraging, Knockoutjs, Google Maps API, Pagespeed insights, responsive web design, and Jasmine Unit Testing.'
		},
		{
			schoolName: 'Udacity',
			schoolURL: 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004',
			course: 'Full Stack Development - Nanodegree',
			date: 'In Progress',
			courseInfo: 'This online programming course gave me experience working with Python, SQL, and Postgres.'
		},
		{
			schoolName: 'Udacity',
			schoolURL: 'https://www.udacity.com',
			course: 'React Development - Nanodegree',
			date: 'In Progress',
			courseInfo: 'Learning the in\'s and out\'s of the React framework and then we will be learning Redux and React Native through this course.'
		},
		{
			schoolName: 'Horry-Georgetown Technical College',
			schoolURL: '',
			course: 'Digital Arts, A.S.',
			date: 'In Progress',
			courseInfo: 'After taking a few graphic design classes, I became familiar with programs that include Adobe Photoshop, Illustrator, InDesign, and Sketch. These courses lead to my interest in learning how to code.'
		}
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