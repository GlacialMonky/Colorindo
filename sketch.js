var x= (200)
var y= (173)
var tela =0;
var pontuacao = 0
var vida = 3;

// cores
var cor_q1 = "white";
var cor_q1_b = false;
var cor_q2 = "white";
var cor_q2_b = false;

var cores_opcoes = ["yellow","red","blue"]
var cores_pergunta = ["orange","green","purple"]
var combinacao = [["red","yellow"], ["blue","yellow"], ["red","blue"]]
var aleatorio = []


/*
Amarelo + vermelho = Laranja
Azul + amarelo = Verde
Vermelho + Azul = Roxo
vermelho + roxo = pink
*/

function preload() {
  img = loadImage('colorfull.jpg');
}

function setup() {
  createCanvas(400,500);
  
  // gera uma sequencia aleatoria das cores
  min = Math.ceil(0);
  max = Math.floor(3);
  for(i=0;i<3;i++){
	  num = Math.floor(Math.random() * (max - min)) + min;
	
	  while(aleatorio.includes(num)==true){
		  num = Math.floor(Math.random() * (max - min)) + min;
	  }
	  aleatorio[i] = num
  }
  
}
function draw() {
background(0);
image(img,-400,-500)



fill('#ffffff');
textStyle(BOLDITALIC)
textSize(30);
text(' COLORINDO!', 70, 90);

textStyle(ITALIC)
textSize(30);
text('Jogar', 130, 180);
text('Instruções',130, 277);
text('Créditos', 130, 375);
  
  if(mouseX>=120 && mouseX<=280 && mouseY>=120 && mouseY<=200 && tela==0){
    
    fill('#fffff') 
    rectMode(RADIUS);
    fill(255);
    rect(200, 173, 85, 35, 20);
    rectMode(CENTER);
    fill(0);
    rect(200, 173, 160, 60, 20);
    fill("white")
    textStyle(ITALIC)
    textSize(30);
    text('Jogar', 130, 180);
    
    if(mouseIsPressed) {
      tela=1;  
    }
  }
  if(mouseX>=120 && mouseX<=280 && mouseY>=250 && mouseY<=280 && tela==0){
    fill('#fffff') 
    rectMode(RADIUS);
    fill(255);
    rect(x, 268, 85, 35, 20);
    rectMode(CENTER);
    fill(0);
    rect(x, 268, 160, 60, 20);
    fill("white")
    textStyle(ITALIC)
    textSize(30);
    text('Instruções', 130, 277);
    if(mouseIsPressed) {
      tela=2;
    }
  }
  if(mouseX>=120 && mouseX<=280 && mouseY>=350 && mouseY<=380 && tela==0){
    fill('#fffff') 
    rectMode(RADIUS);
    fill(255);
    rect(x, 364, 85, 35, 20);
    rectMode(CENTER);
    fill(0);
    rect(x, 364, 160, 60, 20);
    fill("white")
    textStyle(ITALIC)
    textSize(30);
    text('Créditos', 130, 375);
    if(mouseIsPressed) {
       tela=3;
    }
  }
  switch(tela){
    case 1:
      fase();
      break;
    case 2:
      instrucoes();
      break;
    case 3:
      creditos();
      break;
    case 4:
      acerto();
      break
    case 5:
      erro();
      break
    case 6:
      vitoria();
      break;
    case 7:
      gameover();
      break;
    case 0:
      break;
      
      
  }

}

