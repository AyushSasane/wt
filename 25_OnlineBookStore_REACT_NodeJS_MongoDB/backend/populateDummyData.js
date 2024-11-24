// backend/populateDummyData.js
const mongoose = require('mongoose');
const Book = require('./models/Book');  // We will define the Book model

require('dotenv').config();

// MongoDB connection string
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Dummy book data
const books = [
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

// Insert the dummy books into the database
const populateBooks = async () => {
    try {
        await Book.deleteMany({});  // Clear any existing books in the database
        await Book.insertMany(books);  // Insert the dummy data
        console.log('Dummy data inserted successfully!');
        mongoose.connection.close();  // Close the connection after inserting the data
    } catch (error) {
        console.error('Error inserting dummy data:', error);
        mongoose.connection.close();
    }
};

populateBooks();
