var app = angular.module('myApp', []);
app.controller('teamsPlayersController', ['$scope', 'myService',
    function ($scope, myService) {

        $scope.tsm = myService.newTeam('Team SoloMid', 17, 1, "League of Legends");
        $scope.p1 = myService.newP(0, "Hauntzer", "Kevin Yarnell", "Top Laner", 2.29, 130);
        $scope.p2 = myService.newP(0, "Svenskeren", "Dennis Johnsen", "Jungler", 3.78, 60);
        $scope.p3 = myService.newP(0, "Bjergsen", "Søren Bjerg", "Mid Laner", 4.38, 130);
        $scope.p4 = myService.newP(0, "WildTurtle", "Jason Tran", "AD Carry", 3.89, 130);
        $scope.p5 = myService.newP(0, "Biofrost", "Vincent Wang", "Support", 1.10, 125);

        $scope.teamName = $scope.teamName;
        $scope.teamVictories = $scope.teamVictories;
        $scope.teamDefeats = $scope.teamDefeats;
        $scope.game = $scope.game;

        $scope.playerNick = $scope.playerNick;
        $scope.playerName = $scope.playerName;
        $scope.playerRole = $scope.playerRole;
        $scope.playerKda = $scope.playerKda;
        $scope.playerMinutes = $scope.playerMinutes;

        $scope.teamSubFunc = function () {
            $scope.team = myService.newTeam($scope.teamName, $scope.teamVictories, $scope.teamDefeats, $scope.game);
            console.log("Submit de teams");
        }
        $scope.playerSubFunc = function (selectedTeam) {
            var found = false;
            for (var i = 0; i < $scope.teams[selectedTeam].players.length; i++) {
                console.log($scope.teams[selectedTeam.players]);
                if ($scope.teams[selectedTeam].players[i].nickname == $scope.playerNick) {
                    found = true;
                    $scope.teams[selectedTeam].players[i].updatePlayer($scope.playerNick, $scope.playerRole, $scope.playerKda, $scope.playerMinutes);
                }
            }
            if(!found){
                $scope.player = myService.newP(selectedTeam, $scope.playerNick, $scope.playerName, $scope.playerRole, $scope.playerKda, $scope.playerMinutes);
                console.log("Submit de players");
            }
        }

        $scope.teams = myService.getAllTeams();
        $scope.players = myService.getAllPlayers();
        $scope.tournaments = myService.getAllTournaments();

        $scope.deletePlayerFunc = function (selectedTeam, playerIndex) {
            $scope.teams[selectedTeam].delPlayer(playerIndex);
        }
        $scope.modifyPlayerFunc = function (teamIndex, playerIndex) {
            $scope.playerNick = $scope.teams[teamIndex].players[playerIndex].nickname;
            $scope.playerName = $scope.teams[teamIndex].players[playerIndex].name;
            $scope.playerRole = $scope.teams[teamIndex].players[playerIndex].role;
            $scope.playerKda = $scope.teams[teamIndex].players[playerIndex].kda;
            $scope.playerMinutes = $scope.teams[teamIndex].players[playerIndex].minutes;
        }

        //-----------EXMAEN-----------
        $scope.tour1 = myService.newTournament(0, 1, "2017");
        $scope.tour2 = myService.newTournament(0, 1, "2016");
        $scope.tour3 = myService.newTournament(0, 1, "2015");
        $scope.tour4 = myService.newTournament(0, 1, "2014");

        $scope.firstLastTourFunc = function (selectedTeam) {
            $scope.teams[selectedTeam].firstLast();
        }
        $scope.removeTourFunc = function (year, team) {
            for (var i = 0; i < $scope.tournaments.length; i++) {
                if ($scope.tournaments[i].year == year) {
                    $scope.teams[team].removeTournament(year);
                }
            }
        }
        //-----------EXMAEN-----------
    }]);