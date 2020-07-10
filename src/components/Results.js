import React from 'react';
import Result from './Result';

function Results({ results }) {
    console.log(results);
    return (
        <ul className="results">
            {results.map((result) => (
                <Result result={result} />
            ))}
        </ul>
    );
}

export default Results;
