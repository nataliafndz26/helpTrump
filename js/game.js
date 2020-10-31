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
        fps: undefined,
        framesCounter: undefined
    },
    player: undefined,
    background: undefined,
    obstacles: [],
    keys:" ", 


    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.start ()

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
            
        }, 18)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize, 'img/bg.png')
        this.player = new Player(this.ctx, this.canvasSize, this.keys)
        this.obstacles = []
    
    },

    drawAll() {
        this.background.draw()
        this.player.drawTrump()
        this.obstacles.forEach (elm => elm.drawObs())
    },

    clear() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    },

    generateObs() {
        this.obstacles.push (new Obstacle (this.ctx, this.canvasSize, this.player.defaultPosition, this.player.playerSize))
    },

    clearObs() {
        this.obstacles = this.obstacles.filter(elm => elm.obsPosition.x >= 0)
    }

}

