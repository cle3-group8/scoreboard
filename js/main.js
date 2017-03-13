var serverAddress = 'http://127.0.0.1:3000';
var socket = io("http://game.maashaven.win:3000");
var playernames = [];

socket.on("newplayer", function (data) {
    console.log(data);
    data.score = parseInt(data.score);

    var playerNumber = playernames.push(data.name);
    var element = $("<li id='player-" + playerNumber + "'>" + data.name  + " " + data.score+ "</li>");

    socket.emit("playerid", {
        "playerNumber": playerNumber
    });

    element.css('background-color' , data.color);
    var listElement = $("#playerlist").prepend(element);

    var scoreInterval = setInterval(function () {
        //add to the score
        data.score += 100;
        $("#player-" + playerNumber).text(data.name  + " " + data.score);
    }, 1000);

    var avatarelement = $("#avatar"). prepend(avatar);

    var avatar  = $("<img src=\"https://api.adorable.io/avatars/285/"+playerNumber+".png\">");
    avatarelement.append(avatar);

    //clearInterval(scoreInterval)
});

socket.emit("scorebord", "faka nick");

