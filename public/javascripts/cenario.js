var imgParede;
var tamBloco = 40;
var tam = 15;
var cenario = [[]];
function LimparTela(){
 cenario = [                 
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
    ['f','f','f','f','f','f','f','f','f','f','f','f','f','f','f'],
  ];
}
function mouseClicked() {
  if(cenario[parseInt(mouseX/tamBloco)][parseInt(mouseY/tamBloco)] == '#'){
    cenario[parseInt(mouseX/tamBloco)][parseInt(mouseY/tamBloco)] = 'b'
  }else if(cenario[parseInt(mouseX/tamBloco)][parseInt(mouseY/tamBloco)] == 'b'){
    cenario[parseInt(mouseX/tamBloco)][parseInt(mouseY/tamBloco)] = 't'
  }else if(cenario[parseInt(mouseX/tamBloco)][parseInt(mouseY/tamBloco)] == 't'){
	cenario[parseInt(mouseX/tamBloco)][parseInt(mouseY/tamBloco)] = 'f'
  }else{
	  cenario[parseInt(mouseX/tamBloco)][parseInt(mouseY/tamBloco)] = '#'
  }
}

function preload() {
	imgFant = loadImage("./images/fantasma.gif");
	imgFruta = loadImage("./images/fruta.jpg");
	imgParede = loadImage("./images/tijolo.png");
}

function setup() {
  var canvas = createCanvas(600, 600);
  canvas.parent('content')
  LimparTela();
}

function draw() {
  background(0);
  imageMode(CENTER);
  for(i=0;i<tam;i++){
    for(j=0;j<tam;j++){

      pXmatriz = i*tamBloco + tamBloco/2;
      pYmatriz = j*tamBloco + tamBloco/2;

      if(cenario[i][j] == "f"){
        fill(250,250,250);
        strokeWeight(1);
        ellipse(pXmatriz , pYmatriz, tamBloco/5, tamBloco/5);
      }else if ( cenario[i][j] == '#'){
        image(imgParede,pXmatriz,pYmatriz);
      }else if(cenario[i][j] == 'b'){
		  image(imgFruta, pXmatriz, pYmatriz);
	  }else if(cenario[i][j] == 't'){
		  image(imgFant, pXmatriz, pYmatriz);
	  }
    }
  }
}
