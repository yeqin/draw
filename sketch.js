var x=300
var y=250
var speed1=1
var speed2=0

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
    background(255)

  translate(x,y)
  stroke(132, 153, 96)
  strokeWeight(12)
  line(0,0,0,400)

  noStroke()

fill(250, 237, 39)
ellipse(0,0,30,30)

r = random(255);
g = random(255);
b = random(255);

}

function draw() {
  noStroke()
  textSize(12)
  fill(r,g,b,5)
  text('Press "s" to SAVE',90,70)

translate(x,y)
if (mouseIsPressed){
 noStroke()

ellipse(mouseX-x, mouseY-y, 50,50)
ellipse(mouseX-x, mouseY-y, 40,40)
ellipse(mouseX-x, mouseY-y, 30,30)
ellipse(mouseX-x, mouseY-y, 20,20)
ellipse(mouseX-x, mouseY-y, 10,10)

ellipse((mouseX-x)/1.5, (mouseY-y)/1.5, 30,30)
ellipse((mouseX-x)/1.5, (mouseY-y)/1.5, 20,20)
ellipse((mouseX-x)/1.5, (mouseY-y)/1.5, 10,10)
ellipse((mouseX-x)/1.5, (mouseY-y)/1.5, 5,5)

ellipse((mouseX-x)/2, (mouseY-y)/2, 30,30)
ellipse((mouseX-x)/2, (mouseY-y)/2, 20,20)
ellipse((mouseX-x)/2, (mouseY-y)/2, 10,10)
ellipse((mouseX-x)/2, (mouseY-y)/2, 5,5)

ellipse((mouseX-x)/3, (mouseY-y)/3, 30,30)
ellipse((mouseX-x)/3, (mouseY-y)/3, 20,20)
ellipse((mouseX-x)/3, (mouseY-y)/3, 10,10)
ellipse((mouseX-x)/3, (mouseY-y)/3, 5,5)

ellipse((mouseX-x)/4, (mouseY-y)/4, 10,10)
ellipse((mouseX-x)/4, (mouseY-y)/4, 5,5)
ellipse((mouseX-x)/4, (mouseY-y)/4, 3,3)

}
  }

function keyPressed(){
	if (key === 's') {
save('Flower')
}


}
