const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/colou?r', (req, res) => {
    res.send(`\nhi!\n`)
})

app.get(/i*he*flys?$/, (req, res) => {
    res.send(`\ntrue\n`)
})

app.get(/i*apple$/, (req, res) => {
    res.send(`\nApply\n`)
})

app.route('bannana')
    .get((req, res) => {
        console.log('get request');
    })
    .put((req, res) => {
        console.log('get put');
    })
    .delete((req, res) => {
        console.log('get delete');
    })

app.use(express.static('stuff'))

app.listen(port, () => {
    console.log(`running port ${port}`);
})