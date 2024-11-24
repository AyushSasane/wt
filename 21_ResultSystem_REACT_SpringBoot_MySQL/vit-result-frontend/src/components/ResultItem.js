import React from 'react';

const ResultItem = ({ result }) => {
    return (
        <li>
            <h3>{result.studentName}</h3>
            <p>Subject 1: {result.subject1Mse} / {result.subject1Ese}</p>
            <p>Subject 2: {result.subject2Mse} / {result.subject2Ese}</p>
            <p>Subject 3: {result.subject3Mse} / {result.subject3Ese}</p>
            <p>Subject 4: {result.subject4Mse} / {result.subject4Ese}</p>
        </li>
    );
}

export default ResultItem;
