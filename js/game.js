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
            
        }, 18)
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize, 'img/bg.png')
        this.player = new Player(this.ctx, this.canvasSize, this.keys)
    
    },

    drawAll() {
        this.background.draw()
        this.player.drawTrump()
    },

    clear() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    }

    // createTrump() {
    //     this.player = new Player(this.ctx, this.canvasSize, this.keys)
    // },

    // createBackGround() {
    //     this.background = new Background (this.ctx, this.canvasSize, 'img/bg.png')
    // }

}

