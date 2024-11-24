// frontend/src/components/CataloguePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CataloguePage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/books');
                setBooks(response.data);  // Set the books data from the API response
            } catch (err) {
                console.error(err);
            }
        };

        fetchBooks();
    }, []);  // Fetch data on initial render

    return (
        <div className="catalogue-page">
            <h2>Book Catalogue</h2>
            <div className="books">
                {books.length > 0 ? (
                    books.map((book) => (
                        <div key={book._id} className="book">
                            <img src={book.image} alt={book.title} />
                            <h3>{book.title}</h3>
                            <p>{book.author}</p>
                            <p>{book.description}</p>
                            <p>${book.price}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading books...</p>
                )}
            </div>
        </div>
    );
};

export default CataloguePage;
