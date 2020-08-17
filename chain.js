class rope {
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            body1: body1,
            body2: body2,
            pointB : {x: this.offsetX, y: this.offsetY}
        }
        this.rope = constraint.create(options)
        World.add(world, this.rope)
    }
    display() {
        var pointA = this.rope.body1.position;
        var pointB = this.rope.body2.position;

        strokeWeight(2);

        var anchor1X= pointA.x;
        var anchor1y = pointB.y;

        var anchor2X = pointB.x+this.offsetX;
        var anchor2Y = pointB.y+this.offsetY;

        line(anchor1X,anchor1y,anchor2X,anchor2Y)
    }
}