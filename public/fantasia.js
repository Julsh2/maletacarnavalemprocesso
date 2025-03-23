
let nomePena = "";
let nomeTecido = "";
let nomeAcabamento = "";
let fantasiaEscolhida = false;


let pena = [
   {
      img: null,
      imgOnca: 'CROQUI/oncaAcetato.png',
      imgTupa: 'CROQUI/tupaAcetato.png',
      name: 'acetato',
      rfid: 'C33A3F10'
    },
     {
      img: null,
      imgOnca: 'CROQUI/oncaArtificial.png',
      imgTupa: 'CROQUI/tupaArtificial.png',
      name: 'artificial',
      rfid: 'C3A14210'
    },

   {
     img: null,
     imgOnca: 'CROQUI/oncaPluma.png',
     imgTupa: 'CROQUI/tupaPluma.png',
     name: 'pluma',
     rfid: '73214410'
   },
 ];
 
  let tecido = [
    {
       img: null,
       imgOnca: null,
       name: 'dublado',
       rfid: 'E32C3F10'
     },
      {
       img: null,
       imgOnca: null,
       imgTupa: null,
       name: 'lurex',
       rfid: 'B3BF3110'
     },
 
    {
      img: null,
      imgOnca: null,
      imgTupa: null,
      name: 'paete',
      rfid: '03F43A10'
    },
  ];
 
  let acabamento = [
    {
       img: null,
       imgOnca: null,
       imgTupa: null,
       name: 'galaom1',
       rfid: 'F3272A10'
     },
      {
       img: null,
       imgOnca: null,
       imgTupa: null,
       name: 'fio',
       rfid: 'A3483910'
     },
    {
      img: null,
      imgOnca: null,
      imgTupa: null,
      name: 'paete',
      rfid: 'C3819712'
    },
  ];
  
function telaFantasia() {

   image(imgFundo2, 0, 0);
   fill(255)

 if (nomePersonagem == 'Velho Onça') {
   fantasiaEscolhidaOnca()
}

if (nomePersonagem == 'Tupã') {
   fantasiaEscolhidaTupa()
   }

      let currentString = currentText.substring(0, currentCharacter);
        
         image(imgPersonagemMini, 60, 356);
         fill(243)
         noStroke();
         if (nomePersonagem == 'Velho Onça'){
         rect(174, 400, 595, 65, 4)
      }
         else {
         rect(174, 400, 553, 65, 4)
         }
         fill(0)
         push();
         textSize(20);
         textStyle(NORMAL)
         textFont(`Montserrat`); 
         textAlign(LEFT, TOP);
         text(currentString, 190, 386, 530);
         pop();
      
        if (currentCharacter < currentText.length) {
            currentCharacter += 0.7;
         } 
       else if (currentCharacter >= currentText.length) {
          textStyle(BOLD)
          fill(0)
          text(nomePersonagem, 634, 436, 560);
       }
 }

