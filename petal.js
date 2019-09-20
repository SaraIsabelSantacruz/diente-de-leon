function petal(xs, ys, rot, index, type) {
  //definir los parameteros de los petalos
  let x, y;
  let sizeScale = 0.35;
	this.index=index
  this.xStart = xs;
  this.yStart = ys;
  this.xDis = random(50,100);
  this.xSpeed = random(0,1);
  this.xTheta = random(360);
  this.ox = this.xStart;
  this.oy = this.yStart;
  this.rotateT = rot;
  this.size = random(55, 60);
  this.ySpeed = this.size / 80;
  this.sizeYT = random(360);
  this.sizeYSpeed = this.size / 50;
  this.sizeYScale = 0;

  if(type === 'out') {
    sizeScale = 0.28;
  } else if(type === 'inn'){
    sizeScale = 0.2;
  }
  
  this.draw = function() {
    fill(100);
    push();		
  // Trasladar 
    translate(this.ox, this.oy);
    rotate(this.rotateT);
		rotate(sin(frameCount/(40+noise(index)*50)+noise(index))/16);
    
  //
    beginShape();
    x = 0;
    y = 3;
    image(petalPic, x, y, this.size*3*sizeScale, this.size*4*sizeScale);
    endShape(CLOSE);
    pop();
  };

  //
  this.move = function() {
    this.xStart += this.xDis * 0.04
    this.ox = this.xStart;
    this.oy -= this.ySpeed* random(1, 3);
    this.xTheta += this.xSpeed; 
    this.sizeYT += this.sizeYSpeed;
    this.sizeYScale = abs(sin(radians(this.sizeYT)));
  }
}
