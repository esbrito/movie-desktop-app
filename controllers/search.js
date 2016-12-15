app.controller('searchCtrl', ['$scope','$http',function($scope, $http) {

    /* Searches for the 'query' string received by the function */
    $scope.search = function(query){
        $http.get("https://api.themoviedb.org/3/search/movie?api_key=c5850ed73901b8d268d0898a8a9d8bff&query="+ query + "&page=1&include_adult=false").success(function(data) {
            $scope.movies = data.results
        });
    }


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



}]);
