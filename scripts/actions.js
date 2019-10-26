function Actions(){
    var _this = this;
    this.menu = {};
    this.menu.ok = function(evt){
        gameManager.setGame({newGame: true});
    }
    
    this.game = {};
    this.game.pause = gameManager.setPause;

    this.pause = {};
    this.pause.abort = gameManager.setMenu;
    this.pause.ok = function(evt){
        gameManager.setGame({newGame: false});
    }
}