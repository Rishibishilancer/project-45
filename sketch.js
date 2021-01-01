var snake1,snake2
var databse
var food1,food2,foodImage;
var bomb,bombImage
var gameState = 0




function preload(){
		foodImage = loadImage("apple.png")
		bombImage = loadImage("bomb.png")
}


function setup(){
	createCanvas(600,600)

	snake1 =new snake(120)
	snake2 = new snake(450)

	food1 = createSprite(200,200,50,50)
		food2 = createSprite(400,400,50,50)

	food1.addImage("apple.png",foodImage)
	food2.addImage("apple.png",foodImage)

	food1.scale = 0.2
	food2.scale = 0.2

	
}

function draw(){

	for(i = 0; i<600;i += 50){
		
		line(300,i+20,300,i)
	}

	

	
	drawSprites()

}

function foodapear(){


}