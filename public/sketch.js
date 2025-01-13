let imgFundo; 
let imgPersonagem; 
let piscarIndex = 0;

let nomePersonagem = "";
let nomeMateriais;
let nomeArtistico;
let nomePesquisa;
let nomeAla = "";

let tela = -1;

let relatos = [
  {
    rfid: '038CBCFC',
    imageURL: 'TESTES/telaNana.png',
    audioURL: 'TESTES/nana.mp3'
  },
  {
    rfid: 'A3802B10',
    imageURL: 'TESTES/telaNicolas.png',
    audioURL: 'TESTES/nicolas.mp3'
  },
  {
    rfid: '43A73210',
    imageURL: 'TESTES/telaZulu.png',
    audioURL: 'TESTES/zulu.mp3'
  },
];

let textsIntro = [
  {
    label: `
Olá! Bem-vindo à Maleta Carnaval em Processo.

Hoje vamos falar sobre a construção de um desfile de escola de samba, passando por três tópicos: enredo, fantasia e alegoria. 
`,
    audioURL: 'NARRACAO/index1.mp3'
  },
  {
    label: `
Sou Artur, carnavalesco, graduado em Arquitetura e estudante de cenografia da Escola de Belas Artes da UFRJ. Vou te auxiliar nessa jornada de apresentar um pouco dos processos para a confecção de um desfile de escola de samba. 

Vamos nessa?!
`,
    audioURL: 'NARRACAO/index2.mp3'
  },
  {
    label: `
Essa trajetória terá como objetivo ser narrada pelos próprios profissionais que trabalham nas escolas de samba, ao mesmo tempo em que você, interator, pensará sobre a construção de um desfile. 
`,
    audioURL: 'NARRACAO/index3.mp3'
  },
  {
    label: `
A confecção de um desfile de escola de samba do Rio de Janeiro do Grupo Especial é feita na Cidade do Samba, localizada na Gamboa. 
`,
    audioURL: 'NARRACAO/index4.mp3'
  },
  {
    label: `
Para conhecer melhor a estrutura de um barracão, voce pode dar uma olhada na ilustração ao lado.
`,
    audioURL: 'NARRACAO/index30.mp3'
  },
  {
    label: `
Este é um resumo das etapas de confecção de um desfile. O processo acontece durante o ano inteiro, e finaliza com o desfile oficial em fevereiro.
`,
    audioURL: 'NARRACAO/index5.mp3'
  },
  {
    label: `
Vamos começar apresentando o processo pela primeira etapa: a criação do enredo. 
`,
    audioURL: 'NARRACAO/index6.mp3'
  },
  {
    label: `
O desenvolvimento do enredo acontece no 3º andar da Cidade do Samba e é desenvolvido pelo enredista. Ele pesquisa, desenvolve e elabora a narrativa do desfile.
`,
    audioURL: 'NARRACAO/index31.mp3'
  },
  {
    label: `
Para entender mais sobre essa etapa, que tal simularmos o processo de criação de um enredo?
`,
    audioURL: 'NARRACAO/index8.mp3'
  },
  {
    label: `
Qual enredo você vai desenvolver?
`,
    audioURL: ''
  },
  {
    label: `
Grande Rio 2024: Nosso Destino é ser Onça. Ótima escolha!
Agora vamos ouvir um pouco sobre o processo de construção do enredo, com um relato de um enredista, o João Gustavo Melo.
`,
    audioURL: 'NARRACAO/index9.mp3'
  },
  {
    label: `
"Essa pesquisa de enredo, ela acontece logo depois do carnaval. E a gente se coloca de uma forma a entrar naquele universo de uma forma completamente imersiva, mas tudo em função daquela história que vai ser contada e vai selecionando aspectos visuais e também assuntos, pontos de interesse (...).
`,
    audioURL: 'AUDIOS/audioJoao1.mp3'
  },
  {
    label: `
"É muito instigante porque ele mexe com uma pesquisa muito profunda e a partir desse momento que você tem essa imersão, você consegue conectar com o passado e transformar esse passado, reprocessar esse passado e construir novos imaginários na sociedade. Pra mim, acho que é ser grande barato de construção de enredo e que é uma construção de uma obra coletiva muito, muito bonita."
`,
    audioURL: 'AUDIOS/JoaoGustavoMelop2.wav'
  },
  {
    label: `
Para mergulharmos no processo de construção de um enredo, assim como um enredista, vamor explorar o universo temático a partir das cartas. 
`,
    audioURL: 'NARRACAO/index10.mp3'
  },
  {
    label: `
São quatro tipos de cartas: referência teórica, referência artística, personagem de enredo e material. Com a composição das suas escolhas, começará a construir o enredo.
`,
    audioURL: 'NARRACAO/index11.mp3'
  },
  {
    label: `
No verso, encontramos uma breve explicação de cada carta para nos guiar pelo universo temático, tal como faz um profissional de pesquisa no carnaval.
`,
    audioURL: 'NARRACAO/index12.mp3'
  },
  {
    label: '',
    audioURL: ''
  },
  {
    label: `
Pronto! Vamos avançar para transformar a parte teórica em algo visual e materializado, utilizando como exemplo a criação de uma fantasia. 
Essa etapa é responsabilidade do carnavalesco. 
`,
    audioURL: 'NARRACAO/index13.mp3'
  },
  {
    label: `
O processo criativo do carnavalesco acontece no 3º andar da Cidade do Samba. Ele é responsável pela concepção artística e técnica de um desfile de escola de samba.
`,
    audioURL: 'NARRACAO/index32.mp3'
  },
  {
    label: `
Dentre muitas funções de um carnavalesco, ele é o profissional responsável pelo desafio de transformar conceitos abstratos em expressões visuais e concretas. 
Vamos então ouvir o carnavalesco Jorge Silveira.
`,
    audioURL: 'NARRACAO/index15.mp3'
  }, 
  {
    label: `
Acredito que a minha grande tarefa, a grande função do carnavalesco, é encontrar as imagens certas, por meio de alegorias, por meio de fantasias, pela escolha dos materiais. Eu trabalho a partir do texto para poder construir a maneira como o enredo vai se comunicar visualmente na avenida. Eu tento desenvolver a narrativa a partir de imagens que sejam claramente identificáveis. Então, eu vou sempre buscar elementos que possam traduzir de maneira didática as ideias e com valor artístico, que essas imagens possam ter força de representatividade na narrativa, mas que tenham também beleza estética. (...)
`,
    audioURL: 'AUDIOS/audioJorge1.mp3'
  }, 
  {
    label: `
Portanto, o enredo é determinante no processo de influência daquilo que eu vou desenhar e naquilo que eu vou construir, porque é a partir do texto que eu vou entender qual é a filosofia do enredo, quais são as imagens que eu preciso escolher, qual é o espírito daquele enredo, qual é a narrativa. (...). Cada texto, cada enredo, ele provoca uma emoção, ele tem uma direção, (...) e o meu desafio é colher desse texto o universo imagético para traduzir em fantasia, traduzir alegorias. Então não é possível pensar alegorias e fantasias sem o enredo, e o enredo não existe na avenida se não for o trabalho das fantasias e das alegorias.`,
    audioURL: 'AUDIOS/audioJorge2.mp3'
  },
  {
    label: `
Diante do foi ouvido, que tal visualizarmos o resultado das suas escolhas de enredo na criação de uma fantasia? 
`,
    audioURL: 'NARRACAO/index17.mp3'
  }, 
  {
    label: `
A partir das suas decisões de referências, tais escolhas foram aplicadas em uma ala sobre 
`,
    audioURL: ''
  },   
  {
    label: `
Nessa próxima etapa, vamos aprimorar sua fantasia. 

A construção de uma fantasia equilibrada é uma das tarefas que a equipe de adereçagem enfrenta no processo de transformação dos desenhos carnavalescos em realidade.
`,
    audioURL: 'NARRACAO/index18.mp3'
  },  
  {
    label: `
A construção das fantasias acontece no 4º andar da Cidade do Samba, com a participação principalmente de aderecistas e costureiros. 
`,
    audioURL: 'NARRACAO/index19.mp3'
  },
  {
    label: `
Para saber mais sobre essa etapa crucial do projeto de carnaval, iremos ouvir o relato do aderecista Marcos Salles. 
Ele falará sobre o planejamento para o desenvolvimento das fantasias e quais as preocupações quanto ao uso de materiais.
`,
    audioURL: 'NARRACAO/index20.mp3'
  },
  {
    label: `
"Atualmente eu exerço a função de gestor de compras e chefe de equipe, chefe de ateliê. Então assim, eu tenho organizações de planejamentos distintos, porque o chefe de ateliê tem um planejamento em cima do trabalho da fantasia com relação a prazo, com relação ao tempo de execução de cada ateliê. Etapa e ao material que está sendo utilizado e enquanto comprador, gestor de compras, eu tenho que me preocupar diretamente e lidar diretamente com direção de carnaval, carnavalesco, chefe de ateliê."`,
    audioURL: 'AUDIOS/audioMarcos2.mp3'
  },
  {
    label: `
"E isso é muito bom porque eu acabo tendo uma visão macro da festa até eu poder jogar apenas para o meu setor. Então isso para mim é de vital valor. Com relação ao enredo, a cada ano do carnaval é um enredo distinto. O benefício desses enredos diferentes é que você acaba tendo acesso a mais materiais, a mais pesquisas, a mais ideias e isso facilita a bagagem do nosso trabalho. (...) "`,
    audioURL: 'AUDIOS/audioMarcos1.mp3'
  },
  {
    label: `
Para isso, precisaremos tomar três decisões sobre a adereçagem: o tipo de pena que irá decorar sua fantasia, o material utilizado para o acabamento e o tecido em que a fantasia será confeccionada. 
`,
    audioURL: 'NARRACAO/index21.mp3'
  },
  {
    label: `

`,
    audioURL: ''
  },
  {
    label: `
Sua fantasia será reproduzida em 80 peças para o desfile. Que tal então vermos a confecção das alegorias?`,
    audioURL: ''
  },
  {
    label: `
Nessa última fase, veremos sobre a confecção das alegorias. 
    `,
    audioURL: 'NARRACAO/index24.mp3'
  },
  {
    label: `
Em dezembro, temos um grande avanço na montagem de carros alegóricos.
`,
    audioURL: 'NARRACAO/index25.mp3'
  },
  {
    label: `
    A explicação completa para a fase de alegoria ainda está em desenvolvimento. Mas enquanto isso, que tal compartilhar o resultado do seu processo de construção de um desfile nas redes sociais?

    Espero que você tenha desfrutado da nossa jornada. Até breve!
`,
    audioURL: 'NARRACAO/index29.mp3'
  },
];


