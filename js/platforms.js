class Platform {
    constructor(ctx, canvasSize, playerSize) {

        this.ctx = ctx

        // this.playerPosition = {
        //     x: playerPosition.x,
        //     y: playerPosition.y
        // }

        // this.playerSize = {
        //     w: playerSize.w,
        //     h: playerSize.h
        // }

        this.platPosition = {
            x: canvasSize.w,
            y: canvasSize.h - playerSize.h -200
        }

        this.platSize = {
            w: 200,
            h: 30
        }

        this.speedX = 4

        this.init()
    }

    init() {
        this.draw()
    }

    draw() {

        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.platPosition.x, this.platPosition.y, this.platSize.w, this.platSize.h)
        this.move()

    }

    move() {
        this.platPosition.x -= this.speedX
    }

    
}