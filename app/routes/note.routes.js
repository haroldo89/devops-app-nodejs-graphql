
module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const auth = require("../middleware/auth");
    
    // Retrieve all Notes
    app.post('/api/notes/getAll', auth, notes.findAll);
    
    // Retrieve a single note with noteId with post method
    app.post('/api/notes/getNote', auth, notes.findOneById)

    // Create a new Note
    app.post('/api/notes/createNote', notes.create);

    // Update a Note with noteId
    app.post('/api/notes/updateNote', auth, notes.update);

    // Retrieve a single Note with noteId
    app.get('/api/notes/:noteId', auth, notes.findOne);

    // Delete a Note with noteId
    app.post('/api/notes/deleteNote', auth, notes.delete);
}