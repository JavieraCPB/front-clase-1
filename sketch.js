function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index',-1),
  createA("https://github.com/JavieraCPB","Mi cuentita","_blank").id("mine");
  textSize(50);
  
}

function draw() {
 text("🐙", mouseX, mouseY);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}