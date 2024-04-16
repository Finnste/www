class Path {
    /**
     * Path constructor
     * @param {float} x - pos on the x axis
     * @param {float} y - pos on y axis
     * @param {float} len - number of branches of the path
     */
    constructor(x, y, len) {
        this.startPos = createVector(x, y);
        this.pathLength = len;
        this.branches = [];
        for (let i = 0; i < len; i++) {
            let posX = Math.floor(Math.random() * width);
            let posY = Math.floor(Math.random() * height);
            let pos = createVector(posX, posY);
            this.branches.push(pos);
        }
        this.nextPos = this.branches[0];
       // console.log(this.nextPos);

        

    }


    animate(ratio) {
        ratio = ratio || 0;
        let p = this;
        this.drawLine(p.startPos, p.nextPos, ratio);
        if (ratio < 1) {
            requestAnimationFrame(function () {
                p.animate(ratio + 0.002);
            });
        }
    }

    drawLine(pos1, pos2, ratio) {
        var cvs = document.getElementsByTagName("canvas")[0];
        var ctx = cvs.getContext("2d");
        ctx.strokeStyle="yellow";
        ctx.lineWidth=10;
        let x1 = pos1.x;
        let y1 = pos1.y;
        console.log(pos2);
        let x2 = pos2.x;
        let y2 = pos2.y;
      //ctx.fillRect(0, 0, 1000, 1000);
        ctx.moveTo(x1, y1);
        x2 = x1 + ratio * (x2 - x1);
        y2 = y1 + ratio * (y2 - y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        

    }
}