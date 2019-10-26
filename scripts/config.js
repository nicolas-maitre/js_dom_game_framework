var config = {
    keys:{
        jump: ["Enter", " ", "leftClick", "rightClick"],
        pause: ["Escape", "p", "P"],
        ok: ["Enter", " ", "leftClick"],
        abort: ["Escape"]
    },
    stateActions:{
        menu: ["ok", "abort"],
        game: ["jump", "pause"],
        pause: ["ok", "abort"]
    },
    player:{
        height: 10,
        jump_height: 5,
        speed: 50,  //distance per second
        min_start_y: 45,
        max_start_y: 55
    },
    pipe: {
        min_height: 20,
        max_height: 50,
        min_width: 10,
        max_width: 20,
        min_y: 30,
        max_y: 70,
        min_x: 40, //distance between pipes
        max_x: 60
    }
};