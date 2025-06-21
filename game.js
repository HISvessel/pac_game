const canvas = document.getElementById("canvas")
const canvasContext = canvas.GetContext("2d")
const pacmanFrame = document.getElementById("animation")
const ghostFrames = document.getElementById("ghosts")

let createRect = () => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
};
let fps = 30;
let oneBlockSize = 20;
let map = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,2,1],
    [1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,2,1,2,1,1,1,1,1,2,1,2,1,1,1,2,1],
    [1,2,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,1],
    [1,1,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,1,1],
    [0,0,0,0,1,2,1,2,2,2,2,2,2,2,1,2,1,0,0,0,0],
    [1,1,1,1,1,2,1,2,1,1,2,1,1,2,1,2,1,1,1,1,1],
    [2,2,2,2,2,2,2,2,1,2,2,2,1,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,2,1,2,1,2,2,2,1,2,1,2,1,1,1,1,1],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,2,1,0,0,0,0],
    [0,0,0,0,1,2,1,2,2,2,2,2,2,2,1,2,1,0,0,0,0],
    [1,1,1,1,1,2,2,2,1,1,1,1,1,2,2,2,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1],
    [1,2,1,1,1,2,1,1,1,2,1,2,1,1,1,2,1,1,1,2,1],
    [1,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,1],
    [1,1,2,2,1,2,1,2,1,1,1,1,1,2,1,2,1,2,2,1,1],
    [1,2,2,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,2,2,1],
    [1,2,1,1,1,1,1,1,1,2,1,2,1,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

];
//map creation, initial phases for looping the game and block sizes
let gameLoop = () => {
    update();
    draw();
};

let draw = () => {
    //todo
};


let update = () => {
    //todo
};

let gameInterval = setInterval(gameLoop, 1000 / fps);
//wall creation initialized, pendign changes and finishing touches
let drawWalls = () => {
    for(let i = 0; i < map.length; i++) {
        for(let j = 0; j < map[0]; j++) {
            if(map[i][j] == 1) {//then it is a wall
                createRect[j * oneBlockSize, i * oneBlockSize, oneBlockSize, oneBlockSize, "342DCA"]
            };
        };
    };
};