var currentTextIndex = -1;
var currentText;

let currentCharacter = 0;
let pageMargin = 30;

let audio = [];
let isPlaying = false;
let voz = [];
let imagens = [];
let cartaInicio = '03474610';
let currentAudio = null;
var cartaIndex = -1;

let imgEnredos = [];
let imgEnredosOp = [];

let cartaPersonagem = "";
let cartaPesquisa = "";
let cartaArtistica = "";
let cartaMateriais= "";

function preload() {

  imgLogo = loadImage('GERAL/logoNova.png')
  imgFundo = loadImage('GERAL/fundo_v2.png');
  imgFundo2 = loadImage('GERAL/fundo.png');
  imgPersonagem = loadImage('GERAL/artur.png');
  imgPersonagemMini = loadImage('GERAL/artur_mini.png');
  imgPersonagemCirc = loadImage('GERAL/artur_circ.png');
  imgCartasEnredo = loadImage('GERAL/cartasenredo.png')
  imgTelaRelatos = loadImage('TESTES/telaRelatos.png')
  imgTelaEscolha = loadImage('TESTES/telaEscolha.png')

  imgKopenawa = loadImage('PESQUISA/kopenawa.png');
  imgSuassuna = loadImage('PESQUISA/suassuna.png');
  imgSimas = loadImage('PESQUISA/simas.png');
  imgMDeAndrade = loadImage('PESQUISA/mdeandrade.png');

  pesquisa[0].img = imgSuassuna;
  pesquisa[1].img = imgKopenawa;
  pesquisa[2].img = imgSimas;
  pesquisa[3].img = imgMDeAndrade;
  
  imgCelia= loadImage('ARTISTICO/celia.png');
  imgChihuly = loadImage('ARTISTICO/chihuly.png');
  imgJCunha = loadImage('ARTISTICO/jcunha.png');
  imgEsbell = loadImage('ARTISTICO/esbell.png');
  
  artistico[0].img = imgCelia;
  artistico[1].img = imgJCunha;
  artistico[2].img = imgChihuly;
  artistico[3].img = imgEsbell;

  imgMaira= loadImage('PERSONAGEM/maira.png');
  imgSume = loadImage('PERSONAGEM/sume.png');
  imgVelho = loadImage('PERSONAGEM/velho.png');
  imgTupa = loadImage('PERSONAGEM/tupa.png');

  personagem[0].img = imgMaira;
  personagem[1].img = imgSume;
  personagem[2].img = imgTupa;
  personagem[3].img = imgVelho;
  
  imgEsculturas = loadImage('MATERIAIS/esculturas.png');
  imgNeon = loadImage('MATERIAIS/neon.png');
  imgTecidos = loadImage('MATERIAIS/tecidos.png');
  imgVime = loadImage('MATERIAIS/vime.png');
  
  materiais[0].img = imgEsculturas;
  materiais[1].img = imgVime;
  materiais[2].img = imgNeon;
  materiais[3].img = imgTecidos;

  imgKopenawa = loadImage('PESQUISA/kopenawa.png');
  imgSuassuna = loadImage('PESQUISA/suassuna.png');
  imgSimas = loadImage('PESQUISA/simas.png');
  imgMDeAndrade = loadImage('PESQUISA/mdeandrade.png');

  pesquisa[0].img = imgSuassuna;
  pesquisa[1].img = imgKopenawa;
  pesquisa[2].img = imgSimas;
  pesquisa[3].img = imgMDeAndrade;
}



