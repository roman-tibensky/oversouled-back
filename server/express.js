/**
 * Created by aRTie on 21/08/2017.
 */

var express = require('express');
var app = express();

var messages= [
    {
        updateBy: 'nobody',
        text: 'nothing is working now'
    },
    {
        updateBy: 'nobody',
        text: 'nope, still nothing is working'
    }
];

app.get('/', (req, res) => {
    res.send('sup homie');
});

app.get('/messages', (req, res) => {
    res.json((messages));
});

app.listen(8888);
