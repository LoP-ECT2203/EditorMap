var imgParede;
var tamBloco = 40;
var tam = 15;
var cenario = [                 //  
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

function mouseClicked() {
  if(cenario[parseInt(mouseX/tamBloco)][parseInt(mouseY/tamBloco)] == '#'){
    cenario[parseInt(mouseX/tamBloco)][parseInt(mouseY/tamBloco)] = 'f'
  }else{
    cenario[parseInt(mouseX/tamBloco)][parseInt(mouseY/tamBloco)] = '#'
  }
}

function GenerateTxtFile(){

    var fso  = new ActiveXObject("Scripting.FileSystemObject");  
    var file = fso.CreateTextFile("C:/test.txt", true);

    file.writeline("Hello");
    file.writeline("World");
    file.Close();
}

function preload() {
  imgParede = loadImage("imagens/tijolo.png");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  
  background(0); 
  imageMode(CENTER); 
  GenerateTxtFile()
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
      }
    }
  }
}