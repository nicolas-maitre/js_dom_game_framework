"use strict";
function GameManager(){
    var _this = this;

    //public
    this.gameStatus = false;

    //private
    var lastFrameCount = 0;

    this.initGame = function(){
        _this.setMenu();
        frameLoop();
    }
    this.keyPress = function(evt){
        //loop over authorized actions for current state
        var stateActions = config.stateActions[_this.gameStatus];
        for(var indAction = 0; indAction < stateActions.length; indAction++){
            var action = stateActions[indAction];
            var key = evt.key;
            var actionsKeys = config.keys[action];
            if(actionsKeys.includes(key)){
                console.log(action);
                if(!actions[_this.gameStatus] || !actions[_this.gameStatus][action]){
                    console.log("no endpoint for action " + action + " in " + _this.gameStatus);
                    return;
                }
                actions[_this.gameStatus][action]();
            }
        }
    }
    this.setGame = function(){
        console.log("set game");
        _this.gameStatus = "game";
        elements.menuArea.classList.add("hidden");
        elements.pauseArea.classList.add("hidden");
        elements.gameArea.classList.remove("hidden");
    };
    this.setMenu = function(){
        console.log("set menu");
        _this.gameStatus = "menu";
        elements.menuArea.classList.remove("hidden");
        elements.pauseArea.classList.add("hidden");
        elements.gameArea.classList.remove("hidden");
    };
    this.setPause = function(){
        console.log("set pause");
        _this.gameStatus = "pause";
        elements.menuArea.classList.add("hidden");
        elements.pauseArea.classList.remove("hidden");
        elements.gameArea.classList.remove("hidden");
    };
    function frameLoop(newFrameCount){
        //general actions
        //frameTime management
        var frameTime = newFrameCount - lastFrameCount;
        lastFrameCount = newFrameCount;
        updateFpsCounter(frameTime);
        //status specific actions
        switch(_this.gameStatus){
            case "game":

                break;
        }
        requestAnimationFrame(frameLoop);
    }
    function updateFpsCounter(frameTime){
        var fps = Math.floor(1000 / frameTime);
        elements.fpsCounter.innerText = fps + " fps";
    }
}