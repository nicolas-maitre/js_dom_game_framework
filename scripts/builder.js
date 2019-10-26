function Builder(){
    var _this = this;
    this.buildAppContainer = function(zone){
        //containers
        elements.appContainer = zone.addElement("div", "appContainer");
        elements.gameArea = elements.appContainer.addElement("div", "gameArea hidden");
        elements.endGameArea = elements.appContainer.addElement("div", "endGameArea hidden");
        elements.pauseArea = elements.appContainer.addElement("div", "pauseArea hidden");
        elements.menuArea = elements.appContainer.addElement("div", "menuArea hidden");
        elements.fpsCounter = elements.appContainer.addElement("div", "fpsCounter");
        //build
        _this.buildGame(elements.gameArea);
        _this.buildEndGame(elements.endGameArea);
        _this.buildPause(elements.pauseArea);
        _this.buildMenu(elements.menuArea);
        //return
        return elements.appContainer;
    };
    this.buildGame = function(container){
        elements.backgroundLayer = container.addElement("div", "backgroundLayer");
        elements.pipesLayer = container.addElement("div", "pipesLayer");
        elements.playerLayer = container.addElement("div", "playerLayer");
    };
    this.buildEndGame = function(container){
        var gameOverText = container.addElement("p", "gameOverText");
        elements.endGameScore = container.addElement("p", "endGameScore");
        elements.endGameHighScore = container.addElement("p", "endGameHighScore");
        var actionsContainer = container.addElement("section", "endGameActionsContainer");
        var action1 = actionsContainer.addElement("p", "endGameAction1");
        var action2 = actionsContainer.addElement("p", "endGameAction2");
        
        gameOverText.innerText = "Game Over!";
        elements.endGameScore.innerText = "...";
        elements.endGameHighScore.innerText = "...";
        action1.innerText = "Press space to restart";
        action2.innerText = "Press Escape to return to the menu";
    };
    this.buildPause = function(container){
        var pauseText = container.addElement("p", "pauseText");
        
        pauseText.innerText = "Pause";
    };
    this.buildMenu = function(container){
        elements.menuHighScore = container.addElement("p", "menuHighScore");
        var titleContainer = container.addElement("section", "menuTitleContainer");
        var actionsContainer = container.addElement("section", "menuActionsContainer");
        var titleTop = titleContainer.addElement("p", "menuTitleTop");
        var titleBottom = titleContainer.addElement("p", "menuTitleBottom");
        var actionText = actionsContainer.addElement("p", "menuActionsText"); 
        
        elements.menuHighScore.innerText = "...";
        titleTop.innerText = "Flappy";
        titleBottom.innerText = "Bird";
        actionText.innerText = "Press space to start";
    };
}