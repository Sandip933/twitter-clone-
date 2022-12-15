const mongoose = require('mongoose');
const { env, mongo: { uri, options } } = require('./env-vars');
// const { log } = require('../api/services/utilService.js');
mongoose.set('debug', env === 'development');

mongoose.connection.on('error', (err) => {
    console.log('\x1b[31m%s\x1b[0m', `Mongo Engine is down :${err}`);
});

mongoose.connection.on('connected', () => {
    console.log(`Mongo Engine is up on ${env}`);
})
mongoose.set({ "strictQuery": true });

exports.Connect = async () => {
    mongoose.connect(uri, options);
    return mongoose.connection;
}