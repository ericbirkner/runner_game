/* menu.js */

var fondo;
var logo;
var comenzar;
var sky;
var day = '#b2ddc8';
var tween;
var ani;

var menu = {
    create : function() {
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        console.log("Pantalla Menu");
		game.stage.backgroundColor = day;
		
		sky =  game.add.tileSprite(0, 0, game.world.width, game.world.height, 'sky');
		logo = game.add.sprite(game.world.centerX, -500, 'logo');
		logo.anchor.setTo(0.5);
		
		tween = game.add.tween(logo).to( { y: game.world.centerY }, 2000, Phaser.Easing.Bounce.Out, true);
		
		comenzar = game.add.text(game.world.centerX, game.world.height - 100, "Comenzar", { font: "27px Press Start 2P", fill: "#ffffff", align: "center" });
		comenzar.anchor.set(0.5);
		comenzar.inputEnabled = true;
		comenzar.alpha = 0;
		comenzar.setShadow(5, 5, 'rgba(0,0,0,0.5)', 15);
		ani = game.add.tween(comenzar).to( { alpha: 1 }, 1500, "Linear", true, 0, -1);
		
		comenzar.events.onInputDown.add(start, this);		
		
    }
	
};

function start(){
	game.state.start('play');
}