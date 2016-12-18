app.controller('moviesCtrl', ['$scope','$http',function($scope, $http) {

    /* Get inicial list of upcoming movies*/
    $http.get("https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=c5850ed73901b8d268d0898a8a9d8bff").success(function(data) {
        $scope.movies = data.results
    });

    /* Get details of the movie selected */
    $scope.getDetail = function(movie){
        $scope.currentMovie = movie;
        var genres = "No genre defined";
        /* Gets list of genres to traslate genre ID to genre name */
        $http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=c5850ed73901b8d268d0898a8a9d8bff").success(function(allGenres) {
            genres = "";
            /* Needs to get the corresponding name of the genre through the ID*/
            angular.forEach(allGenres.genres, function(genre, key) {
                angular.forEach(movie.genre_ids, function(id, keyGenre) {
                    if(genre.id == id){
                        genres = genres + " " + genre.name;
                        $scope.currentMovie.currentGenres = genres;
                    }

                });
            });

        });

    }

    /* Get movies list of the next page */
    $scope.nextPage = function(){
        $scope.currentPage = $scope.currentPage + 1;
        $http.get("https://api.themoviedb.org/3/movie/upcoming?page="+ $scope.currentPage + "&language=en-US&api_key=c5850ed73901b8d268d0898a8a9d8bff").success(function(data) {
            $scope.movies = data.results
        });
    }

    /* Get movies list of the previous page */
    $scope.previousPage = function(){
        if($scope.currentPage != 1)
            $scope.currentPage = $scope.currentPage - 1;
        $http.get("https://api.themoviedb.org/3/movie/upcoming?page="+ $scope.currentPage + "&language=en-US&api_key=c5850ed73901b8d268d0898a8a9d8bff").success(function(data) {
            $scope.movies = data.results
        });
    }

}]);
