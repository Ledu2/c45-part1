var balloon, cityBackground, restart, restartImg;
var balloon_img, cityBackground_Image;



function preload(){
    cityBackground_Image = loadImage("assets/cityImage.png");
    balloon_img = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");



}

function setup(){
    createCanvas(700, 560);

    /* imagem de fundo */
    cityBackground = createSprite(350, 280);
    cityBackground.addImage(cityBackground_Image);
    cityBackground.scale = 0.4;

    /* personagem */
    balloon = createSprite(100, 200, 20, 50);
    balloon.addAnimation("balloon", balloon_img);
    balloon.scale = 0.35;

}

function draw() {
    background("black");


    drawSprites()
}
