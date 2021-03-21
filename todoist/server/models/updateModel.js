const mongoose = require('mongoose');

const updateSchema = mongoose.Schema({
    userName: { type: 'String', required: true },
    todo: { type: 'Object' }
});
const change = mongoose.model('update', updateSchema);


module.exports = change;