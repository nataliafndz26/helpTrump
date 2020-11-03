class Life {
    constructor(ctx, canvasSize, diference) {
        
        this.ctx = ctx;

        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
    
        this.livesSize = {
            w: 30,
            h: 30
        }

        this.livesPosition = {
            x: this.canvasSize.w - diference,
            y: this.canvasSize.h / 20
        }

        this.imageInstance = undefined

        this.init ()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/heart.png'
        this.draw()
    }

    draw() {
        this.ctx.drawImage(
            this.imageInstance,
            this.livesPosition.x,
            this.livesPosition.y,
            this.livesSize.w,
            this.livesSize.h
        )
     
    }
  
}