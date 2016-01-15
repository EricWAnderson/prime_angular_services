var app = angular.module('myApp', []);

app.controller('myController', ['$scope', '$http', 'ThetaService', function($scope, $http, ThetaService){
    $scope.theta = ThetaService.theta;
}]);

app.controller('anotherController', ['$scope', '$http', 'ThetaService', function($scope, $http, ThetaService){
    $scope.theta = ThetaService.theta;
}]);

app.factory('ThetaService', function(){

    var thisone = thatone;
    var thatone = thisone;
    var theta = {
        mascot: 'wolverine',
        themeSong: 'Final Countdown',
        color: 'blue',
        greekSymbol: 'theta',
        gradDate: 'March sometime',
        size: 22,
        cohort: 'coheart',
        time: Date(),
        favoriteGame: 'SushiGO',
        cats: true
    }

    return {
        theta: theta
    }

});