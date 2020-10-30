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
        framesCounter: 0
    },
    background: undefined,
    player: undefined,
    obstacles: [],
    keys: undefined,
    
    
    init(id) {
        this.canvasTag = document.getElementById('myCanvas')
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions ()
        this.createTrump()
        this.player.drawTrump()

        //console.log(this.ctx) 
    },

    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },

    createTrump() {
        this.player = new Player(this.ctx)
    },

    start() {
        
        this.reset()
        
    }

}