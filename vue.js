$(function(){
   
     let vm = new Vue({
        el: '#raceCode',
        data: {
			racing: false,
			winner: null,
			pika: 0,
			charmander: 0,
			counter: 0,
			interval: null,
			pikawin: false,
			charwin: false,
			place: false,
        },
		 
        methods: {
            letsRace() {
                this.racing = true
                this.interval = setInterval(() => {
                    this.moveRacer()
                }, 100)
            },

            moveRacer() {
                this.counter++
                this.pika += (Math.random() >= Math.random()) ? 1 : 0
                this.charmander += (Math.random() >= Math.random()) ? 1 : 0
                this.whoWon()
            },

            whoWon() {
                if (this.pika == this.charmander) return
                if (this.pika >= 90) {
                    this.Winning('Pikachu')
					this.pikawin = true
					this.place = true
                }
                if (this.charmander >= 90) {
                    this.Winning('Charmander')
					this.charwin = true
					this.place = true
                }
            },

            Winning(player) {
                clearInterval(this.interval)
                this.interval = null
                /* this.racing = false */
                this.winner = player
            },

            restart() {
                this.racing = false
                this.winner = null
                this.pika = 0
                this.charmander = 0
                this.counter = 0
				this.pikawin = false
				this.charwin = false
				this.place = false
            }
        },

        computed: {
            pikaRace() {
                return {
                    right: `${this.pika}vw`
                }
            },

            pikaWinTest() {
                if (!this.winner) return
					return this.winner == 'pikachU'
            },

            charRace() {
                return {
                    right: `${this.charmander}vw`
                }
            },

            charWinTest() {
                if (!this.winner) return
					return this.winner == 'charmandeR'
            },

            winner() {
                if (this.pika == this.charmander) return null
                    return this.pika > this.charmander ? 'Pikachu':'Charmander'
            }
        },
     })
})