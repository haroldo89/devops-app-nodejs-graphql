const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    published: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);