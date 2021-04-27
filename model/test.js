const mongoose = require('mongoose');
const { Schema } = mongoose;
const modelNm = 'Test';

const TestSchema = new Schema({
    str: {
        type: String,
        alias: 'txt'
    },
    num: {
        type: Number,
        alias: 'int'
    }
}, {
    collection: 'test',
    toJSON: {
        virtuals: true,
        transform(doc, ret, options) {
            delete ret.str;
            delete ret.num;
        }
    }
});

module.exports = mongoose.model(modelNm, TestSchema);