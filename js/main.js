var serverAddress = 'http://127.0.0.1:3000';
var socket = io("http://game.maashaven.win:3000");
var playernames = [];


socket.on("newplayer", function (data) {
    console.log(data);
    playernames.push(data.name);
    var element = $("<li>" + data.name +  + data.score+ "</li>");

    element.css('background-color' , data.color);
    $("#playerlist").prepend(element);

});

socket.emit("scorebord", "hey");

