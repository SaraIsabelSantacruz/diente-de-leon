function petal(xs, ys, rot, index, type) {
  //Aqui se definen los parameteros de los petalos
  let x, y; // ----> estas son las posiciones.
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

  // Aqui se define el tamano de los petalos,
  // dependiendo de si son los de afuera o los de adentro.
  if(type === 'out') {
    sizeScale = 0.28;
  } else if(type === 'inn'){
    sizeScale = 0.2;
  }

  this.draw = function() {
    fill(100);
    push();		
    // Esto se encarga de la traslacion de los petalos.
    translate(this.ox, this.oy);
    rotate(this.rotateT);
		rotate(sin(frameCount/(40+noise(index)*50)+noise(index))/16);
    beginShape();
    x = 0;
    y = 3;
    image(petalPic, x, y, this.size*3*sizeScale, this.size*4*sizeScale);
    endShape(CLOSE);
    pop();
  };

  //Esta funcion se encarga de moverlos dependiendo del nivel de presion del microfono que se define
  // en el sketch principal
  this.move = function() {
    this.xStart += this.xDis * 0.04
    this.ox = this.xStart;
    this.oy -= this.ySpeed* random(1, 3);
    this.xTheta += this.xSpeed; 
    this.sizeYT += this.sizeYSpeed;
    this.sizeYScale = abs(sin(radians(this.sizeYT)));
  }
}
