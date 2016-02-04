(function () {
    var app = angular.module("atTheMovies");
    var DetailsController = function ($scope, $routeParams, movieService) {
        var id = $routeParams.id;

        movieService
            .getById(id)
            .success(function (data) {
                $scope.movie = data;
            });

        $scope.edit = function () {
            $scope.edit.movie = angular.copy($scope.movie); 
        };
    }

    app.controller("DetailsController", DetailsController);

}());