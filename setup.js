var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 400  ,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scene: [game]
};

var jeu = new Phaser.Game(config);