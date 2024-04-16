class Agent {
    /**
     * Agent constructor
     * @param {float} x - pos on the x axis
     * @param {float} y - pos on y axis
     * @param {char} _chr - the char to be displayed
     */
    constructor(x, y, _chr) {
        this.chr = _chr;
        this.radius = 30;
        this.pos = createVector(x, y);
      //  this.target = createVector(tarX, tarY);
        this.vel = createVector();
        this.acc = createVector();
    }

    show() {
        textFont("surt");
        textSize(16);
        fill(255);
        text(this.chr, this.pos.x, this.pos.y);
    }


    move() {
        let neu = createVector();
        this.neu = createVector(this.target.x, this.target.y);
        this.acc = this.neu.sub(this.pos);
        this.neu.setMag(1);

        this.acc = this.neu;
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.vel.limit(0.6);
    }

    getRadius(){
        return this.radius;
    }

    setTarget(t){
            this.target = t;
    }

}




