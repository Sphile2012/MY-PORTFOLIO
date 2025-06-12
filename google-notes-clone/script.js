// A simple class to represent a Note
class Note {
    constructor(id, content) {
        this.id = id;
        this.content = content;
    }

    // Method to create the HTML element for the note
    createElement() {
        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');
        noteCard.dataset.id = this.id; // Store the ID on the element

        const noteContent = document.createElement('p');
        noteContent.textContent = this.content;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            noteManager.deleteNote(this.id);
        });

        noteCard.appendChild(noteContent);
        noteCard.appendChild(deleteButton);

        return noteCard;
    }
}

// A class to manage all notes
class NoteManager {
    constructor() {
        this.notes = this.loadNotes(); // Load notes from localStorage
        this.notesContainer = document.getElementById('notes-container');
        this.noteTextInput = document.getElementById('note-text');
        this.addNoteBtn = document.getElementById('add-note-btn');

        this.addNoteBtn.addEventListener('click', () => this.addNote());
        this.renderNotes(); // Display existing notes on load
    }

    // Generates a unique ID for new notes
    generateId() {
        return Date.now().toString(); // Simple timestamp-based ID
    }

    // Adds a new note to the collection
    addNote() {
        const content = this.noteTextInput.value.trim();
        if (content) {
            const newNote = new Note(this.generateId(), content);
            this.notes.push(newNote);
            this.saveNotes();
            this.renderNotes(); // Re-render all notes
            this.noteTextInput.value = ''; // Clear the input area
        } else {
            alert('Please enter some text for your note!');
        }
    }

    // Deletes a note by its ID
    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        this.saveNotes();
        this.renderNotes(); // Re-render all notes
    }

    // Saves notes to localStorage
    saveNotes() {
        localStorage.setItem('keep-notes', JSON.stringify(this.notes));
    }

    // Loads notes from localStorage
    loadNotes() {
        const storedNotes = localStorage.getItem('keep-notes');
        if (storedNotes) {
            // Re-instantiate Note objects from plain objects
            return JSON.parse(storedNotes).map(noteData => new Note(noteData.id, noteData.content));
        }
        return [];
    }

    // Renders all notes to the UI
    renderNotes() {
        this.notesContainer.innerHTML = ''; // Clear current notes
        this.notes.forEach(note => {
            this.notesContainer.appendChild(note.createElement());
        });
    }
}

// Initialize the NoteManager when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const noteManager = new NoteManager();
});