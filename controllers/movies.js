app.controller('moviesCtrl', ['$scope','$http',function($scope, $http) {
    console.log("Loading movies Controller");
    var obj = {content:null};

    $http.get("https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=c5850ed73901b8d268d0898a8a9d8bff").success(function(data) {
        // you can do some processing here
        console.log(data);
        obj.content = data;
        $scope.movies = data.results
    });


}]);
