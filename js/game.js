const Game = {
    name: 'Ironhack game',
    description: 'Help Trump get to the White House',
    version: '1.0.0',
    license: undefined,
    authors: 'Natalia Fernández y Ramón Rodríguez',
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    frames: {
        fps: 60,
        framesCounter: 0
    },
    player: undefined,
    background: undefined,
    obstacles: [],
    keys: " ",


    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.start()

    },

    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },

    start() {

        this.reset()

        this.interval = setInterval(() => {

            this.clear()
            this.drawAll()

            this.generateObs()
            this.clearObs()

            if (this.frames.framesCounter > 5000) {

                this.frames.framesCounter = 0

            } else {

                this.frames.framesCounter++
                console.log(this.frames.framesCounter)

            }

            if (this.collisionDetection()) {
                console.log('ha chocado')
            }

        }, 1000 / this.frames.fps)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize, 'img/bg.png')
        this.player = new Player(this.ctx, this.canvasSize, this.keys)
        this.obstacles = []

    },

    drawAll() {
        this.background.draw()
        this.player.drawTrump()
        this.obstacles.forEach(elm => elm.drawObs())

    },

    clear() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    },

    generateObs() {

        if (this.frames.framesCounter % 90 === 0) {

            this.obstacles.push(new Obstacle(this.ctx, this.canvasSize, this.player.defaultPosition, this.player.playerSize))

        }
    },

    collisionDetection() {

        return this.obstacles.some(elm => {

            return (this.player.playerPosition.x < elm.obsPosition.x + elm.obsSize.w &&
                this.player.playerPosition.x + this.player.playerSize.w > elm.obsPosition.x &&
                this.player.playerPosition.y < elm.obsPosition.y + elm.obsSize.h &&
                this.player.playerSize.h + this.player.playerPosition.y > elm.obsPosition.y)


            // return (this.player.playerPosition.x < elm.obsPosition.x + elm.obsSize.w &&
            //     this.player.playerPosition.x + this.player.playerSize.w > elm.obsPosition.x &&
            //     this.player.playerPosition.y < elm.obsPosition.y + elm.obsSize.h &&
            //     this.player.playerSize.h  + this.player.playerPosition.y > elm.obsPosition.y) 

        })
    },

    clearObs() {
        this.obstacles = this.obstacles.filter(elm => elm.obsPosition.x >= 0)
    }

}

