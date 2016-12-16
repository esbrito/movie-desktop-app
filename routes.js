app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        controller: 'homeCtrl'
    })
    .when("/about", {
        templateUrl : "views/about.html",
        controller: 'aboutCtrl'
    })
    .when("/movies", {
        templateUrl : "views/movies.html",
        controller: 'moviesCtrl'
    })
    .when("/search", {
        templateUrl : "views/search.html",
        controller: 'searchCtrl'
    })
    .when("/contact", {
        templateUrl : "views/contact.html",
        controller: 'contactCtrl'
    });
});
