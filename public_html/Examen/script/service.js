function Player(nick, name, role, kda) {
    console.log("Submit de players");
    this.nickname = nick;
    this.name = name;
    this.role = role;
    this.kda = kda;

    this.updatePlayer = function (nick, role, kda) {
        this.nickname = nick;
        this.role = role;
        this.kda = kda;
    }

}

function Team(name, victories, defeats, game) {
    console.log("Submit de teams");
    this.name = name;
    this.victories = name;
    this.defeats = role;
    this.game = kda;
    this.players = new Array();

    this.addPlayer = function (player) {
        this.players.push(player)
    }
    this.getPlayer = function (nick) {
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].name == nick) {
                return this.players[i];
            }
        }
    }
    this.delPlayer = function (nick) {
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].name == nick) {
                //return this.players[i];
            }
        }
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
        return player;
    }
}

app.service('myService', function () {
    
    this.players = new Array();
    this.teams = new Array();
    
    this.newPlayer = function (nick, name, role, kda) {
        var player = new Player(nick, name, role, kda);
        this.players.push(player);
    }
    this.newTeam = function (name, victories, defeats, game) {
        var team = new Team(name, victories, defeats, game);
        this.teams.push(team);
    }
    this.getAllPlayers = function(){
        return this.players;
    }
    this.getAllTeams =  function(){
        return this.teams;
    }
});
