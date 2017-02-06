var app = angular.module('myApp', []);
app.controller('teamsPlayersController', ['$scope', 'myService',
    function ($scope, myService) {

        $scope.tsm = myService.newTeam('Team SoloMid', 17, 1, "League of Legends")
        
        /*$scope.p1 = myService.newPlayer("Hauntzer", "Kevin Yarnell", "Top Laner", 2.29);
        $scope.p2 = myService.newPlayer("Svenskeren", "Dennis Johnsen", "Jungler", 3.78);
        $scope.p3 = myService.newPlayer("Bjergsen", "Søren Bjerg", "Mid Laner", 4.38);
        $scope.p4 = myService.newPlayer("WildTurtle", "Jason Tran", "AD Carry", 3.89);
        $scope.p5 = myService.newPlayer("Biofrost", "Vincent Wang", "Support", 1.10);*/
        
        //$scope.tsm.addPlayer($scope.p1);

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
            console.log($scope.playerNick);
            console.log($scope.playerName);
            console.log($scope.playerRole);
            console.log($scope.playerKda);
                        
            $scope.player = myService.newP(selectedTeam, $scope.playerNick, $scope.playerName, $scope.playerRole, $scope.playerKda);
            console.log("Submit de players");
        }
        
        $scope.teams = myService.getAllTeams();
        
        //revisar funcion para borrar jugadores
        $scope.deletePlayerFunc = function (selectedTeam, jug) {
            //$scope.jugadoresEq = $scope.equipos[equipoSel].jugadores.splice(jug, 1);
        }
    }]);

app.controller('resultController', ['$scope', 'myService',
    function ($scope, myService) {
        $scope.teams = myService.getAllTeams();
        $scope.players = myService.getAllPlayers();

        //console.log($scope.selectedTeam);
        
    }]);