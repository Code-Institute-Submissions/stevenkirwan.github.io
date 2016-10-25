// Homepage navigation directive
bandApp.directive('header', function () {
    return {
        // Attribute
        restrict: 'A',
        // Replace element
        replace: true,
        // Set template
        templateUrl: "views/header-home.html"
    }
});

// Inner pages navigation directive
bandApp.directive('innerNav', function () {
    return {
        // Attribute
        restrict: 'A',
        // Replace element
        replace: true,
        // Set template
        templateUrl: "views/header-inner.html"
    }
});

// Footer directive
bandApp.directive('footer', function () {
    return {
        // Attribute
        restrict: 'A',
        //Set controller
        controller: 'HomeController',
        // Replace element
        replace: true,
        // Set template
        templateUrl: "views/footer.html"
    }
});