function setup() {
  createCanvas(800, 480);
  angleMode(DEGREES);
  noCursor();

  loadImage('GERAL/refnarrativa.png', (img) => {
    imgRefNarrativa = img;
  });
  loadImage('GERAL/refartistica.png', (img) => {
    imgRefArtistica = img;
  });
  loadImage('GERAL/refmaterial.png', (img) => {
    imgRefMaterial = img;
  });
  loadImage('GERAL/refpesquisa.png', (img) => {
    imgRefPesquisa = img;
  });

  loadImage('TELAS/telaBarracao.png', (img) => {
    imgFundoBarracao = img;
  });

  loadImage('TELAS/fundoCDS.png', (img) => {
    imgFundoCDS = img;
  });
  loadImage('TELAS/fundoLinhaDoTempo.png', (img) => {
    imgFundoLinhaDoTempo = img;
  });
  loadImage('TELAS/fundoLDTEnredo.png', (img) => {
    imgFundoLDTEnredo = img;
  });
  loadImage('TELAS/fundoCDScarnavalesco.png', (img) => {
    imgFundoCDSCarnavalesco = img;
  });
  loadImage('TELAS/fundoCDSEnredista.png', (img) => {
    imgFundoCDSEnredista = img;
  });
  loadImage('TELAS/fundoCDSaderecista.png', (img) => {
    imgFundoCDSAderecista = img;
  });  
  loadImage('GERAL/logoNova.png', (img) => {
    imgLogo = img;
  });
  loadImage('LOGOS-ENREDO/LogoMocidade.png', (img) => {
    imgEnredos[0] = img;
  });
  loadImage('LOGOS-ENREDO/LogoGrandeRio.png', (img) => {
    imgEnredos[1] = img;
  });
  loadImage('LOGOS-ENREDO/LogoPortela.png', (img) => {
    imgEnredos[2] = img;
  });
  
  loadImage('LOGOS-ENREDO/mocidadeop.png', (img) => {
    imgEnredosOp[0] = img;
  });
  loadImage('LOGOS-ENREDO/granderioop.png', (img) => {
    imgEnredosOp[1] = img;
  });
  loadImage('LOGOS-ENREDO/portelaop.png', (img) => {
    imgEnredosOp[2] = img;
  });
  
  loadImage('TRABALHADORES/jorgesilveira.png', (img) => {
    imgCartaJorgeS = img;
  });

  loadImage('TRABALHADORES/joaogustavo.png', (img) => {
    imgCartaJoaoG = img;
  });

  loadImage('TRABALHADORES/marcossalles.png', (img) => {
    imgCartaMarcoS = img;
  });
  
  loadImage('GERAL/refnarrativa.png', (img) => {
    imgRefNarrativa = img;
  });
  loadImage('GERAL/refartistica.png', (img) => {
    imgRefArtistica = img;
  });
  loadImage('GERAL/refmaterial.png', (img) => {
    imgRefMaterial = img;
  });
  loadImage('GERAL/refpesquisa.png', (img) => {
    imgRefPesquisa = img;
  });
  loadImage('GERAL/cartasEnredo.png', (img) => {
    imgCartasEnredo = img;
  });  
  loadImage('GERAL/cartafrente.png', (img) => {
    imgCartaVerso = img;
  });
  loadImage('GERAL/cartaverso.png', (img) => {
    imgCartaFrente = img;
  });
  loadImage('GERAL/pena.png', (img) => {
    imgPena= img;
  });
  loadImage('GERAL/tecido.png', (img) => {
    imgTecido = img;
  });
  loadImage('GERAL/acabamento.png', (img) => {
    imgAcabamento = img;
  });

  loadImage('VELHO ONCA/kopenawa.png', (img) => {
    oncaKopenawa = img;
  });

  loadImage('VELHO ONCA/escultura.png', (img) => {
    oncaEscultura = img;
  });
  
  loadImage('VELHO ONCA/luizsimas.png', (img) => {
    oncaLSimas = img;
  });
  loadImage('VELHO ONCA/dchihuly.png', (img) => {
    oncaDChihuly = img;
  });
  loadImage('VELHO ONCA/jcunha.png', (img) => {
    oncaJCunha = img;
  });
  loadImage('VELHO ONCA/jcunha2.png', (img) => {
    oncaJCunha2 = img;
  });
  loadImage('VELHO ONCA/jesbell.png', (img) => {
    oncaJEsbell = img;
  });
  loadImage('VELHO ONCA/jesbell2.png', (img) => {
    oncaJEsbell2 = img;
  });
  loadImage('VELHO ONCA/mdeandrade.png', (img) => {
    oncaMdeAndrade = img;
  });
  loadImage('VELHO ONCA/suassuna.png', (img) => {
    oncaSuassuna = img;
  });
  loadImage('VELHO ONCA/tecido.png', (img) => {
    oncaTecidos = img;
  });
  loadImage('VELHO ONCA/tupinamba.png', (img) => {
    oncaTupinamba = img;
  });
  loadImage('VELHO ONCA/velhoonca.png', (img) => {
    oncaVelhoOnca = img;
  });
  loadImage('VELHO ONCA/vime.png', (img) => {
    oncaVime = img;
  });
  
  loadImage('TUPA/dchihuly.png', (img) => {
    tupaDChihuly = img;
  });
  loadImage('TUPA/escultura.png', (img) => {
    tupaEscultura = img;
  });
  loadImage('TUPA/jcunha.png', (img) => {
    tupaJCunha = img;
  });
  loadImage('TUPA/jcunha2.png', (img) => {
    tupaJCunha2 = img;
  });
  loadImage('TUPA/jesbell.png', (img) => {
    tupaJEsbell = img;
  });
  loadImage('TUPA/kopenawa.png', (img) => {
    tupaKopenawa = img;
  });
  loadImage('TUPA/luizsimas.png', (img) => {
    tupaLSimas = img;
  });
  loadImage('TUPA/mdeandrade.png', (img) => {
    tupaMdeAndrade = img;
  });
  loadImage('TUPA/suassuna.png', (img) => {
    tupaSuassuna = img;
  });
  loadImage('TUPA/tecido.png', (img) => {
    tupaTecidos = img;
  });
  loadImage('TUPA/tupa.png', (img) => {
    tupaTupa = img;
  });
  loadImage('TUPA/tupinamba.png', (img) => {
    tupaTupinamba = img;
  });
  loadImage('TUPA/vime.png', (img) => {
    tupaVime = img;
  });
  loadImage('TUPA/vime2.png', (img) => {
    tupaVime2 = img;
  });

  loadImage('CROQUI/oncaAcetato.png', (img) => {
    imgOncaAcetato = img;
    pena[0].imgOnca = imgOncaAcetato;
  });
  
  loadImage('CROQUI/oncaArtificial.png', (img) => {
    imgOncaArtificial = img;
    pena[1].imgOnca = imgOncaArtificial;
  });
  
  loadImage('CROQUI/oncaPluma.png', (img) => {
    imgOncaPluma = img;
    pena[2].imgOnca = imgOncaPluma;
  });

  loadImage('CROQUI/oncaLurex.png', (img) => {
    imgOncaDublado = img;
    tecido[0].imgOnca = imgOncaDublado;
  });

  loadImage('CROQUI/oncaDublado.png', (img) => {
    imgOncaLurex = img;
    tecido[1].imgOnca = imgOncaLurex;
  });
  
  loadImage('CROQUI/oncaPaete.png', (img) => {
    imgOncaPaete = img;
    tecido[2].imgOnca = imgOncaPaete;
  });

  loadImage('CROQUI/oncaAcabGalao.png', (img) => {
    imgOncaGalao = img;
    acabamento[0].imgOnca = imgOncaGalao;
  });

  loadImage('CROQUI/oncaAcabPaete.png', (img) => {
    imgOncaFPaete = img;
    acabamento[1].imgOnca = imgOncaFPaete;
  });

  loadImage('CROQUI/oncaAcabGalaoPonta.png', (img) => {
    imgOncaGalaoPonta = img;
    acabamento[2].imgOnca = imgOncaGalaoPonta;
  });

  loadImage('CROQUI/tupaAcetato.png', (img) => {
    imgTupaAcetato = img;
    pena[0].imgTupa = imgTupaAcetato;
  });
  
  loadImage('CROQUI/tupaArtificial.png', (img) => {
    imgTupaArtificial = img;
    pena[1].imgTupa = imgTupaArtificial;
  });
  
  loadImage('CROQUI/tupaPluma.png', (img) => {
    imgTupaPluma = img;
    pena[2].imgTupa = imgTupaPluma;
  });
  
  loadImage('CROQUI/tupaLurex.png', (img) => {
    imgTupaDublado = img;
    tecido[0].imgTupa = imgTupaDublado;
  });

  loadImage('CROQUI/tupaDublado.png', (img) => {
    imgTupaLurex = img;
    tecido[1].imgTupa = imgTupaLurex;
  });
  
  loadImage('CROQUI/tupaPaete.png', (img) => {
    imgTupaPaete = img;
    tecido[2].imgTupa = imgTupaPaete;
  });

  loadImage('CROQUI/tupaAcaGalao.png', (img) => {
    imgTupaGalao = img;
    acabamento[0].imgTupa = imgTupaGalao;
  });

  loadImage('CROQUI/tupaAcabPaete.png', (img) => {
    imgTupaFPaete = img;
    acabamento[1].imgTupa = imgTupaFPaete;
  });

  loadImage('CROQUI/tupaAcabGalaoDuas.png', (img) => {
    imgTupaGalaoPonta = img;
    acabamento[2].imgTupa = imgTupaGalaoPonta;
  });
  
  loadImage('FANTASIA/penaacetato.png', (img) => {
    imgAcetato = img;
    pena[0].img = imgAcetato;
  });
  
  loadImage('FANTASIA/penaartificial.png', (img) => {
    imgArtificial = img;
    pena[1].img = imgArtificial;
  });
  
  loadImage('FANTASIA/pluma.png', (img) => {
    imgPluma = img;
    pena[2].img = imgPluma;
  });
  
  loadImage('FANTASIA/galaom1.png', (img) => {
    imgGalao = img;
    acabamento[0].img = imgGalao;
  });
  
  loadImage('FANTASIA/galaodeponta.png', (img) => {
    imgGdePonta = img;
    acabamento[2].img = imgGdePonta;
  });
  
  loadImage('FANTASIA/fiodepaete.png', (img) => {
    imgFioPaete = img;
    acabamento[1].img = imgFioPaete;
  });
  
  loadImage('FANTASIA/dublado.png', (img) => {
    imgDublado = img;
    tecido[0].img = imgDublado;
  });
  
  loadImage('FANTASIA/lurex.png', (img) => {
    imgLurex = img;
    tecido[1].img = imgLurex;
  });
  
  loadImage('FANTASIA/tecidopaete.png', (img) => {
    imgTecidoPaete = img;
    tecido[2].img = imgTecidoPaete;
  });

  textsIntro.forEach((obj, index) => {
    if(obj.audioURL != ""){
      loadSound(obj.audioURL, (sound) => {
        audio[index] = {
          sound: sound,
          play: false
        };
      });
    }
  })
  
  relatos.forEach((obj, index) => {
    if (obj.audioURL != "") {
      loadSound(obj.audioURL, (sound) => {
        voz[index] = {
          sound: sound,
          play: false
        };
      });
    }
    if (obj.imageURL != "") {
      loadImage(obj.imageURL, (img) => {
        imagens[index] = img; // Armazena a imagem diretamente
      });
    }
  }); 

  startRFID();
}


