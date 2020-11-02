class Obstacle {
    constructor(ctx, canvasSize, defaultPosition, playerSize) {

        this.ctx = ctx

        this.obsSize = {
            w: 80,
            h: 80
        }

        this.obsPosition = {
            x: canvasSize.w,
            y: defaultPosition + playerSize.h - this.obsSize.h
        }
        this.speedX = 6

        this.imageInstance = undefined

        this.init()
    }

    init() {
        
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/obama.png'
        this.imageInstance.frames = 8
        this.imageInstance.framesIndex = 0
        this.drawObs()

    }

    drawObs(framesCounter) {

        this.ctx.drawImage(
            this.imageInstance,
            this.imageInstance.framesIndex * Math.floor(this.imageInstance.width / this.imageInstance.frames),
            0,
            Math.floor(this.imageInstance.width / this.imageInstance.frames),
            this.imageInstance.height,
            this.obsPosition.x,
            this.obsPosition.y,
            this.obsSize.w,
            this.obsSize.h)
        
        this.animate (framesCounter)

        this.moveObs()
    }

    animate(framesCounter) {
        if (framesCounter % 10 == 0) {
          this.imageInstance.framesIndex++;
        }
        if (this.imageInstance.framesIndex > this.imageInstance.frames - 1) {
          this.imageInstance.framesIndex = 0;
        }
      }

    moveObs() {
        this.obsPosition.x -= this.speedX
    }
}


