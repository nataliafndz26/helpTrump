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
    platforms: [],
    questions: undefined,
    intervalFirst: undefined,
    intervalSecond: undefined,
    selectedQuestion: undefined,
    flag: true,
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

        this.intervalFirst = setInterval(() => {


            this.clear()
            this.drawAll()

            if (this.flag) {

                this.generateObs()
                this.clearObs()
                
            }

            // while (this.flag === false) {

            //     this.questions.draw(this.selectedQuestion)
                
            // }
     
            if (this.frames.framesCounter > 5000) {

                this.frames.framesCounter = 0

            } else {

                this.frames.framesCounter++

            }

            if (this.collisionDetection()) {

                this.selectedQuestion = this.questions.selectRandom()

                this.stop()

                //this.questions.draw(this.selectedQuestion)

                this.obstacles = []
             
                this.flag = false

                setTimeout(() => {

                    clearInterval(this.intervalSecond)

                    this.flag = true
            
                }, 10000)

            }

            this.platformDetection()

            this.generatePlat()
            this.clearPlat()


        }, 1000 / this.frames.fps)
    },

    stop() {
        
        this.intervalSecond = setInterval(() => {

            this.questions.draw (this.selectedQuestion)


        }, 1000 / this.frames.fps)
    },

 
    // stop() {

        

    //     // clearInterval(this.intervalFirst)

    //     // this.intervalSecond = setInterval(() => {
            
    //     // }, 1000 / this.frames.fps);

    //     // setTimeout(() => {

    //     //     this.intervalSecond = clearInterval ()
            
    //     // }, 10000)
    // },


    reset() {
        this.background = new Background(this.ctx, this.canvasSize, 'img/City1.png')
        this.player = new Player(this.ctx, this.canvasSize, this.keys)
        this.obstacles = []
        this.platforms = []
        this.questions = new Question (this.ctx, this.canvasSize)

    },

    drawAll() {
        this.background.draw()
        this.player.drawTrump(this.frames.framesCounter)
        this.obstacles.forEach(elm => elm.drawObs(this.frames.framesCounter))
        this.platforms.forEach(elm => elm.draw())
    },

    clear() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    },

    generateObs() {

        if (this.frames.framesCounter % 200 === 0) {

            this.obstacles.push(new Obstacle(this.ctx, this.canvasSize, this.player.defaultPosition, this.player.playerSize))

        }
    },

    generatePlat() {

        if (this.frames.framesCounter % 450 === 0) {
            
            const platform1 = new Platform(this.ctx, this.canvasSize, 200, 150, 12, "red", 4)

            this.platforms.push (platform1)
            
        }
        if (this.frames.framesCounter % 425 === 0) {

            const platform2 = new Platform(this.ctx, this.canvasSize, 330, 180, 15, "green", 3)
            
            this.platforms.push (platform2)

        }

        if (this.frames.framesCounter % 400 === 0) {

           const platform3 = new Platform(this.ctx, this.canvasSize, 460, 120, 12, "yellow", 2)
            
            this.platforms.push (platform3)

        }
    },

    // generateQuestion() {

    //     this.questions = new Question (this.ctx, this.canvasSize)
        
    // },

    collisionDetection() {

        return this.obstacles.some(elm => {

            return (this.player.playerPosition.x < elm.obsPosition.x + elm.obsSize.w &&
            this.player.playerPosition.x + this.player.playerSize.w > elm.obsPosition.x &&
            this.player.playerPosition.y < elm.obsPosition.y + elm.obsSize.h &&
            this.player.playerSize.h + this.player.playerPosition.y > elm.obsPosition.y)

        })
    },

    platformDetection() {

        this.platforms.forEach(elm => {

           
            if (this.player.playerPosition.x < elm.platPosition.x + elm.platSize.w &&
                this.player.playerPosition.x + this.player.playerSize.w > elm.platPosition.x &&
                this.player.playerPosition.y < elm.platPosition.y + elm.platSize.h &&
                this.player.playerPosition.y + this.player.playerSize.h > elm.platPosition.y) {

                

                this.player.playerPosition.y = elm.platPosition.y - this.player.playerSize.h
                this.player.controlYaxis.gravity = 0.2
                
            }
        })
    },

    clearObs() {
        this.obstacles = this.obstacles.filter(elm => elm.obsPosition.x >= 0)
    },


    clearPlat() {
        this.platforms = this.platforms.filter(elm => elm.platPosition.x >= 0)
    }

}