function telaTextoFantasia() {
 let currentString = currentText.substring(0, currentCharacter);
   if (currentCharacter < currentText.length) {
      currentCharacter += 0.7;
   } 

   if (currentTextIndex == 17) {
      image(imgFundo, 0, 0);
      image(imgPersonagem, 0, 100)
      push();
      fill(243)
      noStroke();
      rect(270, 112, 460, 300, 20)
      fill(0)
      textSize(21);
      textFont(`Montserrat`);
      textStyle(NORMAL);
      textAlign(LEFT, TOP);
      text(currentString, 290, 3 + 112, 460 - pageMargin, 300);
      pop();
   }

   if (currentTextIndex == 18) {
      image(imgFundoCDSCarnavalesco, 0, 0);
      image(imgPersonagemMini, 32, 360);
      push();
      fill(243)
      noStroke();
      rect(150, 380, 612, 85, 5)
      fill(0)
      textSize(19);
      textStyle(NORMAL);
      textFont(`Montserrat`);
      textAlign(LEFT, TOP);
      text(currentString, 162, 366, 600);
      pop();
      }
   
   if (currentTextIndex == 19) {
         push();
         image(imgFundo, 0, 0);
         image(imgCartaJorgeS, 310, 30, 180, 285)  
         image(imgPersonagemMini, 32, 360);
         fill(243)
         noStroke();
         rect(150, 350, 612, 115, 5)
         fill(0)
         textSize(19);
         textFont(`Montserrat`);
         textStyle(NORMAL);
         textAlign(LEFT, TOP);
         text(currentString, 162, 340, 600);
         pop();
   }

   if (currentTextIndex == 20 || currentTextIndex == 21) {
      image(imgFundo, 0, 0);
      image(imgCartaJorgeS, 40, 40);
      push();
      fill(243)
      noStroke();
      rect(327, 30, 435, 420, 20)
      fill(0)
      textSize(19);
      textStyle(NORMAL);
      textFont(`Montserrat`);
      textAlign(LEFT, TOP);
      text(currentString, 342, 26, 415, 416);
      pop();
      }
   
   if (currentTextIndex == 23) {
      telaFantasia();
   }

   if (currentTextIndex == 22 || currentTextIndex == 24) {
      image(imgFundo, 0, 0);
      image(imgPersonagem, 0, 100)
    
      push();
      fill(243)
      noStroke();
      rect(270, 112, 460, 300, 20)
      fill(0)
      textSize(21);
      textFont(`Montserrat`);
      textStyle(NORMAL);
      textAlign(LEFT, TOP);
      text(currentString, 290, 3 + 112, 460 - pageMargin, 300);
      pop();
   }

   if (currentTextIndex == 25) {
      image(imgFundoCDSAderecista, 0, 0);
      image(imgPersonagemMini, 32, 360);
      push();
      fill(243)
      noStroke();
      rect(150, 380, 612, 85, 5)
      fill(0)
      textSize(19);
      textStyle(NORMAL);
      textFont(`Montserrat`);
      textAlign(LEFT, TOP);
      text(currentString, 162, 366, 600);
      pop();
   }

   if (currentTextIndex == 26) {
      image(imgFundo, 0, 0);
      image(imgCartaMarcoS, 310, 30, 180, 285)  
      image(imgPersonagemMini, 32, 360);
      push();
      fill(243)
      noStroke();
      rect(150, 350, 612, 115, 5)
      fill(0)
      textSize(19);
      textFont(`Montserrat`);
      textStyle(NORMAL);
      textAlign(LEFT, TOP);
      text(currentString, 162, 340, 600);
      pop();
   }

   if (currentTextIndex == 27) {
      image(imgFundo, 0, 0);
      image(imgCartaMarcoS, 40, 40);
      push();
      fill(243)
      noStroke();
      rect(327, 50, 430, 380, 20)
      fill(0)
      textSize(20);
      textStyle(NORMAL);
      textFont(`Montserrat`);
      textAlign(LEFT, TOP);
      text(currentString, 342, 46, 405, 376);
      pop();
   }

   if (currentTextIndex == 28) {
      image(imgFundo, 0, 0);
      image(imgCartaMarcoS, 40, 40);
      push();
      fill(243)
      noStroke();
      rect(327, 80, 430, 310, 20)
      fill(0)
      textSize(20);
      textStyle(NORMAL);
      textFont(`Montserrat`);
      textAlign(LEFT, TOP);
      text(currentString, 342, 76, 405, 310);
      pop();
   }

   if (currentTextIndex == 29) {
      image(imgFundo, 0, 0);
      image(imgPena, 206, 60);
      image(imgTecido, 386, 60);
      image(imgAcabamento, 566, 60);
      image(imgPersonagemMini, 32, 360);
      push();
      fill(243)
      noStroke();
      rect(150, 350, 612, 115, 5)
      fill(0)
      textSize(19);
      textFont(`Montserrat`);
      textStyle(NORMAL);
      textAlign(LEFT, TOP);
      text(currentString, 162, 340, 600);
      pop();
   }

   if (currentTextIndex == 30) {
      cartasMateriaisFantasia()
   }

   if (currentTextIndex == 31) {
      fantasiaMateriais() 
   }

   if (currentTextIndex == 32) {
      image(imgFundo, 0, 0);
      image(imgPersonagem, 0, 100)
      push();
      fill(243)
      noStroke();
      rect(270, 112, 460, 300, 20)
      fill(0)
      textSize(21);
      textFont(`Montserrat`);
      textStyle(NORMAL)
      textAlign(LEFT, TOP);
      text(currentString, 290, 3 + 112, 460 - pageMargin, 300);
      pop();
   }
 
   if (currentTextIndex == 33) {
      image(imgFundoLDTAlegoria, 0, 0)
      image(imgPersonagemMini, 32, 360);
      push();
      fill(243)
      noStroke();
      rect(150, 380, 612, 85, 5)
      fill(0)
      textSize(19);
      textFont(`Montserrat`);
      textStyle(NORMAL)
      textAlign(LEFT, TOP);
      text(currentString, 162, 366, 600);
      pop();
   }

   if (currentTextIndex == 34) {
   push();
   image(imgFundo2, 0, 0);
   image(imgPersonagemMini, 40, 356);
   fill(255)
   rect(164, 400, 589, 65, 4)
   fill(0)
   textSize(24);
   textStyle(BOLD)
   textFont(`Montserrat`); 
   textAlign(LEFT, TOP);
   text("Compartilhe sua fantasia nas redes sociais ;)", 180, 418);
   textStyle(NORMAL)
   pop();

   if (nomePersonagem == 'Velho Onça') {
      fantasiaEscolhidaOnca()
   }

   if (nomePersonagem == 'Tupã') {
      fantasiaEscolhidaTupa()
   }
   }
}   