// tela 1
function fase(){

background("black")
fill('#ffffff');
textStyle(BOLD)
textSize(35);
rect(185,443,180,50)
fill("black")
text("Confirmar", 100, 455);
fill("white")
text("+", 135, 195);
fill("white")
text("=", 235, 195)

textSize(20)
fill("white")
text("Vida: "+vida,10,50)

textSize(20)
fill("white")
text("Pontuação: "+pontuacao,250,50)
  
  
fill(cor_q1)
rect(100, 180, 55, 55);
fill(cor_q2)
rect(190, 180, 55, 55);

fill(cores_pergunta[aleatorio[pontuacao]])
rect(300, 180, 55, 55);

fill(cores_opcoes[aleatorio[0]])
ellipse(70, 370, 50, 50);
fill(cores_opcoes[aleatorio[1]])
ellipse(150, 370, 50, 50);

fill(cores_opcoes[aleatorio[2]])
ellipse(230, 370, 50, 50);

// bola um
if(mouseX>=45 && mouseX<=95 && mouseY>=340 && mouseY<=395){
  if(mouseIsPressed) {
    if(cor_q1_b==false){
      cor_q1 = cores_opcoes[aleatorio[0]]
      cor_q1_b= true
      sleep(500);
    }
    else if(cor_q2_b == false){
      cor_q2= cores_opcoes[aleatorio[0]]
      cor_q2_b = true
      sleep(500);
    }
  }
}
  
// bola dois
if(mouseX>=125 && mouseX<=175 && mouseY>=340 && mouseY<=395){
  if(mouseIsPressed) {
    if(cor_q1_b==false){
      cor_q1 = cores_opcoes[aleatorio[1]]
      cor_q1_b= true
      sleep(500);
    }
    else if(cor_q2_b == false){
      cor_q2= cores_opcoes[aleatorio[1]]
      cor_q2_b = true
      sleep(500);
      
    }
  }
}
// bola tres
if(mouseX>=205 && mouseX<=255 && mouseY>=350 && mouseY<=380){
  if(mouseIsPressed) {
    if(cor_q1_b==false){
      cor_q1 = cores_opcoes[aleatorio[2]]
      cor_q1_b= true
      sleep(500);
    }
    else if(cor_q2_b == false){
      cor_q2= cores_opcoes[aleatorio[2]]
      cor_q2_b = true
      sleep(500);
    }
  }
}
// bola quatro

  
if(mouseX>=70 && mouseX<=125 && mouseY>=150 && mouseY<=210){
  if(mouseIsPressed) {
  cor_q1 = "white"
  cor_q1_b = false
  }
}

if(mouseX>=158 && mouseX<=218 && mouseY>=150 && mouseY<=210){
  if(mouseIsPressed) {
  cor_q2 = "white"
  cor_q2_b = false
  }
}

if(mouseX>=90 && mouseX<=278 && mouseY>=416 && mouseY<=465){
  if(mouseIsPressed){
    // Se acertou 
    if(cor_q1_b==true && cor_q2_b==true){
      
      if((cor_q1==combinacao[cores_pergunta.indexOf(cores_pergunta[aleatorio[pontuacao]])][0] && cor_q2==combinacao[cores_pergunta.indexOf(cores_pergunta[aleatorio[pontuacao]])][1]) || (cor_q2==combinacao[cores_pergunta.indexOf(cores_pergunta[aleatorio[pontuacao]])][0] && cor_q1==combinacao[cores_pergunta.indexOf(cores_pergunta[aleatorio[pontuacao]])][1] )){
        cor_q1="white"
        cor_q2="white"
        cor_q1_b=false
        cor_q2_b=false
        
        pontuacao++
        
        if(pontuacao==3){
          pontuacao = 0
          vida = 3
          tela = 6
        }
        else{
          tela = 4
        }
      }
      // Se errou
      else{
        cor_q1="white"
        cor_q2="white"
        cor_q1_b=false
        cor_q2_b=false
        
        vida = vida-1
        
        if(vida==0){
          pontuacao = 0
          vida = 3
          tela =7
        }
        else{
          tela = 5
        }
      }
    }
  }
}
}

// tela 4
function acerto(){
  background("green");
  fill('#ffffff');
  textStyle(BOLD)
  textSize(25);
text('Parabéns, você acertou!', 45, 90);
textSize(15);
  text('Pressione Enter para continuar!', 80,400);
}

// tela 5
function erro(){
  background("red");
  fill('#ffffff');
  textStyle(BOLD)
  textSize(25);
text('Que pena, tente novamente!', 35, 90);
  textSize(15);
  text('Pressione Enter para continuar!', 80,400);
}

// tela 6
function vitoria(){
  background("green");
  fill('#ffffff');
  textStyle(BOLD)
  textSize(25);
text('Parabéns, você ganhou!', 45, 90);
  textSize(15);
  text('Pressione Enter para continuar!', 80,400);
}

// tela 7
function gameover(){
  background("red");
  fill('#ffffff');
  textStyle(BOLD)
  textSize(23);
text('Que pena, você não completou!', 30, 90);
  text('Tente novamente!', 100, 120);
  textSize(15);
  text('Pressione Enter para retornar ao menu', 50,400);
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
function instrucoes(){
  background(0);
image(img,-100,-500);
  fill('#ffffff');
  textStyle(BOLD)
  textSize(35);
text('Instruções', 110, 90);
textSize(15)
  text('1~ Irão aparecer algumas opções de cores para você', 5, 150);
  text('selecionar com o mouse, clique e faça as combinações', 5, 170);
  text('pedidas!.', 5,190)
  text('2~ Caso você venha a errar a escolha de cores basta',5, 220);
  text('clicar no respectivo quadrado e ele voltará ao branco', 5, 240);
  text('Utilize o Enter para voltar ao menu principal durante', 5,290)
   text('o jogo.', 5,310)
  textSize(15)
  text('Aperte Enter Para Voltar', 100, 390)
}
function creditos(){
  background(0);
image(img,-700,-500)
  textStyle(BOLD)
  textSize(35);
text('Thales Oliveira  ', 70, 90);
text('Turma 3 LOP 2021', 50, 140)
textSize(25)
  text('Coach: Raffael Morais',60,240)
textSize(25)
  text('Matricula: 20190070773', 60, 190)
  textSize(15)
  text('Aperte Enter Para Voltar', 100, 350)
}
function keyPressed() {

  if(key=="Enter" && (tela==2 || tela==3||tela==1)){
    tela=0
  }
  if(key=="Enter" && (tela==4 || tela==5)){
    tela=1
  }
  if(key=="Enter" && (tela==6 || tela==7)){
    tela=0
  }
}