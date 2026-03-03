class Tennis {
  constructor() {
    this.player1Points = 0;
    this.player2Points = 0;
  }

  player1Scores() {
    this.player1Points++;
  }

  player2Scores() {
    this.player2Points++;
  }

    score() {

    const difference = this.player1Points - this.player2Points;

    // Deuce
    if (
        this.player1Points >= 3 &&
        this.player2Points >= 3 &&
        difference === 0
    ) {
        return "Deuce";
    }

    // Advantage
    if (
        this.player1Points >= 3 &&
        this.player2Points >= 3 &&
        difference === 1
    ) {
        return "Advantage for Player 1";
    }

    if (
        this.player1Points >= 3 &&
        this.player2Points >= 3 &&
        difference === -1
    ) {
        return "Advantage for Player 2";
    }

    // Game 
    if (this.player1Points >= 4 && difference >= 2) {
        return "Game for Player 1";
    }

    if (this.player2Points >= 4 && difference <= -2) {
        return "Game for Player 2";
    }

    const scores = ["Love", "15", "30", "40"];

    return scores[this.player1Points] + " - " + scores[this.player2Points];
    }
}

export default Tennis;