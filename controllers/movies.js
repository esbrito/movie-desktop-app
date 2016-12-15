app.controller('moviesCtrl', ['$scope','$http',function($scope, $http) {
    console.log("Loading movies Controller");
    var obj = {content:null};

    $http.get("https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=c5850ed73901b8d268d0898a8a9d8bff").success(function(data) {
        $scope.movies = data.results
    });

    $scope.getDetail = function(movie){
        $scope.currentMovie = movie;
        var genres = "No genre defined";
        $http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=c5850ed73901b8d268d0898a8a9d8bff").success(function(allGenres) {
            genres = "";
            angular.forEach(allGenres.genres, function(genre, key) {
                angular.forEach(movie.genre_ids, function(id, keyGenre) {
                    if(genre.id == id){
                        genres = genres + " " + genre.name;
                        console.log(genres);
                        $scope.currentMovie.currentGenres = genres;
                    }

                });
            });

        });

    }


}]);
