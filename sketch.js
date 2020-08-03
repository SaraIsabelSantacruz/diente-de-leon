// Capas de los petalos del Diente de León 
let petals = [];
let midpetals = [];
let innerpetals = [];

//Estado principal de los petalos
let mode = 'still';
let mic = 0;

//Variables de control de cada capa
let on1 = false;
let on2 = false;
let on3 = false;

//Preload de las imagenes
function preload() {
  petalPic = loadImage("petal.svg");
  stemPic = loadImage("bodyPlant.png");
}

function setup() {
  setTimeout(() => {
    
  }, 1000);
  mic = new p5.AudioIn();
  mic.start();
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //
  let count = 15;
  let span = PI * 2 / count;

  for (var i = 0; i < count; i++) {
  // Se ubica el objeto petalos dentro del array de petalos
    petals.push(new petal(windowWidth/8, windowHeight/2+175, span*i, i, 'out'));
    midpetals.push(new petal(windowWidth/8, windowHeight/2+175, span*i, i, 'mid'));
    innerpetals.push(new petal(windowWidth/8, windowHeight/2+175, span*i, i, 'inn'));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  micLevel = mic.getLevel()*100; //obtener el nivel del volumen
  background(250);

  //La ubicacion del tallo del diente de leon
	//Rotacion del tallo para crear efecto de balanceado
  translate(windowWidth/5, windowHeight);
  rotate(sin(frameCount/30)/40);
  translate(-windowWidth/8+20, -windowHeight);
  image(stemPic, windowWidth/8-20, windowHeight/2+170, 40, 300);

  // Aqui se ejecuta el movimiento de los petalos o semillas del diente de leon
  // dependiendo del nivel de presion del microfono. 
	for (let i = 0; i < petals.length; i++) {
    if (mode=="move1"){
      petals[i].move();
    } else if(mode=="move2"){
      midpetals[i].move();
      petals[i].move();  
    } else if(mode=="move3"){
      innerpetals[i].move();
      midpetals[i].move();
      petals[i].move();  
    }
    petals[i].draw();
    midpetals[i].draw();
    innerpetals[i].draw();
  }
  
  if (micLevel > 40) {
		on1 = true;
  }
  if (micLevel > 60){
		on2 = true;
	}
	if (micLevel > 70){
		on3 = true;
	}

  if (on1 == true) {
    mode = "move1";
  }
  if (on2 == true) {
    mode = "move2";
  }
  if (on3 == true) {
    mode = "move3";
  }
}