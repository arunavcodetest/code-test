const express = require('express');
const app = express();
const port = 3000;
var timer_id = null;
var topic = "dccpl/test/ltts/nodejs-demo-app";
var mqtt = require('mqtt');
const host = "mqtt://broker.hivemq.com";
var client = mqtt.connect(host, { clientId: "mqttnode" });
client.on("connect", function () {
    console.log("connected  " + client.connected);
    client.subscribe(topic, function (err) {
        if (err) {
            console.log("subscribe error");
        }
    });
});
client.on('message', function (topic, message) {
    console.log(message.toString())
})

function publishmessage(topic) {
    let message = {
        CurrentTimeStamp: Date.now().toLocaleString(),
        currentValue: Date.now() + 1,
    }
    console.log("publishing");
    if (client.connected == true) {
        client.publish(topic, JSON.stringify(message));
    }
}

app.post('/', (req, res) => {
    var mode = req.query.mode
    if (mode == 'START') {
        timer_id = setInterval(function () { publishmessage(topic); }, 3000);
        res.send('Started! Message Will send every 3 sec');
    }
    else if (mode == 'STOP') {
        if (timer_id != null) {
            clearTimeout(timer_id);
            timer_id = null;
            res.send('Stoped');
        }
        else {
            res.send('Already Stoped');
        }
    }
    else {
        res.send('Mode Not Specified');
    }
});
app.get('/', (req, res) => {
    if (timer_id == null) {
        res.send({ Status: "STOPPED", Topic: topic });
    }
    else
    {
        res.send({ Status: "RUNNING", Topic: topic });
    }
});



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))