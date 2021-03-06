class Player {
    constructor(ctx, canvasSize, keys) {

        this.ctx = ctx;

        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }

        this.playerSize = {
            w: 120,
            h: 120
        }

        this.playerPosition = {
            x: 200,
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
        this.imageInstance.src = 'img/trumpframes.png'
        this.imageInstance.frames = 6
        this.imageInstance.framesIndex = 0
        this.drawTrump()

    }

    drawTrump(framesCounter) {

        this.ctx.drawImage(
            this.imageInstance,
            this.imageInstance.framesIndex * Math.floor(this.imageInstance.width / this.imageInstance.frames),
            0,
            Math.floor(this.imageInstance.width / this.imageInstance.frames),
            this.imageInstance.height,
            this.playerPosition.x,
            this.playerPosition.y,
            this.playerSize.w,
            this.playerSize.h)

        this.animate(framesCounter)

        this.moveTrump()
    }

    animate(framesCounter) {
        if (framesCounter % 5 == 0) {
            this.imageInstance.framesIndex++;
        }
        if (this.imageInstance.framesIndex > this.imageInstance.frames - 1) {
            this.imageInstance.framesIndex = 0;
        }
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


            if (e.key === this.keys.space) {


                this.jumpTrump()

            }

        })
    }


    jumpTrump() {

        document.getElementById('jump-sound').play()

        this.playerPosition.y -= 80;
        this.controlYaxis.speed -= 8

    }

}