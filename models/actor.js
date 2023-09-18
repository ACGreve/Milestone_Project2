const mongoose = require('mongoose')

const actorSchema = new mongoose.Schema({
    biography: {
        type: String
    },
    birthday: {
        type: String
    },
    deathday: {
        type: String
    },
    gender: {
        type: Number
    },
    name: {
        type: String
    },
    place_of_birth: {
        type: String
    },
    popularity: {
        type: Number
    }
})

module.exports = mongoose.model('Actor', actorSchema)