require('module-alias/register');

const express = require('express');
const morgan = require('morgan');
// const mongoose = require('mongoose');
// const Test = require('./model/test')

const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan('dev'));

// app.get('/', async (req, res) => {
//     try {
//         const result = await Test.findOne(
//             Test.translateAliases({
//                 txt: 'a'
//             }),
//             'str' // alias
//         );
//         console.log(result);
//         res.send(result);
//     } catch (err) {
//         console.error(err);
//         res.sendStatus(500);
//     }
// });

// app.post('/', async (req, res) => {
//     try {
//         const test = new Test({
//             str: 'a',
//             num: 1
//         });
//         console.log(test.txt);
//         await test.save();
//         res.sendStatus(200);
//     } catch (err) {
//         console.error(err);
//         res.sendStatus(500);
//     }
// });

app.listen(port, async () => {
    console.log('==================== [NODE SAMPLE] ====================');
    console.log(`- PORT : ${port}`);
    // await mongoose.connect('mongodb://localhost:27017/testdb', {
    //     user: 'postlude',
    //     pass: 'postlude',
    //     useNewUrlParser: true, // to fix deprecation warning
    //     useUnifiedTopology: true // to fix deprecation warning
    // });
    console.log('========================================================');
});