let cartasFaltantesFantasia = 3; 


 function cartasMateriaisFantasia() {
   image(imgFundo2, 0, 0);
   image(imgPersonagemMini, 53, 356);
   image(imgPena, 206, 60);
   image(imgTecido, 386, 60);
   image(imgAcabamento, 566, 60);

   checkCartaFantasia()

if (cartasFaltantesFantasia != 0) {
   push();
   fill(243)
   noStroke();
   rect(174, 359, 586, 40, 4)
   rect(174, 417, 586, 40, 4)
   fill(0)
   textSize(21);
   textStyle(BOLD)
   textFont(`Montserrat`); 
   textAlign(LEFT, TOP);
   text("Agora escaneie " + cartasFaltantesFantasia + " cartas para construir sua fantasia", 190, 370);
   textStyle(NORMAL)
   textSize(19);
   text("Lembre-se que ela precisa ser financeiramente equilibrada", 190, 428);
   pop();
}
   }

function checkCartaFantasia() {
   let cardFoundFantasia = false; 
   piscarIndex = piscarIndex + 1

   for (let i = 0; i < pena.length; i++) {
      if (pena[i].rfid === RFIDData) {
        if (nomePena === "") {
          cardFoundFantasia = true;
          nomePena = pena[i].name; 
          console.log("Nome pena " + nomePena); 
        }
        nomePena = RFIDData;
      }
  }
      for (let i = 0; i < pena.length; i++) {
          if (pena[i].rfid === nomePena)
         image(pena[i].img, 206, 60);     
          }  

for (let i = 0; i < acabamento.length; i++) {
    if (acabamento[i].rfid === RFIDData) {
        if (nomeAcabamento === "") {
            cardFoundFantasia = true;
            nomeAcabamento = acabamento[i].name;
            console.log("Nome acabamento " + nomeAcabamento);
        }
        nomeAcabamento = RFIDData;
    }
}

for (let i = 0; i < acabamento.length; i++) {
    if (acabamento[i].rfid === nomeAcabamento) {
        image(acabamento[i].img, 566, 60);
    }
}
for (let i = 0; i < tecido.length; i++) {
   if (tecido[i].rfid === RFIDData) {
       if (nomeTecido === "") {
           cardFoundFantasia = true;
           nomeTecido = tecido[i].name;
           console.log("Nome tecido " + nomeTecido);
       }
       nomeTecido = RFIDData;
   }
}

for (let i = 0; i < tecido.length; i++) {
   if (tecido[i].rfid === nomeTecido) {
       image(tecido[i].img, 386, 60);
   }

   if (cartasFaltantesFantasia == 0) {
      fantasiaEscolhida = true
      if (piscarIndex % 100 < 70){
         push();
          fill('#b9d7de')
          rect(174, 417, 560, 40, 4)
          textSize(21)
          textFont(`Montserrat`);
          textStyle(BOLD);
          textAlign(LEFT, TOP);
          fill("#64523d")
          text("Pressione o botão para confirmar suas escolhas", 190, 370);
          pop();
        }
        textSize(19);
        fill(243)
        rect(174, 417, 586, 40, 4)
        fill(0)
        text("Ótimo! Sua fantasia está sendo confeccionada", 190, 428);


   }
}

if (cardFoundFantasia) {
   cartasFaltantesFantasia -= 1;
   console.log(cartasFaltantesFantasia)
 }
}

function fantasiaMateriais() {
   let currentString = currentText.substring(0, currentCharacter);

   image(imgFundo2, 0, 0);
   image(imgPersonagemMini, 40, 356);
   push();
   fill(255)
   rect(164, 400, 589, 65, 4)
   fill(0)
   textSize(20);
   textStyle(NORMAL)
   textFont(`Montserrat`); 
   textAlign(LEFT, TOP);
   text(currentString, 180, 386, 570);
   pop();

   if (nomePersonagem == 'Velho Onça') {
   fantasiaEscolhidaOnca()
   }

   if (nomePersonagem == 'Tupã') {
      fantasiaEscolhidaTupa()
   }
}

