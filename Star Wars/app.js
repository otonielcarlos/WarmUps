var app = angular.module("MyApp", []);

app.controller("StarWars", ["$scope", "$http", function ($scope, $http) {

    $http.get('http://swapi.co/api/films/1/').then(function (response) {
        $scope.title = response.data.title;
        $scope.openingCrawl = response.data.opening_crawl;
        $scope.director = response.data.director;
        $scope.producer = response.data.producer;

    });

}]);