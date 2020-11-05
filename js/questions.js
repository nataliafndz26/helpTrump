
class Question {
    constructor(ctx, canvasSize) {

        this.ctx = ctx

        this.text = [
            {
                ask: "Who was the first president of the United States?",
                answer: {
                    a: "a) George Washington",
                    b: "b) Abraham Lincoln",
                    c: "c) Thomas Jefferson"
                },
                correct: "a",
                status: true
            },

            {
                ask: "According to the United Nations, how many countries exist in the World?",
                answer: {
                    a: "a) 156",
                    b: "b) 194",
                    c: "c) 178"
                },
                correct: "b",
                status: true
            },

            {
                ask: "Which year were women allowed to vote for the first time in Argentina?",
                answer: {
                    a: "a) 1972",
                    b: "b) 1939",
                    c: "c) 1951"
                },
                correct: "c",
                status: true
            },
            {
                ask: "Where are the African Union headquarters?",
                answer: {
                    a: "a) Etiopia",
                    b: "b) Sudan",
                    c: "c) Argelia"
                },
                correct: "a",
                status: true
            },
            {
                ask: "Which interpreting modality is used in the European Parliament?",
                answer: {
                    a: "a) Consecutive Interpreting",
                    b: "b) Liaison Interpreting",
                    c: "c) Simultaneous Interpreting"
                },
                correct: "c",
                status: true
            },
            {
                ask: "Which of these options is NOT true?",
                answer: {
                    a: "a) The UN Charter forbids its intervention in its member states' internal affairs",
                    b: "b) The UN Charter states that the use of force is not authorized to maintain international peace",
                    c: "c) State sovereignty is the fundamental pillar of International Law"
                },
                correct: "b",
                status: true
            },
            {
                ask: "Who is Shinzo Abe?",
                answer: {
                    a: "a) Japan's Prime Minister",
                    b: "b) South Korea's President",
                    c: "c) Xiamen's governor"
                },
                correct: "a",
                status: true
            },
            {
                ask: "How many countries are there in the United Kingdom?",
                answer: {
                    a: "a) The same as in Great Britain",
                    b: "b) 4",
                    c: "c) 5"
                },
                correct: "b",
                status: true
            },
            {
                ask: "Which is the capital of the state of Oregon?",
                answer: {
                    a: "a) Portland",
                    b: "b) Eugene",
                    c: "c) Salem"
                },
                correct: "c",
                status: true
            },
            {
                ask: "Which is the second name of Angela Merkel?",
                answer: {
                    a: "a) Marie",
                    b: "b) Dorothea",
                    c: "c) Frederika"
                },
                correct: "b",
                status: true
            }

        ]

        this.questionPosition = {
            x: canvasSize.w / 4.5,
            y: canvasSize.h - 600
        }

        this.colors = {
            black: "#000000",
            white: "#FFF5D7",
            blue: "#00ADD4",
            yellow: "#FFDA90",
            green: "#1FF00E",
            red: "#F30F08"
        }

        // this.selectedQuestion = undefined


        // this.keys = {
        //     a: keys.a,
        //     b: keys.b,
        //     c: keys.c
        // }

        this.init()

        console.log(this.text)
    }

    init() {
        //this.selectRandom() 
        //console.log(this.selectRandom())
        //this.draw(selectedQuestion)

    }

    draw(lastQuestion) {

        //let lastQuestion = selectedQuestion.length - 1
        //let lastValue = selectedQuestion[lastQuestion]


        //BORDE NEGRO

        this.ctx.fillStyle = this.colors.black
        this.ctx.fillRect(this.questionPosition.x, this.questionPosition.y, 700, 500)

        //FONDO AMARILLO

        this.ctx.fillStyle = this.colors.yellow
        this.ctx.fillRect(this.questionPosition.x + 10, this.questionPosition.y + 10, 680, 480)

        //PREGUNTA

        this.ctx.fillStyle = this.colors.white
        this.ctx.fillRect(this.questionPosition.x + 25, this.questionPosition.y + 40, 650, 80)

        this.ctx.font = 'bold 30px sans-serif'
        this.ctx.fillStyle = this.colors.black
        this.ctx.fillText(lastQuestion.ask, this.questionPosition.x + 40, this.questionPosition.y + 90, 625)

        //BARRITA

        this.ctx.fillStyle = this.colors.white
        this.ctx.fillRect(this.questionPosition.x + 25, this.questionPosition.y + 150, 650, 30)

        this.ctx.fillStyle = this.colors.blue
        this.ctx.fillRect(this.questionPosition.x + 30, this.questionPosition.y + 153, 640, 25)

        //OPCIÓN A

        this.ctx.fillStyle = this.colors.white
        this.ctx.fillRect(this.questionPosition.x + 25, this.questionPosition.y + 220, 650, 60)

        this.ctx.font = '25px sans-serif'
        this.ctx.fillStyle = this.colors.black
        this.ctx.fillText(lastQuestion.answer.a, this.questionPosition.x + 40, this.questionPosition.y + 260, 625)

        //OPCIÓN B

        this.ctx.fillStyle = this.colors.white
        this.ctx.fillRect(this.questionPosition.x + 25, this.questionPosition.y + 300, 650, 60)

        this.ctx.font = '25px sans-serif'
        this.ctx.fillStyle = this.colors.black
        this.ctx.fillText(lastQuestion.answer.b, this.questionPosition.x + 40, this.questionPosition.y + 340, 625)

        //OPCIÓN C

        this.ctx.fillStyle = this.colors.white
        this.ctx.fillRect(this.questionPosition.x + 25, this.questionPosition.y + 380, 650, 60)

        this.ctx.font = '25px sans-serif'
        this.ctx.fillStyle = this.colors.black
        this.ctx.fillText(lastQuestion.answer.c, this.questionPosition.x + 40, this.questionPosition.y + 420, 625)

    }

    correctAnswer() {

        this.ctx.fillStyle = this.colors.green
        this.ctx.fillRect(this.questionPosition.x, this.questionPosition.y + 500, 640, 25)

    }

    incorrectAnswer() {

        this.ctx.fillStyle = this.colors.red
        this.ctx.fillRect(this.questionPosition.x + 30, this.questionPosition.y + 153, 640, 25)

    }

}



