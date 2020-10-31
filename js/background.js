class Background {
    constructor(ctx, canvasSize, imgSource) {
        this.ctx = ctx

        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }

        this.image = new Image()
        this.image.src = imgSource

        this.bgPosition = {
            x: 0,
            y: 0
        }

        this.velX = 1
    }

    draw() {

            this.ctx.drawImage(this.image, this.bgPosition.x, this.bgPosition.y, this.canvasSize.w, this.canvasSize.h)
            this.ctx.drawImage(this.image, this.bgPosition.x + this.canvasSize.w, this.bgPosition.y, this.canvasSize.w, this.canvasSize.h)
            this.move()
        
    }

    move() {
        if (this.bgPosition.x <= -this.canvasSize.w) {
            this.bgPosition.x = 0
        }

        this.bgPosition.x -= this.velX
    }
}