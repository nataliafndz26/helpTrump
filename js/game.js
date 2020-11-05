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
    lives: [],
    whiteHouse: [],
    questions: undefined,
    intervalFirst: undefined,
    timeoutId: undefined,
    secondTimeoutId: undefined,
    selectedQuestion: [],
    lastQuestion: undefined,
    flag: true,
    checker: null,
    keys: {
        space: " "
    },

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

        document.getElementById('bg-sound').play()

        this.reset()

        this.generateLives()


        this.intervalFirst = setInterval(() => {


            this.clear()
            this.drawAll()


            if (this.flag && this.checker === null) {

                this.generateObs()
                this.clearObs()

            } else {

                this.questions.draw(this.lastQuestion)

            }

            if (this.frames.framesCounter > 7000) {

                this.frames.framesCounter = 0

            } else {

                this.frames.framesCounter++

            }

            if (this.collisionDetection()) {

                this.selectRandom()

                this.obstacles = []

                this.flag = false

                this.timeoutTimer()


            }

            if (this.checker) {

                this.questions.correctAnswer()

            } else if (this.checker === false) {

                this.questions.incorrectAnswer()

            }

            this.platformDetection()

            this.generatePlat()
            this.clearPlat()

            this.generateWhiteHouse()
            this.whiteHouseDetection()

            this.lives.length === 0 ? this.gameOver() : null

            this.whiteHouseDetection() ? this.gameWin() : null



        }, 1000 / this.frames.fps)

        this.checkIfCorrect()
    },

    reset() {
        this.background = new Background(this.ctx, this.canvasSize, 'img/City1.png')
        this.player = new Player(this.ctx, this.canvasSize, this.keys)
        this.obstacles = []
        this.platforms = []
        this.questions = new Question(this.ctx, this.canvasSize)
    },

    drawAll() {
        this.background.draw()
        this.player.drawTrump(this.frames.framesCounter)
        this.obstacles.forEach(elm => elm.drawObs(this.frames.framesCounter))
        this.platforms.forEach(elm => elm.draw())
        this.lives.forEach(elm => elm.draw())
        this.whiteHouse.forEach(elm => elm.draw())

    },

    timeoutTimer() {

        this.timeoutId = setTimeout(() => {

            this.lives.pop()

            this.flag = true

        }, 10000)

    },

    clear() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    },

    generateObs() {

        if (this.frames.framesCounter % 150 === 0) {

            this.obstacles.push(new Obstacle(this.ctx, this.canvasSize, this.player.defaultPosition, this.player.playerSize))

        }
    },

    generateWhiteHouse() {

        if (this.frames.framesCounter % 4500 === 0) {

            this.whiteHouse.push(new WhiteHouse(this.ctx, this.canvasSize))

        }
    },

    generatePlat() {

        if (this.frames.framesCounter % 450 === 0) {

            const platform1 = new Platform(this.ctx, this.canvasSize, 200, 150, 12, "red", 4)

            this.platforms.push(platform1)

        }
        if (this.frames.framesCounter % 425 === 0) {

            const platform2 = new Platform(this.ctx, this.canvasSize, 330, 180, 15, "green", 3)

            this.platforms.push(platform2)

        }

        if (this.frames.framesCounter % 400 === 0) {

            const platform3 = new Platform(this.ctx, this.canvasSize, 460, 120, 12, "yellow", 2)

            this.platforms.push(platform3)

        }
    },

    collisionDetection() {

        return this.obstacles.some(elm => {

            return (this.player.playerPosition.x < elm.obsPosition.x + elm.obsSize.w &&
                this.player.playerPosition.x + this.player.playerSize.w > elm.obsPosition.x &&
                this.player.playerPosition.y < elm.obsPosition.y + elm.obsSize.h &&
                this.player.playerSize.h + this.player.playerPosition.y > elm.obsPosition.y)

        })
    },

    whiteHouseDetection() {

        return this.whiteHouse.some(elm => {
            return (this.player.playerPosition.x < elm.obsPosition.x + elm.obsSize.w &&
                this.player.playerPosition.x + this.player.playerSize.w > elm.obsPosition.x + 150 &&
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

            }
        })
    },

    clearObs() {
        this.obstacles = this.obstacles.filter(elm => elm.obsPosition.x >= 0)
    },


    clearPlat() {
        this.platforms = this.platforms.filter(elm => elm.platPosition.x >= 0)
    },

    checkIfCorrect() {

        document.addEventListener("keydown", e => {

            if (e.key === this.lastQuestion.correct) {


                console.log("correct")

                document.getElementById('smart-sound').play()
                this.flag = true
                this.checker = true
                console.log(this.checker)

                clearTimeout(this.timeoutId)


            } else if (e.key === this.keys.space) {

                this.flag = true
                console.log(this.checker)
                clearTimeout(this.timeoutId)


            } else {

                console.log("incorrect")

                document.getElementById('stupid-sound').play()
                this.lives.pop()

                this.flag = true
                this.checker = false
                console.log('yay')
                clearTimeout(this.timeoutId)

            }

            this.secondTimeoutId = setTimeout(() => {

                this.checker = null

            }, 2000)

        })


    },

    generateLives() {

        const life1 = new Life(this.ctx, this.canvasSize, 130)

        const life2 = new Life(this.ctx, this.canvasSize, 180)

        const life3 = new Life(this.ctx, this.canvasSize, 230)

        this.lives.push(life1, life2, life3)
    },

    selectRandom() {

        let indexRdnQuestion, rdnQuestion, randomPosition = 0

        randomPosition = Math.floor(Math.random() * (this.questions.text.length))

        rdnQuestion = this.questions.text[randomPosition]

        indexRdnQuestion = this.questions.text.indexOf(rdnQuestion)

        this.selectedQuestion.push(rdnQuestion)

        this.questions.text.splice(indexRdnQuestion, 1)

        this.lastQuestion = this.selectedQuestion[this.selectedQuestion.length - 1]

    },

    gameOver() {

        document.getElementById('bg-sound').pause()
        document.getElementById('loose-sound').play()

        clearInterval(this.intervalFirst)

        const looserScreen = document.querySelector('#loosediv')

        looserScreen.style.display = 'block'

        const canvas = document.querySelector('#myCanvas')

        canvas.style.display = 'none'

        const winnerScreen = document.querySelector('#windiv')

        winnerScreen.style.display = 'none'

    },

    gameWin() {

        document.getElementById('bg-sound').pause()
        document.getElementById('win-sound').play()

        clearInterval(this.intervalFirst)

        const winnerScreen = document.querySelector('#windiv')

        winnerScreen.style.display = 'block'

        const canvas = document.querySelector('#myCanvas')

        canvas.style.display = 'none'

        const looserScreen = document.querySelector('#loosediv')

        looserScreen.style.display = 'none'
    }

}
