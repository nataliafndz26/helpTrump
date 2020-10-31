class Player {
    constructor(ctx, canvasSize, keys) {

        this.ctx = ctx;

        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
            
        this.playerSize = {
            w: 100,
            h: 100
        }
        
        this.playerPosition = {
            x: 0,
            y: this.canvasSize.h - this.playerSize.h - 50
        }

        this.defaultPosition = this.playerPosition.y

        this.controlYaxis = {
            speed: 1,
            gravity: 0.4
        }


        this.imageInstance = undefined
        
        this.keys = keys

        this.setEventListeners()
        
        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/trump.png';
        this.drawTrump()
        
    }

    drawTrump() {

            this.ctx.drawImage(this.imageInstance, this.playerPosition.x, this.playerPosition.y, this.playerSize.w, this.playerSize.h)

            this.moveTrump()
    }

    moveTrump() {

        if (this.playerPosition.y < this.defaultPosition) {
            this.playerPosition.y += this.controlYaxis.speed;
            this.controlYaxis.speed += this.controlYaxis.gravity;
        } else {
            this.playerPosition.y = this.defaultPosition;
            this.controlYaxis.speed = 1;

        }

    }

    setEventListeners() {
        document.addEventListener("keydown", e => {
       
            if (e.key === this.keys) {

                 if (this.playerPosition.y >= this.defaultPosition) {
                   this.jumpTrump()
                     console.log("hhh")   
                     console.log(this.playerPosition.y)
                    
                }
                
            }

        })
    }

    jumpTrump() {
        this.playerPosition.y -= 30;
        this.controlYaxis.speed -= 8
   
    }

}