var socket = io("http://game.maashaven.win:3000");
var playernames = [];

socket.on("newplayer", function (data) {
    /**
     * Moet gecalled worden als iemand dood gaat
     */
    function dood() {
        
        clearInterval(scoreInterval);
        var  doodScore = data.player += data.score;
        console.log("doodScore");
    }

    console.log("Nieuwe speler", data);
    data.score = parseInt(data.score);

    //voeg de playernames toe aan de lijst en array
    var playerNumber = playernames.push(data.name);
    var element = $("<li id='player-" + playerNumber + "'>"+
        "<span>" + data.name  + " " + data.score+ "</span></li>");

    //zet de kleur van de user
    element.css('background-color' , data.color);
    var listElement = $("#playerlist").prepend(element);

    //vertel de server dat de nieuwe player met id x is.
    socket.emit("playerid", {
        "playerNumber": playerNumber
    });

    //update de score iedere .1 seconde
    var scoreInterval = setInterval(function () {
        //voeg 10 bij de score iedere .1 seconde
        data.score += 10;
        $("#player-" + playerNumber + " span").text(data.name  + " " + data.score);
    }, 100);

    //set the avatar
    var avatar  = $("<img src=\"https://api.adorable.io/avatars/100/"+ playerNumber +".png\" height=\"100\">");
    $("#player-" + playerNumber).append(avatar);

    /** Doodscore aanmaken/scoren bij een naam locken na dood*/





});

