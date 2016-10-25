// Declare controllers
var bandApp = angular.module('BandAppControllers', [])

// Homepage controller
bandApp.controller('HomeController', function($scope, $http, Data) {
	// Retrieve JSON data
    $http.get("data/band.json").then(function (response) {
		$scope.siteContent = response.data;
	});

	console.log(Data);
	$scope.siteContent = Data;



});

// Band page controller
bandApp.controller('BandController', function($scope, $http) {
    //Page title
    $scope.title = "About the band";

	// Retrieve JSON data
    $http.get("data/band.json").then(function (response) {
		$scope.siteContent = response.data;
	});
});

// Contact page controller
bandApp.controller('ContactController', function($scope) {
    //Page title
    $scope.title = "Contact";
});

// Music page controller
bandApp.controller('MusicController', function($scope) {
    //Page title
    $scope.title = "Music";
});

// Gig page controller
bandApp.controller('GigController', function($scope, $http) {
    //Page title
    $scope.title = "Gigs";
	
	// Retrieve JSON data
    $http.get("data/band.json").then(function (response) {
		$scope.siteContent = response.data;
	});
});

bandApp.controller('MemberController', function($scope, $http, $routeParams, $location) {
	// Retrieve JSON data for each band member
	$http.get("data/band.json").then(function (response) {
		$scope.member = response.data.members[$routeParams.memberID];
		$scope.title = $scope.member.name;
		console.log($scope.member);
	});
});