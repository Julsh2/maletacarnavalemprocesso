import express from 'express';
import bodyParser from 'body-parser';
import { SerialPort, ReadlineParser } from "serialport";

var port
var parser
var data = {btn: 1}
var RFIDData = null;
let buttonPressed = false;


try {
    // Serial
    port = new SerialPort({
    //path: '/dev/ttyACM0',
   // baudRate: 9600,
    path: 'COM5',
    baudRate: 115200,
    })

    parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

    parser.on('data', d => {
        console.log(d);

        if (d === "BUTTON_PRESS") {
            buttonPressed = true;
            console.log(d);

        } else {
            RFIDData = d;
            console.log(RFIDData);
        }
    });

    port.on('error', err => {
        console.error('SerialPort error:', err);
    });
} catch (err) {
    console.error(err);
}

const app = express()
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Rotas
app.use('/', express.static('public'))

app.get('/pegarBotao', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: true, data }));
})

app.get('/pegarRFID', async (req, res) => {
   // console.log('Enviando o seguinte dado:', RFIDData);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ status: true, RFIDData });

})

app.get('/api', async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: true, data }));
})

app.get('/resetRFID', (req, res) => {
    RFIDData = null;
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ status: true, message: 'RFIDData has been reset' });
});

app.get('/buttonPress', (req, res) => {

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ status: true, buttonPressed });
    buttonPressed = false;  // Reset after reporting

});

app.listen(PORT, () => {
    console.log(`BACKEND RUNNING AT PORT ${PORT}`);
})
