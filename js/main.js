var socket = io("http://game.maashaven.win:3000");
var playernames = [];

socket.on("newplayer", function (data) {
    /**
     * Moet gecalled worden als iemand dood gaat
     */
    function dood() {
        var id = playerNumber;
        console.log("dead: " + id)
        clearInterval(scoreInterval);

    }

    console.log("Nieuwe speler", data);
    data.score = parseInt(data.score);

    //voeg de playernames toe aan de lijst en array
    var playerNumber = data.id;
    var element = $("<li id='player-" + playerNumber + "'>"+
        "<span>" + data.name  + " " + data.score+ "</span></li>");

    //zet de kleur van de user
    element.css('background-color' , data.color);
    var listElement = $("#playerlist").prepend(element);

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
    socket.on('deadplayer', function (data) {
        if(data.player == playerNumber) dood();
    });

});
