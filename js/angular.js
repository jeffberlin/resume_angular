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
		// next lines are to handle the pop-up modals
			modalName: 'TruColorsSiteModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'TruColorsSiteModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'TruColorsSiteModalLongTitle',
		// title to display in the modal
			modalTitleName: 'TRU Colors Brewing Website',
		// body inside the modal
			modalBody: 'Built using HTML, CSS, Bootstrap 3, Javascript, and JQuery.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
		{
			title: 'JOMO',
			image: './images/jomo_screenshot.png',
			url: 'https://jeffberlin.github.io/JOMO_website/index.html',
			category: 'development',
		// next lines are to handle the pop-up modals
			modalName: 'JomoHomeModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'JomoHomeModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'JomoHomeModalLongTitle',
		// title to display in the modal
			modalTitleName: 'JOMO\'s Homepage',
		// body inside the modal
			modalBody: 'Built using HTML, CSS, Bootstrap 3, Javascript, JQuery, and Branch.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
		{
			title: 'JOMO Charlotte Giveaway',
			image: './images/jomo_charlotte_screenshot.png',
			url: 'https://jeffberlin.github.io/JOMO_website/charlotte.html',
			category: 'development',
		// next lines are to handle the pop-up modals
			modalName: 'JomoCharlotteModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'JomoCharlotteModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'JomoCharlotteModalLongTitle',
		// title to display in the modal
			modalTitleName: 'JOMO\'s Charlotte Giveaway Page',
		// body inside the modal
			modalBody: 'Built using HTML, CSS, Bootstrap 3, Javascript, JQuery, Branch, and Vimeo embedding.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
		{
			title: 'JOMO Video Fade-out',
			image: './images/video_fade_green_400.jpg',
			url: './images/video_fade_green.jpg',
			category: 'design',
		// next lines are to handle the pop-up modals
			modalName: 'JomoFadeOutModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'JomoFadeOutModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'JomoFadeOutModalLongTitle',
		// title to display in the modal
			modalTitleName: 'JOMO Prizes Video Fade-Out',
		// body inside the modal
			modalBody: 'Created for the JOMO prize giveaway videos to be used as the fade-out screen for each video. This was made using Adobe Photoshop and Illustrator.',
		// handles the link description in modal
			modalViewType: 'Image'
		},
		{
			title: 'JOMO Campus Rep',
			image: './images/jomo_rep_screenshot.png',
			url: 'https://jeffberlin.github.io/JOMO_website/rep.html',
			category: 'development',
		// next lines are to handle the pop-up modals
			modalName: 'JomoRepModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'JomoRepModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'JomoRepModalLongTitle',
		// title to display in the modal
			modalTitleName: 'JOMO\'s Campus Rep Page',
		// body inside the modal
			modalBody: 'Built using HTML, CSS, Bootstrap 3, Javascript, JQuery, Formspree, and Branch.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
		{
			title: 'Wilmington Breweries',
			image: './images/wilm_brew_screenshot.png',
			url: 'https://jeffberlin.github.io/Wilmington-Breweries/',
			category: ['development', 'design'],
		// next lines are to handle the pop-up modals
			modalName: 'wilmBrewModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'wilmBrewModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'wilmBrewModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Wilmington Brewers Website',
		// body inside the modal
			modalBody: 'Built using HTML, CSS, Javascript, KnockoutJS, Google Maps API, and Foursquare API.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
		{
			title: 'JBR',
			image: './images/jbrally_screenshot.png',
			url: 'http://jbrally.com/',
			category: ['development', 'design'],
		// next lines are to handle the pop-up modals
			modalName: 'jeffBerlinRallyModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'jeffBerlinRallyModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'jeffBerlinRallyModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Jeff Berlin Rally Website',
		// body inside the modal
			modalBody: 'This website was built using WordPress, WordPress Plugins, and custom HTML and CSS.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
		{
			title: 'TCB Brochure',
			image: './images/tcb_brochure.png',
			url: './images/tru-colors-brochure.pdf',
			category: 'design',
		// next lines are to handle the pop-up modals
			modalName: 'tcbBrochureModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'tcbBrochureModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'tcbBrochureModalLongTitle',
		// title to display in the modal
			modalTitleName: 'TRU Colors Brewing Brochure',
		// body inside the modal
			modalBody: 'Created this company brochure using Adobe InDesign and Photoshop.',
		// handles the link description in modal
			modalViewType: 'PDF'
		},
		{
			title: 'Movie Trailers',
			image: './images/movie_trailers_screenshot.png',
			url: 'https://jeffberlin.github.io/Movie_Trailer_python/fresh_tomatoes.html',
			category: 'development',
		// next lines are to handle the pop-up modals
			modalName: 'movieTrailerModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'movieTrailerModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'movieTrailerModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Movie Trailer Website',
		// body inside the modal
			modalBody: 'Built using HTML, CSS, Bootstrap, Python, and YouTube video embedding.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
		{
			title: 'Appalachian Slab & Timber',
			image: './images/app_st_logo.png',
			url: './images/applogo.jpg',
			category: 'design',
		// next lines are to handle the pop-up modals
			modalName: 'appLogoModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'appLogoModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'appLogoModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Appalachian Slab & Timber Logo',
		// body inside the modal
			modalBody: 'A logo I created for a timber company using Adobe Illustrator and Photoshop.',
		// handles the link description in modal
			modalViewType: 'Image'
		},
		{
			title: 'Appalachian Slab & Timber',
			image: './images/app_brand_logo.png',
			url: './images/app_brandlogo.jpg',
			category: 'design',
		// next lines are to handle the pop-up modals
			modalName: 'appBrandModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'appBrandModalCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'appBrandModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Appalachian Slab & Timber Branding Logo',
		// body inside the modal
			modalBody: 'The branding logo I created for a timber company using Adobe Illustrator and Photoshop.',
		// handles the link description in modal
			modalViewType: 'Image'
		},
		{
			title: 'Javascript Resume',
			image: './images/javascript_resume_screenshot.png',
			url: 'https://jeffberlin.github.io/javascript-resume/',
			category: ['development', 'design'],
		// next lines are to handle the pop-up modals
			modalName: 'javascriptResumeModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'javascriptResumeCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'javascriptResumeModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Javascript Resume Website',
		// body inside the modal
			modalBody: 'An online resume that was created to show my work history, projects, and education. Built using Javascript, JQuery, HTML, CSS, and Google Maps API.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
		{
			title: 'Frogger Javascript Game',
			image: './images/frogger_screenshot.png',
			url: 'https://jeffberlin.github.io/Frogger-JavaScript/',
			category: ['development', 'design'],
		// next lines are to handle the pop-up modals
			modalName: 'froggerGameModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'froggerGameCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'froggerGameModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Frogger Javascript Game',
		// body inside the modal
			modalBody: 'Try playing this Frogger-like game that was built using Javascript.',
		// handles the link description in modal
			modalViewType: 'Website'
		},
		{
			title: 'Wilmington Brew Logo',
			image: './images/ilm_brew_logo-400.png',
			url: './images/ilm_brew_logo.jpg',
			category: 'design',
		// next lines are to handle the pop-up modals
			modalName: 'ilmBrewModalCenter',
		// Just add 'Title' to modalName
			modalCenterTitle: 'ilmBrewCenterTitle',
		// remove 'Center', add 'Long'
			modalLongTitle: 'ilmBrewModalLongTitle',
		// title to display in the modal
			modalTitleName: 'Wilmington Breweries Logo',
		// body inside the modal
			modalBody: 'A logo for a project website that I created. This was created using Adobe Photoshop and Sketch.',
		// handles the link description in modal
			modalViewType: 'Image'
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

$("#mobile-topcontrol").click(function() {
	$('html, body').animate({
		scrollTop: $("#top-page").offset().top
	}, 'slow')
})

$("#skills-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#skills").offset().top
	}, 'slow')
})

$("#mobile-skills-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#skills").offset().top
	}, 'slow')
})

$("#experience-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#experience").offset().top
	}, 'slow')
})

$("#mobile-experience-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#experience").offset().top
	}, 'slow')
})

$("#education-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#education").offset().top
	}, 'slow')
})

$("#mobile-education-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#education").offset().top
	}, 'slow')
})

$("#portfolio-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#portfolio").offset().top
	}, 'slow')
})

$("#mobile-portfolio-button").click(function() {
	$('html, body').animate({
		scrollTop: $("#portfolio").offset().top
	}, 'slow')
})

// Background overlay on mobile menu
$('#navigation').click(function() {
	$(document).toggleClass('overlay')
})

// Code for portfolio modal's

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})