const mongoose = require("mongoose");

const actorSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'A actor must have a name']
    }
});

const Actor = mongoose.model('Actor', actorSchema);

module.exports = Actor;