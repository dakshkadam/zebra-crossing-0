//Variable named "Stripes" to create a new group
var stripe;
   //Draw stripes using for loop
   function setup(){
    createCanvas(450, 400);
     for (var x = 30; x < 450; x = x + 55){
     var stripe =createSprite(x, 200, 35, 300);
     stripe.shapeColor="white";
   }
 } 
function draw() {
  background("gray");

  drawSprites();
}