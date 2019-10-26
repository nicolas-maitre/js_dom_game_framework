var elements = {};
//managers
var gameManager = new GameManager();
var events = new Events();
var actions = new Actions();
var builder = new Builder();

document.addEventListener("DOMContentLoaded", function(evt){
    //boot
    builder.buildAppContainer(document.body);
    events.load();

    gameManager.initGame();
});