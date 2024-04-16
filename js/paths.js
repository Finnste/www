let bg;
let pathsNumber = 5;
let pathsList = [];

function setup() {
    frameRate(60);
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.parent('p5Sketch');
    bg = loadImage("src/imgs/seoul_bg.png");
    for (let i = 0; i < pathsNumber; i++) {
        createPath();
    }
  //  animatePaths();
}

function draw() {
    background(bg);
}


function animatePaths(){
console.log(pathsList);
    for (i=0; i < pathsList.length; i++){
    let p = pathsList[i];
    p.animate(0);
}
}



// function drawBG() {
//     if (innerWidth - bg.width <= innerWidth - bg.height) {
//         image(bg, 0, 0, 0, height);
//     } else if (innerHeight - bg.height <= innerWidth - bg.width) {
//         image(bg, 0, 0, width);
//     }

// }


function createPath() {
    let posX = Math.floor(Math.random() * width);
    let posY = Math.floor(Math.random() * height);
    let lineLength = Math.floor(Math.random() * 10);
    let A = new Path(posX, posY, lineLength);
    pathsList.push(A);
}

function updatePaths() {

}