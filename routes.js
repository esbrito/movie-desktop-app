
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html"
    })
    .when("/about", {
        templateUrl : "views/about.html"
    })
    .when("/movies", {
        templateUrl : "views/movies.html"
    })
    .when("/contact", {
        templateUrl : "views/contact.html"
    });
});
