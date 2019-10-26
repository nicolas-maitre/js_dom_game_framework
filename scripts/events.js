function Events(){
    var _this = this;
    this.load = function(){
        _this.onKeyClick.init(document.body);
        _this.onKeyClick.bind(gameManager.keyPress);
    };
    function OnKeyClickEvt(){
        var callBackList = {};
        var keysDownStatus = {};
        function keyReset(evt){
            keysDownStatus[evt.keyCode] = false;
        }
        function keyPress(evt){
            if(keysDownStatus[evt.keyCode]){
                console.log("key not reset");
                return;
            }
            keysDownStatus[evt.keyCode] = true;
            //call callBacks
            for(var indCB in callBackList){
                callBackList[indCB](evt);
            }
        }
        function mouseDown(evt){
            var newEvt = {type: "mouse", key: "leftClick"};
            switch(evt.buttons){
                case 2:
                    newEvt.key = "rightClick";
                    break;
                case 3:
                    newEvt.key = "middleClick";
            }
            for(var indCB in callBackList){
                callBackList[indCB](newEvt);
            }
        }
        this.init = function(elem){
            elem.addEventListener("keydown", keyPress);
            elem.addEventListener("keyup", keyReset);
            elem.addEventListener("mousedown", mouseDown);
        }
        this.bind = function(callBack){
            var bindId = Math.random() * 10000000000000000;
            callBackList[bindId] = callBack;
            return bindId;
        }
        this.unbind = function(bindId){
            delete callBackList[bindId];
        }
    }
    this.onKeyClick = new OnKeyClickEvt();
}