function setup() {
  createCanvas(windowWidth, windowHeight);
   //noStroke();
  background(224, 255, 255);
  for (var i=0; i<=random(30,400); i++){
    let x=random(width);     
    let y=random(height);
    let dc=random(15,30);
    let dp=random(15,30)+4;
    
   
  fill(random(75,200),13,random(100,255));
  circle(x-3,y+12,dp);
  circle(x-13,y+2,dp);
  circle(x-5,y-13,dp);
  circle(x+12,y-8,dp);
  circle(x+12,y+7,dp);
    
  //fill (250, 250, 210);
  fill(230, 230, 250);
  circle(x,y,dc); 

 
}

}

function draw() {

}

function mouseClicked(){
   //noStroke();
  background(224, 255, 255);
  for (var i=0; i<=random(30,400); i++){
    let x=random(width);     
    let y=random(height);
    let dc=random(15,30);
    let dp=random(15,30)+4;
    
   
  fill(random(75,200),13,random(100,255));
  circle(x-3,y+12,dp);
  circle(x-13,y+2,dp);
  circle(x-5,y-13,dp);
  circle(x+12,y-8,dp);
  circle(x+12,y+7,dp);
    
  //fill (250, 250, 210);
  fill(230, 230, 250);
  circle(x,y,dc); 

 
}

}
