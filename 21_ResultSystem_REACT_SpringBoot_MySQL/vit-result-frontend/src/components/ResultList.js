import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ResultItem from './ResultItem';

const ResultList = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/results')
            .then(response => {
                setResults(response.data);
            })
            .catch(error => console.error('There was an error!', error));
    }, []);

    return (
        <div>
            <h1>VIT Semester Results</h1>
            <ul>
                {results.map(result => (
                    <ResultItem key={result.studentId} result={result} />
                ))}
            </ul>
        </div>
    );
}

export default ResultList;
