var app = angular.module('myApp', []);
app.controller('teamsPlayersController', ['$scope', 'myService',
    function ($scope, myService) {

        $scope.tsm = myService.newTeam('Team SoloMid', 17, 1, "League of Legends");
        $scope.p1 = myService.newP(0, "Hauntzer", "Kevin Yarnell", "Top Laner", 2.29);
        $scope.p2 = myService.newP(0, "Svenskeren", "Dennis Johnsen", "Jungler", 3.78);
        $scope.p3 = myService.newP(0, "Bjergsen", "Søren Bjerg", "Mid Laner", 4.38);
        $scope.p4 = myService.newP(0, "WildTurtle", "Jason Tran", "AD Carry", 3.89);
        $scope.p5 = myService.newP(0, "Biofrost", "Vincent Wang", "Support", 1.10);

        $scope.teamName = $scope.teamName;
        $scope.teamVictories = $scope.teamVictories;
        $scope.teamDefeats = $scope.teamDefeats;
        $scope.game = $scope.game;

        $scope.playerNick = $scope.playerNick;
        $scope.playerName = $scope.playerName;
        $scope.playerRole = $scope.playerRole;
        $scope.playerKda = $scope.playerKda;

        $scope.teamSubFunc = function () {
            $scope.team = myService.newTeam($scope.teamName, $scope.teamVictories, $scope.teamDefeats, $scope.game);
            console.log("Submit de teams");
        }
        $scope.playerSubFunc = function (selectedTeam) {            
            $scope.player = myService.newP(selectedTeam, $scope.playerNick, $scope.playerName, $scope.playerRole, $scope.playerKda);
            console.log("Submit de players");
        }

        $scope.teams = myService.getAllTeams();
        $scope.players = myService.getAllPlayers();

        $scope.deletePlayerFunc = function (selectedTeam, playerIndex) {
            $scope.teams[selectedTeam].delPlayer(playerIndex);
        }
        $scope.modifyPlayerfunc = function (selectedTeam, playerIndex) {
            //$scope.teams[selectedTeam].updatePlayer();
            $scope.playerNick = $scope.teams[selectedTeam].players[playerIndex].nickname;
        }

    }]);

app.controller('resultController', ['$scope', 'myService',
    function ($scope, myService) {
        
    }]);