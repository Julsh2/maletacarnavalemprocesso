let enredoGrandeRio = false;
let enredoOutro = false;

let indexPontosEscolha = 0;

let enredos = [
    {
      img: null,
      name: 'grande rio',
      rfid: '33090EFD'
    },
    {
      img: null,
      name: 'portela',
      rfid: 'E34F9AFD'
    },
     {
      img: null,
      name: 'mocidade',
      rfid: '33F56710'
    },
  ];


function checkEnredo () {

if (indexPontosEscolha == 1) {

  for (let i = 0; i < enredos.length; i++) {
    
    if (enredos[1].rfid === RFIDData || enredos[2].rfid === RFIDData) {
     enredoOutro = true;
     enredoGrandeRio = false;
    }

    if (enredos[0].rfid === RFIDData) {
      enredoGrandeRio = true;
      enredoOutro = false;
    }
    }
  }
}  

function telaEscolherEnredo(){

    let currentString = currentText.substring(0, currentCharacter);
    indexPontosEscolha = 1;
    piscarIndex = piscarIndex + 1

    checkEnredo ();
    push();
    image(imgFundo, 0, 0);
    image(imgPersonagemCirc, 128, 24);
    fill(243)
    noStroke();
    rect(237, 48, 420, 43, 5)
    fill(0)
    textSize(21);
    textStyle(BOLD)
    textFont(`Montserrat`);
    textAlign(LEFT, TOP);
    text(currentString, 256, 34);
    pop();

  
  if (enredoGrandeRio == false && enredoOutro == false) {
    for(i = 0; i < imgEnredos.length; i++){
      image(imgEnredos[i], 110+(206*i), 128);
     } 
  }
  
  else if (enredoGrandeRio == true) {
    image(imgEnredosOp[0], 110+(206*0), 128);
    image(imgEnredos[1], 110+(206*1), 128);
    image(imgEnredosOp[2], 110+(206*2), 128);
    
    if (piscarIndex % 100 < 70){
          push();
          fill('#b9d7de')
          rectMode(CENTER);
          noStroke();
          rect(width/2, 440, 610, 44);
          fill("#1e0f10")
          textSize(23);
          textStyle(BOLD);
          textFont("Montserrat");
          noStroke();
          textAlign(CENTER, BASELINE);
          text('Pressione o botão para confirmar sua escolha.', width/2, 450);
          pop();
      }
     }
  
  else if (enredoOutro == true) {
    
    if (enredos[1].rfid === RFIDData) {
      image(imgEnredosOp[0], 110, 128);
      image(imgEnredosOp[1], 110+206, 128);
      image(imgEnredos[2], 110+(206*2), 128);
    }
  
    else if (enredos[2].rfid === RFIDData) {
      image(imgEnredos[0], 110+(206*0), 128);
      image(imgEnredosOp[1], 110+(206*1), 128);
      image(imgEnredosOp[2], 110+(206*2), 128);
    }
  
    if (piscarIndex % 100 < 70) {
    push();
    fill('#b9d7de')
    rectMode(CENTER);
    noStroke();
    rect(width/2, 440, 716, 44);
    fill("#1e0f10")
    textSize(23);
    textStyle(BOLD);
    textFont("Montserrat");
    noStroke();
    textAlign(CENTER, BASELINE);
    text('Enredo não desenvolvido ainda. Por favor, escolha outro.', width/2, 448);
    pop();
    }
    }

  }
  
  function falaJoaoGustavo() {
    currentString = currentText.substring(0, currentCharacter);
  
    // console.log(currentCharacter)
    // console.log("a:" + currentText.length)
    // console.log(currentTextIndex)
  
    image(imgFundo, 0, 0);
    image(imgCartaJoaoG, 40, 40);
   
  if (currentTextIndex == 11) {
  
    push();
    fill(243)
    noStroke();
    rect(327, 100, 430, 260, 20)
    fill(0)
    textSize(20);
    textStyle(NORMAL);
    textFont(`Montserrat`);
    textStyle(NORMAL);
    textAlign(LEFT, TOP);
    text(currentString, 342, 96, 405, 260);
    pop();
  }
  
  else if (currentTextIndex == 12) {
  
    push();
    fill(243)
    noStroke();
    rect(327, 80, 430, 310, 20)
    fill(0)
    textSize(20);
    textStyle(NORMAL);
    textFont(`Montserrat`);
    textStyle(NORMAL);
    textAlign(LEFT, TOP);
    text(currentString, 342, 76, 405, 310);
    pop();
    }
  }