function fantasiaEscolhidaOnca () {
 
  if (currentTextIndex == 31 || currentTextIndex == 34) {
      for (let i = 0; i < pena.length; i++) {
         if (pena[i].rfid === nomePena)
        image(pena[i].imgOnca, 245, 0);     
         }
   }
 
 if (nomeArtistico == 'tupinamba'){
   image(oncaTupinamba, 245, 0)
}

if (nomeArtistico == 'jcunha'){
   image(oncaJCunha, 245, 0)
}

if (nomeArtistico == 'jesbell'){
   image(oncaJEsbell, 245, 0)
}

if (currentTextIndex == 23) {
image(oncaVelhoOnca, 245, 0);
}

if (currentTextIndex == 31 || currentTextIndex == 34) {
   for (let i = 0; i < tecido.length; i++) {
      if (tecido[i].rfid === nomeTecido)
     image(tecido[i].imgOnca, 245, 0);     
      }

   for (let i = 0; i < acabamento.length; i++) {
         if (acabamento[i].rfid === nomeAcabamento)
        image(acabamento[i].imgOnca, 245, 0);     
   }
}

if (nomeArtistico == 'jesbell'){
   image(oncaJEsbell2, 245, 0)
}

if (nomeArtistico == 'jcunha'){
   image(oncaJCunha2, 245, 0)
}

if (nomeArtistico == 'chihuly'){
   image(oncaDChihuly, 245, 0)
}

 ///////////////////pesquisa
 if (nomePesquisa == 'simas'){
    image(oncaLSimas, 245, 0)
 }

 if (nomePesquisa == 'andrade'){
   image(oncaMdeAndrade, 245, 0)
 }

 if (nomePesquisa == 'suassuna'){
    image(oncaSuassuna, 245, 0)
 }

 if (nomePesquisa == 'kopenawa'){
    image(oncaKopenawa, 245, 0)
 }

 //////////////////materiais
 if (nomeMateriais == 'esculturas'){
    image(oncaEscultura, 245, 0)
 }

 if (nomeMateriais == 'neon'){
    image(oncaEscultura, 245, 0)
 }

 if (nomeMateriais == 'tecidos'){
    image(oncaTecidos, 245, 0)
 }

 if (nomeMateriais == 'vime'){
    image(oncaVime, 245, 0)
 }

 if (nomeMateriais == 'esculturas'){
   image(oncaEscultura, 245, 0)
}
}

function fantasiaEscolhidaTupa (){

   if (currentTextIndex == 31 || currentTextIndex == 34) {
      for (let i = 0; i < pena.length; i++) {
         if (pena[i].rfid === nomePena)
        image(pena[i].imgTupa, 245, 0);     
         }
   } 
     
      //////////////////artistico  
          if (nomeArtistico == 'tupinamba'){
             image(tupaTupinamba, 245, 0)
          }
          
          if (nomeArtistico == 'jcunha'){
             image(tupaJCunha, 245, 0)
          }
          
          if (nomeArtistico == 'jesbell'){
           image(tupaJEsbell, 245, 0)
        }
        if (nomeArtistico == 'chihuly'){
           image(tupaDChihuly, 245, 0)
        }
     
        if (nomeMateriais == 'vime'){
           image(tupaVime2, 245, 0)
              } 

     if (currentTextIndex == 23) {
          image(tupaTupa, 245, 0);
     }

     if (currentTextIndex == 31 || currentTextIndex == 34) {
         for (let i = 0; i < tecido.length; i++) {
            if (tecido[i].rfid === nomeTecido)
           image(tecido[i].imgTupa, 245, 0);     
            }
      
         for (let i = 0; i < acabamento.length; i++) {
               if (acabamento[i].rfid === nomeAcabamento)
              image(acabamento[i].imgTupa, 245, 0);     
         }
      }
          //////////////////artistico
          
          if (nomeArtistico == 'jcunha'){
             image(tupaJCunha2, 245, 0)
          }
          
           ///////////////////pesquisa
           if (nomePesquisa == 'simas'){
              image(tupaLSimas, 245, 0)
           }
          
           if (nomePesquisa == 'andrade'){
             image(tupaMdeAndrade, 245, 0)
           }
          
           if (nomePesquisa == 'suassuna'){
              image(tupaSuassuna, 245, 0)
           }
          
           if (nomePesquisa == 'kopenawa'){
              image(tupaKopenawa, 245, 0)
           }
          
           //////////////////materiais
           if (nomeMateriais == 'esculturas'){
              image(tupaEscultura, 245, 0)
           }
          
           if (nomeMateriais == 'neon'){
              image(tupaEscultura, 245, 0)
           }
          
           if (nomeMateriais == 'tecidos'){
              image(tupaTecidos, 245, 0)
           }
          
           if (nomeMateriais == 'vime'){
              image(tupaVime, 245, 0)
           }
   }