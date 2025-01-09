let RFIDData;

async function getRFIDData() {
  try {
    let response = await fetch('/pegarRFID', {
      method: "GET"
    });
    let data = await response.json();
    RFIDData = data.RFIDData;
  // console.log(RFIDDataa);
  } catch (error) {
    console.error('Erro ao buscar dados RFID:', error);
  }
}

function startRFID() {
  fetch('/resetRFID')
  .then(response => response.json())
  .then(data => {
      console.log(data.message);
  })
  .catch(error => console.error('Error:', error));
  setInterval(getRFIDData, 900);
}

async function checkButtonPress() {
  try {
      let response = await fetch('/buttonPress', { method: "GET" });
      let data = await response.json();
      if (data.buttonPressed) {
          nextScreen();
      }
  } catch (error) {
      console.error('Error checking button press:', error);
  }
}
setInterval(checkButtonPress, 500);