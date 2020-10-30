class Player {
    constructor(ctx) {

        this.ctx = ctx;

        this.canvasSize = {
            w: 500,
            h: 700
        }
            
        this.playerSize = {
            w: 100,
            h: 100
        }
        
        this.playerPosition = {
            x: 0,
            y: 0 //this.canvasSize.h - this.playerSize.h - 20
        }

        this.defaultPosition = this.playerPosition.y

        this.controlYaxis = {
            speed: 1,
            gravity: 0.8
        }
        
        //this.keys = keys

       // this.setListeners()
        
        this.init()
    }

    init() {
        this.image = new Image()
        this.image.src = 'img/car.png';

        //console.log ("j")
    }

    drawTrump() {

        this.ctx.drawImage(this.image, this.playerPosition.x, this.playerPosition.y, this.playerSize.w, this.playerSize.h)

    }
}