function draw() {
  background(220);
  if (tela != -1) {
    menuInicial();
  }
  
  if (tela == -1) {
    telaInicial();
    }
    
    if (tela == 0) {
      telaEscolha();
    }

  else if (tela == 1){
    if (currentTextIndex == -1) {
      textoDigitando();
    }
    telaTexto(); 
  }

  else if (tela == 2) {
    telasEnredo()
  }

  else if (tela == 3) {
    escolherCarta();  
  }

  else if (tela == 4){
    telaTextoFantasia()
  }
  if (tela == 5){
    telaAudios();
  }

}

function telaInicial() {
  image(imgLogo, 0, 0)
  
  piscarIndex = piscarIndex + 1
  
  if (piscarIndex % 70 < 30){
  } else {
    // all the otehr times, fill with 255
    push();
    noStroke();
    fill('#b9d7de')
    rectMode(CENTER);
    rect(width/2, 417, 460, 40);
    fill("#2e1501")
    textSize(25);
    textStyle(BOLD);
    textFont("Montserrat");
    textAlign(CENTER, BASELINE);
    text('Pressione o botão para continuar', width/2, 426);
    pop();

  }
}

function telaTexto() {
  let currentString = currentText.substring(0, currentCharacter);
  if (currentTextIndex <= 2) {  
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

else if (currentTextIndex >= 3 && currentTextIndex < 9) {
  if (currentTextIndex == 3) {
  image(imgFundoCDS, 0, 0);
  }
  if (currentTextIndex == 4) {
  image(imgFundoBarracao, 0, 0);
    }
  else if (currentTextIndex == 5) {
  image(imgFundoLinhaDoTempo, 0, 0); 
  }

  else if (currentTextIndex == 6) {
    image(imgFundoLDTEnredo, 0, 0); 
  }

  else if (currentTextIndex == 7 || currentTextIndex == 8) {
    image(imgFundoCDSEnredista, 0, 0); 
  }

  image(imgPersonagemMini, 32, 360);
  push();
  fill(243)
  noStroke();
  rect(150, 380, 612, 85, 5)
  fill(0)
  textSize(19);
  textFont(`Montserrat`);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  text(currentString, 162, 366, 600);
  pop();
}

if(currentCharacter < currentText.length){
      currentCharacter += 0.7;
      } 
}

function telasEnredo() {
  textFont(`Montserrat`);
  let currentString = currentText.substring(0, currentCharacter);
  if(currentCharacter < currentText.length){
    currentCharacter += 0.7;
    } 

  if (currentTextIndex == 9) {
    telaEscolherEnredo()
  }

  else if (currentTextIndex == 10 ||currentTextIndex == 15) {  

      if (currentTextIndex == 10) {
        image(imgFundo, 0, 0);  
        image(imgCartaJoaoG, 310, 30, 180, 285)  
        push();
        rotate(15)
        image(imgEnredos[1], 490, 55, 94, 147);
        pop();
      }

      else if (currentTextIndex == 15){
        image(imgFundo2, 0, 0);  
        image(imgCartaFrente, 255, 30)  
        image(imgCartaVerso, 455, 30)  
      }

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

  else if (currentTextIndex == 14) {
    image(imgFundo2, 0, 0)
    image(imgPersonagemMini, 32, 360);
    image(imgCartasEnredo, 320, 27);
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



  else if (currentTextIndex == 11 || currentTextIndex == 12) {
    falaJoaoGustavo();
  }

  else if (currentTextIndex == 13) {
  image(imgFundo, 0, 0);
  image(imgPersonagem, 0, 100)
  
  push();
  fill(243)
  noStroke();
  rect(270, 112, 460, 270, 20)
  fill(0)
  textSize(21);
  textFont(`Montserrat`);
  textFont(NORMAL)
  textAlign(LEFT, TOP);
  textFont(`Montserrat`);
  text(currentString, 290, 3 + 112, 460 - pageMargin, 300);
  pop();
  }

}

function nextScreen(){ //
  console.log(currentTextIndex)
  
  if (tela == -1) {
    startRFID();
    tela++;
  }

  if (tela == 1 && currentTextIndex < 9) {
   textoDigitando();
  }

  if (tela == 1 && currentTextIndex == 9) {
    tela = 2
    currentCharacter = 0;
  }

  if (tela == 2 & enredoGrandeRio == true)
    {
    textoDigitando ();
   }

  if (currentTextIndex == 16) {
    tela = 3
  }

  if (tela == 3 && cartasFaltantes == 0) {
    console.log("a")
    tela = 4
    // Atualize o índice do texto para a tela 4
    currentTextIndex = 16;
    currentCharacter = 0;
    textoDigitando();
 }

 if (tela == 4 && currentTextIndex >= 17 && currentTextIndex <= 29){
    textoDigitando();
 }

 if (tela == 4 && fantasiaEscolhida == true)  {
  textoDigitando ();
 }


 if (tela == 4 && currentTextIndex == 34) {
  startRFID();
 }
}

function textoDigitando () {

  if(currentText && currentCharacter < currentText.length) {
    currentCharacter = currentText.length;    
  // vai pro próximo texto
  } 
  else if(currentTextIndex < textsIntro.length-1){
    if(audio[currentTextIndex] && audio[currentTextIndex].sound && audio[currentTextIndex].sound.isPlaying()){
      audio[currentTextIndex].sound.stop();
    }
    currentTextIndex++; //valor do texto
    currentCharacter = 0; // zera os caracteres
    currentText = textsIntro[currentTextIndex].label;

    if(audio[currentTextIndex] && audio[currentTextIndex].sound){
      audio[currentTextIndex].sound.play();
    }
}}

function keyPressed(){  
  if (keyCode === RIGHT_ARROW) {
    nextScreen()
  } 
  if (keyCode === UP_ARROW) {
    nextScreen()
  } 
}

function telaAudios() {
  image(imgTelaRelatos, 0, 0);
  push();
  fill(243)
  noStroke();
  rect(237, 48, 420, 43, 5)
  fill(0)
  textSize(25);
  textFont(`Montserrat`);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text("Qual relato você quer ouvir?", 260, 59);
  pop();


  for (let i = 0; i < relatos.length; i++) {
    if (relatos[i].rfid === RFIDData) {
      if (imagens[i]) { // Verifica se a imagem está carregada
        push();
        image(imagens[i], 0, 0);
        fill(243)
        noStroke();
        rect(237, 48, 420, 43, 5)
        fill(0)
        textSize(25);
        textFont(`Montserrat`);
        textStyle(BOLD);
        textAlign(LEFT, TOP);
        text("Qual relato você quer ouvir?", 260, 59);
        pop();
      }

      if (!isPlaying || currentAudio !== voz[i].sound) {
        // Check if not already playing or if the audio to play is different
        if (isPlaying && currentAudio) {
          // Stop the currently playing audio if there is any
          currentAudio.pause();
          currentAudio.currentTime = 0; // Reset audio to the beginning
        }

        console.log(RFIDData);
        voz[i].sound.play();
        isPlaying = true;
        currentAudio = voz[i].sound;

        // Reset isPlaying flag and currentAudio reference when audio ends
        voz[i].sound.onended = () => {
          isPlaying = false;
          currentAudio = null;
        };
      }
      // Exit the loop early if we found the matching RFIDData
      return;
    }
  }

  // If no matching RFIDData was found, stop any currently playing audio
  if (isPlaying && currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset audio to the beginning
    isPlaying = false;
    currentAudio = null;
  }
}

function telaEscolha () {
  image(imgTelaEscolha, 0, 0);
  push();
  fill(243)
  noStroke();
  rect(230, 110, 470, 43, 5)
  fill(0)
  textSize(25);
  textFont(`Montserrat`);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text("Qual processo você quer seguir?", 250, 120);
  pop();
  
  if (RFIDData == "23213B10"){
    tela++
  }
  if (RFIDData == "23E82C10"){
    tela = 5
  }
}

function menuInicial() {
  if (RFIDData == cartaInicio) {
    if (isPlaying && currentAudio) {
      currentAudio.pause();
    }
    if(audio[currentTextIndex] && audio[currentTextIndex].sound && audio[currentTextIndex].sound.isPlaying()){
      audio[currentTextIndex].sound.stop();
    }
    enredoGrandeRio = false;
    cartasFaltantesFantasia = 3;
    cartasFaltantes = 4;
    nomePena = "";
    nomeTecido = "";
    nomeAcabamento = "";
    fantasiaEscolhida = false;
    nomePersonagem = "";
    nomeMateriais = "";
    nomeArtistico = "";
    nomePesquisa  = "";
    nomeAla = "";
    cartaPersonagem = "";
    cartaPesquisa = "";
    cartaArtistica = "";
    cartaMateriais= "";
    
    currentTextIndex = -1;
    tela = -1;
  }
}