require('module-alias/register');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { sleep } = require('@/util/helper');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', async (req, res) => {
    try {
        const { ms } = req.query;

        console.log('get');
        await sleep(ms);
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
})

app.listen(port, async () => {
    console.log('==================== [NODE SAMPLE] ====================');
    console.log(`- PORT : ${port}`);
    console.log('========================================================');
});