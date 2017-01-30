var app = angular.module('myApp', []);
app.controller('teamsPlayersController', ['$scope', 'myService',
    function ($scope, myService) {        
        $scope.teamName = $scope.teamName;
        $scope.teamVictories = $scope.teamVictories;
        $scope.teamDefeats = $scope.teamDefeats;
        $scope.game = $scope.game;

        $scope.playerNick = $scope.playerNick;
        $scope.playerName = $scope.playerName;
        $scope.playerRole = $scope.playerRole;
        $scope.playerKda = $scope.playerKda;
        
        $scope.teamSubFunc = function () {
            $scope.team = myService.newTeam(teamName, teamVictories, teamDefeats, game);
            console.log("Submit de teams");
        }
        $scope.playerSubFunc = function () {
            $scope.player = myService.newPlayer(playerNick, playerName, playerRole, playerKda);
            console.log("Submit de players");
        }
    }]);

app.controller('resultController', ['$scope', 'myService',
    function ($scope, myService) {
        $scope.teams = myService.getAllTeams();
        $scope.players = myService.getAllPlayers();
    }]);