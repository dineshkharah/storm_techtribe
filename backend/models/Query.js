const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String
    },
},{
    collection: 'queries'
});

const Query = mongoose.model('Query', QuerySchema);

module.exports = Query;