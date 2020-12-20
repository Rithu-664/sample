
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var auEngine,auWorld;
var c_1;
var bg,bgImage;
var ground,platform;
var imp_1;
var playButton;
var bg2Img;
var gameState = PLAY;
var PLAY = 1;
var END = 0;

function preload(){
	bgImage = loadImage("bg.jpg");
	bg2Img = loadImage("bg2.jpg")
}

function setup() {
	createCanvas(1600,500);

	auEngine = Engine.create();
	auWorld = auEngine.world;

	bg = createSprite(800,250,1600,800)
	bg.scale = 5.39

	c_1 = new Crewmate(66,142,10,10);

  ground = new Ground(800,495,1600,10);

	platform = new Ground(96,418,200,160);

	imp_1 = new Impostor(600,250,10,10);

	playButton = createButton("PLAY")
	playButton.position(700,250)
	playButton.style('width', '200px');
    playButton.style('height', '40px');
	playButton.style('background', 'royalblue');
	playButton.mousePressed(function(){
		playButton.hide();
		gameState = PLAY
	})
        

	Engine.run(auEngine);

}


function draw() {

	if(gameState !== PLAY){
		bg.addImage(bg2Img)
	}

	drawSprites()
	if(gameState===PLAY){
		rectMode(CENTER);
		bg.addImage(bgImage)
		
		c_1.display();
		fill("black")
		ground.display();
		fill(50)
		platform.display();
		imp_1.display();
	  
		Engine.update(auEngine);
	  
		fill("white")
		text(mouseX+" , "+mouseY,mouseX,mouseY);
	}
	
 
}
