var bandApp = angular.module('bandApp', ['ngRoute', 'BandAppControllers']);

// Routing
bandApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        controller: 'HomeController'
    })
    .when("/band", {
        templateUrl : "views/band.html",
        controller: 'BandController'
    })
    .when("/contact", {
        templateUrl : "views/contact.html",
        controller: 'ContactController'
    })
    .when("/music", {
        templateUrl : "views/music.html",
        controller: 'MusicController'
    })
    .when("/gigs", {
        templateUrl : "views/gigs.html",
        controller: 'GigController'
    })
    .when("/member/:memberID", {
        templateUrl : "views/member.html",
        controller: 'MemberController'
    });
});