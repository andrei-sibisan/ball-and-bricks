class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.personalHighscore = 0;
    this.health = 100;
    this.level = 1;
  }
}

const George = new Player("George");
const Marian = new Player("Marian");
const Geoffrey = new Player("Geoffrey");

exports.Player = Player;
