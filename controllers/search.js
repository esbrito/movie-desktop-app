app.controller('searchCtrl', ['$scope','$http',function($scope, $http) {
    console.log("Loading search Controller");
    $scope.search = function(query){
        console.log(query);
        $http.get("https://api.themoviedb.org/3/search/movie?api_key=c5850ed73901b8d268d0898a8a9d8bff&query="+ query + "&page=1&include_adult=false").success(function(data) {
            $scope.movies = data.results
        });
    }
    $scope.getDetail = function(movie){
        $scope.currentMovie = movie;
        var genres = "No genre defined";
        $http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=c5850ed73901b8d268d0898a8a9d8bff").success(function(allGenres) {
            genres = "";
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
