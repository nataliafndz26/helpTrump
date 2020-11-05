class WhiteHouse {
    constructor(ctx, canvasSize) {

        this.ctx = ctx

        this.obsSize = {
            w: 500,
            h: 700
        }

        this.obsPosition = {
            x: canvasSize.w - 400,
            y: canvasSize.h - this.obsSize.h + 60
        }

        this.speedX = 1

        this.imageInstance = undefined

        this.init()
    }

    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = 'img/whitehouse.png'
        this.draw()
    }

    draw() {

        this.ctx.drawImage(
            this.imageInstance,
            this.obsPosition.x,
            this.obsPosition.y,
            this.obsSize.w,
            this.obsSize.h
        )

        this.move()

    }

    move() {
        
        this.obsPosition.x -= this.speedX
    }

}