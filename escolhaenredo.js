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
      name: 'tupa',
      rfid: 'E3646310'
    },
    {
      img: null,
      name: 'velho',
      rfid: 'E3EA89FD'
    },
  ];

let cartasFaltantes = 4; 

function escolherCarta() {

    image(imgFundo3, 0, 0);
    image(imgPersonagem, 50, 580, 170, 228);
    image(imgRefNarrativa, 408, 46);
    image(imgRefArtistica, 614, 46);
    image(imgRefMaterial, 408, 356);
    image(imgRefPesquisa, 614, 356);
    fill(243)
    noStroke();
    rect(260, 700, 870, 60, 10)
    fill(0)
    textSize(30);
    textStyle(BOLD)
    textFont(`Montserrat`);
    checkCartasEnredo();
  
  
    textAlign(LEFT, TOP);
    if (cartasFaltantes != 0) {
    text("Agora escolha "+ cartasFaltantes+ " cartas para construir seu enredo", 310, 715, 830);
    }
  }
  
  function checkCartasEnredo () {
  
    //console.log(tela)
   // console.log(currentTextIndex)
  
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
        image(pesquisa[i].img, 614, 356) 
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
        image(artistico[i].img, 614, 46) 
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
        image(personagem[i].img, 408, 46); 
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
        image(materiais[i].img, 408, 356) 
      }
    }  
  
    if (cardFound) {
      cartasFaltantes -= 1;
    }
  
    
    if (cartasFaltantes == 0) {
        push();
        fill('#64523d')
        textSize(30);
        textFont(`Montserrat`);
        textStyle(BOLD);
        textAlign(LEFT, TOP);
        text("Pressione o botão para confirmar suas escolhas", 310, 715);
        pop();
        } 
  }
  