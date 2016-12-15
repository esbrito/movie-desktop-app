app.controller('moviesCtrl', ['$scope','$http',function($scope, $http) {
    console.log("Loading movies Controller");
    var obj = {content:null};

    $http.get("https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=c5850ed73901b8d268d0898a8a9d8bff").success(function(data) {
        $scope.movies = data.results
    });

    $scope.getGenre = function(movie){
        $scope.currentMovieGenres = "No genre defined";
        $http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=c5850ed73901b8d268d0898a8a9d8bff").success(function(allGenres) {
            $scope.currentMovieGenres = "";
            angular.forEach(allGenres[0], function(genre, key) {
                angular.forEach(movie.genre_ids, function(genreId, keyGenre) {
                    console.log(genre);
                    console.log(movie.genre_ids);
                    if(genre.id == genreId){
                        $scope.currentMovieGenres = $scope.currentMovieGenres + result.name;
                    }

                });
            });

        });

    }


}]);
