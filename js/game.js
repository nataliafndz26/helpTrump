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
    keys: undefined,


    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.createTrump()
        this.player.drawTrump()
    },

    setDimensions() {
        this.canvasSize.w = window.innerWidth
        this.canvasSize.h = window.innerHeight
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    }, 

    createTrump() {
        this.player = new Player (this.ctx)
    }

}

// class Player {

//     constructor(ctx, carPosX, carPosY, carW, carH, carImage) {

//         this.ctx = ctx


//         this.playerPosition = {
//             x: carPosX,
//             y: carPosY //this.canvasSize.h - this.playerSize.h - 20
//         }

//         this.playerSize = {
//             w: carW,
//             h: carH
//         }

//         this.imageName = carImage
//         this.imageInstance = undefined

//         this.init()
//     }

//     init() {

//         this.imageInstance = new Image()
//         this.imageInstance.src = `img/${this.imageName}`

//     }

//     draw() {

//         this.imageInstance.onload = () => {
//             this.ctx.drawImage(this.imageInstance, this.playerPosition.x, this.playerPosition.y, this.playerSize.w, this.playerSize.h)
//         }

        

//     }
//}
