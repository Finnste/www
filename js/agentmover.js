let cnv;
let agent;
let txt = [];
let newTxt = [];
let a = 0;
let tempX = 0;
let tempY = 0;
let map = {};




function setup() {
    frameRate(60);
    cnv = createCanvas(innerWidth, innerHeight);
    cnv.parent('p5Sketch');
    background(0);
    this.agents = [];
    txt = "IMAGINATIONS OF SCALE".split("");
}

function draw() {
    background(0);
    createAgent();
    for (let i = 0; i < agents.length; i++) {
        agents[i].show();
    }
    if (mouseIsPressed) {
        for (let i = 0; i < agents.length; i++) {
            agents[i].move();
            agents[i].show();
        }
    }
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}

function createAgent() {
    if (mouseX != tempX | mouseY != tempY) {
        if (a >= txt.length) a = 0;
        let key = txt[a];
        let A = new Agent(mouseX, mouseY, txt[a])
        this.agents.push(A);
        let t = findTarget(a);
        A.setTarget(t);
        A.show();
        a++;
    }
    tempX = mouseX;
    tempY = mouseY;
}

function findTarget(a) {
    let letterSpace = this.agents[0].getRadius() / 2;
    let sentenceWidth = letterSpace * txt.length;
    let leftStart = (innerWidth / 2) - (sentenceWidth / 2);
    let posX = leftStart + (a * letterSpace);
    let posY = (innerHeight / 2);
    if (txt[a] === 'I') {
        posX = posX + (letterSpace / 4);
    }
    let target = createVector(posX, posY);
    return target;
}

function keyTyped() {
    console.log(keyCode);
    if (keyCode == 13) {
        window.location.href = "main.html";
    }
}