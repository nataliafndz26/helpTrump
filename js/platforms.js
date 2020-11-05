class Platform {
    constructor(ctx, canvasSize, diference, platSizeW, platSizeH, color, speed) {

        this.ctx = ctx

        this.platPosition = {
            x: canvasSize.w,
            y: canvasSize.h - diference
        }

        this.platSize = {
            w: platSizeW,
            h: platSizeH
        }

        this.color = color

        this.speedX = speed

        this.init()
    }

    init() {
        this.draw()
    }

    draw() {

        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.platPosition.x, this.platPosition.y, this.platSize.w, this.platSize.h)
        this.move()
    }

    move() {
        this.platPosition.x -= this.speedX
    }


}

