// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

// Book Model Definition
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },  // URL to an image of the book cover
});

const Book = mongoose.model('Book', bookSchema);

// Dummy book data (for seeding the database)
const dummyBooks = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 10.99,
        description: 'A novel set in the 1920s that tells the story of Jay Gatsby.',
        image: 'https://example.com/greatgatsby.jpg',
    },
    {
        title: '1984',
        author: 'George Orwell',
        price: 9.99,
        description: 'A dystopian novel set in a totalitarian regime.',
        image: 'https://example.com/1984.jpg',
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 12.99,
        description: 'A novel about racial injustice in the 1930s South.',
        image: 'https://example.com/tokillamockingbird.jpg',
    },
    {
        title: 'Moby-Dick',
        author: 'Herman Melville',
        price: 15.99,
        description: 'The story of Captain Ahab’s obsession with hunting the white whale.',
        image: 'https://example.com/mobydick.jpg',
    },
];

// Route to seed dummy data into the database (only for the first time or manually)
app.post('/api/seed-books', async (req, res) => {
    try {
        // Delete existing books (optional step if you want to replace old data)
        await Book.deleteMany({});
        
        // Insert the dummy books into the database
        await Book.insertMany(dummyBooks);
        res.status(200).send('Dummy books inserted successfully!');
    } catch (error) {
        console.error('Error seeding books:', error);
        res.status(500).send('Error inserting books');
    }
});

// Route to get all books from the database
app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send('Error fetching books');
    }
});

// User registration route
app.post('/api/register', async (req, res) => {
    // Registration logic (for now, just a placeholder)
    // You would add password hashing, validation, and saving user data to the database
    res.send('User registered');
});

// User login route
app.post('/api/login', async (req, res) => {
    // Login logic (for now, just a placeholder)
    // You would add JWT token generation and user authentication here
    res.send('User logged in');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
