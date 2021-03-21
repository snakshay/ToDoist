const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: { type: 'String', required: true },
    passwordHash: { type: 'String', required: true },
    todo: { type: 'Object' },
    doing: { type: 'Object' },
    done: { type: 'Object' }

});
const User = mongoose.model('user', userSchema);


module.exports = User;