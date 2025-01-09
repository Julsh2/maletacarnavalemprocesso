  let artistico = [
    {
      img: null,
      name: 'tupinamba',
      rfid: '0334E6FD'
    },
    {
      img: null,
      name: 'jcunha',
      rfid: '53835310'
    },
     {
      img: null,
      name: 'chihuly',
      rfid: '2429185B'
    },
    {
      img: null,
      name: 'jesbell',
      rfid: '937605FD',
    },
  ];
  
  let pesquisa = [
    {
      img: null,
      name: 'suassuna',
      rfid: 'F3106610'
    },
    {
      img: null,
      name: 'kopenawa',
      rfid: '636D36FC'
    },
    {
      img: null,
      name: 'simas',
      rfid: '83813410'
    },
    {
      img: null,
      name: 'andrade',
      rfid: '33B03C10'
    },
  ];

  let materiais = [
    {
      img: null,
      name: 'esculturas',
      rfid: '706A9155'
    },
    {
      img: null,
      name: 'vime',
      rfid: 'D3112D10'
    },
     {
      img: null,
      name: 'neon',
      rfid: 'F3F7DCFC'
    },
    {
      img: null,
      name: 'tecidos',
      rfid: 'E38D3D11'
    },
  ];
  
  let personagem = [
    {
      img: null,
      name: 'maira',
      rfid: 'F34BE4FC'
    },
    {
      img: null,
      name: 'sume',
      rfid: '936081FD'
    },
     {
      img: null,
      name: 'Tupã',
      rfid: 'E3646310'
    },
    {
      img: null,
      name: 'Velho Onça',
      rfid: 'E3EA89FD'
    },
  ];

let cartasFaltantes = 4; 

function escolherCarta() {

    image(imgFundo2, 0, 0);
    image(imgPersonagemMini, 53, 356);
    image(imgRefNarrativa, 284, 27);
    image(imgRefArtistica, 407, 27);
    image(imgRefMaterial, 284, 214);
    image(imgRefPesquisa, 407, 214);

    checkCartasEnredo();
  
    if (cartasFaltantes != 0) {
    fill(243)
    noStroke();
    rect(174, 417, 580, 40, 4)
    fill(0)
    textSize(21);
    textStyle(BOLD)
    textFont(`Montserrat`); 
    textAlign(LEFT, TOP);
    text("Agora escaneie "+ cartasFaltantes+ " cartas para construir seu enredo", 190, 428);
    }
  }
  
  function checkCartasEnredo () {
  
    //console.log(tela)
   // console.log(currentTextIndex)
   piscarIndex = piscarIndex + 1
    let cardFound = false; 
  
    for (let i = 0; i < pesquisa.length; i++) {
      if (pesquisa[i].rfid === RFIDData) {
        if (cartaPesquisa === "") { // Only if it was empty before
          cardFound = true;
          nomePesquisa = pesquisa[i].name; 
          console.log("Nome ref. pesquisa: " + nomePesquisa); 
        }
        cartaPesquisa = RFIDData;
      }
    }
    
    for (let i = 0; i < pesquisa.length; i++) {
      if (pesquisa[i].rfid === cartaPesquisa) {
        image(pesquisa[i].img, 407, 214);
      }
    }
    
      for (let i = 0; i < artistico.length; i++) {
      if (artistico[i].rfid === RFIDData) {
        if (cartaArtistica === "") { 
          cardFound = true;
          nomeArtistico = artistico[i].name; 
          console.log("Nome ref. artistica: " + nomeArtistico); 
        }
        cartaArtistica = RFIDData;
      }
    }
    
    for (let i = 0; i < artistico.length; i++) {
      if (artistico[i].rfid === cartaArtistica) {
        image(artistico[i].img, 407, 27);
      }
    }
    
    for (let i = 0; i < personagem.length; i++) {
      if (personagem[i].rfid === RFIDData) {
        if (cartaPersonagem === "") { 
          cardFound = true;
          nomePersonagem = personagem[i].name; // Definindo nomePersonagem
          console.log("Nome do personagem: " + nomePersonagem); 
        }
        cartaPersonagem = RFIDData;
      }
    }
  
    for (let i = 0; i < personagem.length; i++) {
      if (personagem[i].rfid === cartaPersonagem) {
        image(personagem[i].img, 284, 27); 
      }
    }
    
    for (let i = 0; i < materiais.length; i++) {
      if (materiais[i].rfid === RFIDData) {
        if (cartaMateriais === "") { 
          cardFound = true;
          nomeMateriais = materiais[i].name;
          console.log("Nome do material :" + nomeMateriais)
        }
        cartaMateriais = RFIDData;
      }
    }
    
    for (let i = 0; i < materiais.length; i++) {
      if (materiais[i].rfid === cartaMateriais) {
        //console.log(pesquisa[i].name); 
        image(materiais[i].img, 284, 214);
      }
    }  
  
    if (cardFound) {
      cartasFaltantes -= 1;
    }
  
    
    if (cartasFaltantes == 0) {
      if (piscarIndex % 100 < 70){
          fill('#b9d7de')
          rect(174, 417, 560, 40, 4)
          textSize(21);
          textFont(`Montserrat`);
          textStyle(BOLD);
          textAlign(LEFT, TOP);
          fill("#64523d")
          text("Pressione o botão para confirmar suas escolhas", 190, 428);
        }
      }
  }
  