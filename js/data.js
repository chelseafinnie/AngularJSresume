var app1 = angular.module('app1', []);

app1.controller('landing-ctrl', function($scope) {
 
  
	$scope.landing = [
		{hash: "landing2.jpg", title: "Web Developer"}		
	];
});

app1.controller('contact-ctrl', function($scope) {
 
  
	$scope.contact = "For further information, please contact me at ";
	$scope.emailhash = "mailto:chelseafsolutions@gmail.com";
	$scope.email = "ChelseaFSolutions@gmail.com";
	$scope.githash= "chelseafinnie";
	$scope.gtext= "Follow @chelseafinnie on GitHub";
});

app1.controller('personal-ctrl', function($scope) {
 
  
	$scope.name = "Chelsea Finnie";
	$scope.age = "23";
	$scope.mylocation = "Auckland, New Zealand";
});
app1.controller('about-ctrl', function($scope) {
 
  
	$scope.about = "I am a web developer based in Auckland, New Zealand. I am a self starter and love learning new skills for my projects. I love cats, cooking, computers and motorcycles.";
});
app1.controller('photo-ctrl', function($scope) {
 
  
	$scope.myphoto = "https://scontent-sjc2-1.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/11218760_10205322377004187_1741575503228306407_n.jpg?oh=1938960b037b514cf475b4e7ef063b28&oe=57BEF0ED";
});
app1.controller('skills-ctrl', function($scope) {
 
  
	$scope.skills = [
		{hash: "https://www.python.org/", stext: "Python"},
		{hash: "http://www.w3schools.com/html/", stext: "HTML"},
		{hash: "http://www.w3schools.com/css/", stext: "CSS"},
		{hash: "http://www.w3schools.com/js/", stext: "JavaScript"},
		{hash: "https://jquery.com/", stext: "jQuery"},
		{hash: "https://angularjs.org/", stext: "AngularJS"},
		{hash: "https://www.djangoproject.com/", stext: "Django"},
		{hash: "https://www.sqlite.org/", stext: "SQLite3"}	
	];
});
app1.controller('tools-ctrl', function($scope) {
 
  
	$scope.tools = [
		{hash: "https://notepad-plus-plus.org/", ttext: "Notepad++"},
		{hash: "https://www.google.com/chrome/", ttext: "Chrome"},
		{hash: "http://windows.microsoft.com/en-nz/internet-explorer/download-ie", ttext: "IE"},
		{hash: "https://www.sublimetext.com/", ttext: "Sublime Text"},
		{hash: "https://filezilla-project.org/", ttext: "FileZilla"},
		{hash: "http://www.microsoft.com/en-us/windows", ttext: "Windows"},
		{hash: "https://www.office.com/", ttext: "MS Office"},
		{hash: "https://www.openoffice.org/", ttext: "Apache OpenOffice"},
		{hash: "https://www.mozilla.org/en-US/firefox/desktop/", ttext: "Firefox"},
		{hash: "https://www.gimp.org/", ttext: "GIMP"}	
	];
});
app1.controller('work-ctrl', function($scope) {
 
  
	$scope.works = [
		{company: "Gail Cowan Management", dates: "September 2015 - Current", title: "Web/Software Developer (Part-Time)", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
		{company: "Foodstuffs NI", dates: "July 2014 - August 2015", title: "IT Service Desk Analyst (Full-Time)", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
		{company: "Contact Energy", dates: "June 2013 - June 2014", title: "Customer Service Representative (Full-Time)", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
		{company: "Intralot NZ", dates: "November 2011 - February 2013", title: "Application Support (Full-Time)", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
	];
});
app1.controller('edu-ctrl', function($scope) {
 
  
	$scope.edus = [
		{company: "Weltec", dates: "March 2011 - November 2011", title: "Computer Servicing(Diploma)", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
	];
});
app1.controller('project-ctrl', function($scope) {
 
  
	$scope.projects = [
		{hash: "JCP.jpg", title: "Jean Carvell Photography", info: "Created a single page website to show Jean Carvell's photography work and information.", tags: "HTML CSS"},
		{hash: "GCM.jpg", title: "Gail Cowan Management", info: "Created the front end for the Gail Cowan Management website.", tags: "HTML CSS JavaScript jQuery jCarousel"},
		{hash: "Paua.jpg", title: "PauaShell", info: "In progress - A Django website used to manage Gail Cowan Management's actors' casting schedules.", tags: "HTML CSS JavaScript jQuery Django Python"},
		{hash: "placeholder3.jpg", title: "Coming Soon", info: "New project coming soon.", tags: "Coming Soon"}
	];
});
