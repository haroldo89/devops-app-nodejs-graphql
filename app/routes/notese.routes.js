
module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const auth = require("../middleware/auth");
    
    // Retrieve all Notes
    app.post('/api/notese/getAll',  notes.findAll);
    
    // Retrieve a single note with noteId with post method
    app.post('/api/notese/getNote',  notes.findOneById)

    // Create a new Note
    app.post('/api/notese/createNote', notes.create);

    // Update a Note with noteId
    app.post('/api/notese/updateNote',  notes.update);

    // Retrieve a single Note with noteId
    app.get('/api/notese/:noteId',  notes.findOne);

    // Delete a Note with noteId
    app.post('/api/notese/deleteNote',  notes.delete);
}