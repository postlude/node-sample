const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan('dev'));

app.listen(port, async () => {
    console.log('==================== [NODE SAMPLE] ====================');
    console.log(`- PORT : ${port}`);
    console.log('========================================================');
});