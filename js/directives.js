bandApp.directive('header', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "views/header-home.html"
    }
});

bandApp.directive('innerNav', function () {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: "views/header-inner.html"
    }
});

bandApp.directive('footer', function () {
    return {
        restrict: 'A',
        controller: 'HomeController',
        replace: true,
        templateUrl: "views/footer.html"
    }
});