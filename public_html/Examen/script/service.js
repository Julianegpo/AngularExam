function Player(nick, name, role, kda, minutes) {
    this.nickname = nick;
    this.name = name;
    this.role = role;
    this.kda = kda;
    this.minutes = minutes;

    this.updatePlayer = function (nick, role, kda, minutes) {
        this.nickname = nick;
        this.role = role;
        this.kda = kda;
        this.minutes = minutes;
    }
}

function Team(name, victories, defeats, game) {
    this.name = name;
    this.victories = victories;
    this.defeats = defeats;
    this.game = game;
    this.players = [];
    this.tournaments = [];

    this.addPlayer = function (player) {
        this.players.push(player);
    }
    this.getPlayer = function (nick) {
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].name == nick) {
                return this.players[i];
            }
        }
    }
    this.addTournament = function (tournament){
        this.tournaments.push(tournament);
    }
    
    this.getTournaments = function (){
        return this.tournaments;
    }
    
    this.firstLast = function (){
        var firstTournament = this.tournaments[0];
        this.tournaments.shift();
        this.tournaments.push(firstTournament);
    }
    
    this.removeTournament = function (year){
        for (var i = 0; i < this.tournaments.length; i++) {
            if (this.tournaments[i].year == year) {
                this.tournaments.splice(i, 1);
            }
        }
    }
    
    this.delPlayer = function (playerIndex) {
        this.players.splice(playerIndex, 1);
    }
    this.getPlayerMaxKda = function () {
        var min = 0;
        var player = new Player();
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].kda > min) {
                min = this.players[i].kda;
                player = this.players[i];
            }
        }
        return player.nickname+", "+player.kda;
    }
}

function Tournament(position, year){
    this.position = position;
    this.year = year;
}

app.service('myService', function () {
    
    this.players = new Array();
    this.teams = new Array();
    this.tournaments = new Array();
    
    this.newPlayer = function (nick, name, role, kda) {
        var player = new Player(nick, name, role, kda);
        this.players.push(player);
    }
    this.newP = function (team, nick, name, role, kda, minutes) {
        var player = new Player(nick, name, role, kda, minutes);
        this.teams[team].players.push(player);
        this.players.push(player);
    }
    this.newTeam = function (name, victories, defeats, game) {
        var team = new Team(name, victories, defeats, game);
        this.teams.push(team);
    }
    this.newTournament = function (team, position, year){
        var tournament = new Tournament(position, year);
        this.teams[team].tournaments.push(tournament);
        this.tournaments.push(tournament);
    }
    this.getAllPlayers = function(){
        return this.players;
    }
    this.getAllTeams =  function(){
        return this.teams;
    }
    this.getAllTournaments = function (){
        return this.tournaments;
    }
});
