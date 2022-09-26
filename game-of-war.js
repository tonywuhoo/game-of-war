let DeckArray = [2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14];
class gameofwar {
  constructor() {
    this.mainDeck = DeckArray
    this.deck1 = this.deck1
    this.deck2 = this.deck2
    this.warArray = []
  }
  shuffleAndDeal() {
    this.mainDeck.sort(() => Math.random() - 0.5);
    const half = this.mainDeck.length / 2
    this.deck1 = this.mainDeck.slice(0, half)
    this.deck2 = this.mainDeck.slice(half, this.mainDeck.length)
  }
  check() {
    if (this.deck1[0] > this.deck2[0]) {
      return "Deck1"
    }
    if (this.deck2[0] > this.deck1[0]) {
      return "Deck2"
    }
    if (this.deck1[0] === this.deck2[0]) {
      return "War"
    }
  }
  playGameofWar() {
    let round = 0
    console.log("Player1: ",this.deck1,"Player2: ",this.deck2)
    while (this.deck1.length > 0 && this.deck2.length > 0) {
      round++
      switch (this.check()) {
        case "Deck1":
          console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
          console.log("Player 1 wins, round: " + round)
          this.deck1.push(this.deck1[0])
          this.deck1.push(this.deck2[0])
          this.deck1.shift()
          this.deck2.shift()
          console.log("Cards remaining [Player1: " + this.deck1.length + " Player2: " + this.deck2.length + "]")
          console.log("Player1: ", this.deck1, "Player2: ", this.deck2)
          console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
          break
        case "Deck2":
          console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
          console.log("Player 2 wins, round: " + round)
          this.deck2.push(this.deck2[0])
          this.deck2.push(this.deck1[0])
          this.deck1.shift()
          this.deck2.shift()
          console.log("Cards remaining [Player1: " + this.deck1.length + " Player2: " + this.deck2.length + "]")
          console.log("Player1: ", this.deck1, "Player2: ", this.deck2)
          console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
          break
        case "War":
          if (this.deck1.length < 4) {
            this.deck2.push(...this.deck1)
            this.deck1.length = 0
            console.log("Player 2 wins, as Player is 1 unable to initiate war")
            break
          }
          if (this.deck2.length < 4) {
            this.deck1.push(...this.deck2)
            this.deck2.length = 0
            console.log("Player 1 wins, as Player is 2 unable to initiate war")
            break
          }
          else {
            console.log("War is initiated")
            this.warArray.push(this.deck1[0], this.deck1[1], this.deck1[2], this.deck1[3], this.deck2[0],this.deck2[1], this.deck2[2], this.deck2[3])
            this.deck1.splice(0,4)
            this.deck2.splice(0,4)
            console.log(this.deck1,this.deck2)
            if (this.deck1[0] > this.deck2[0]) {
              this.deck1.push(...this.warArray)
              this.warArray.length = 0
            }
            if (this.deck2[0] > this.deck1[0]) {
              this.deck2.push(...this.warArray)
              this.warArray.length = 0
            }
            break
        }
      }
    }
    if (this.deck1.length = 0) {
      console.log("Player 2 wins")
    }
    if (this.deck2.length = 0) {
      console.log("Player 1 wins")
    }
  }
}
const playgame = new gameofwar()
playgame.shuffleAndDeal()
playgame.playGameofWar()
