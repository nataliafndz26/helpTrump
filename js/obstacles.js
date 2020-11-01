class Obstacle {
    constructor(ctx, canvasSize, defaultPosition, playerSize) {

        this.ctx = ctx

        this.obsSize = {
            w: 30,
            h: 50
        }

        this.obsPosition = {
            x: canvasSize.w,
            y: defaultPosition + playerSize.h - this.obsSize.h
        }
        this.speedX = 10

        this.imageInstance = undefined

        this.init()
    }

    init() {
        
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/china.png';
        this.drawObs()

    }

    drawObs() {

        this.ctx.drawImage(this.imageInstance, this.obsPosition.x, this.obsPosition.y, this.obsSize.w, this.obsSize.h)

        this.moveObs()
    }

    moveObs() {
        this.obsPosition.x -= this.speedX
    }
}


