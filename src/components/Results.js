import React from 'react';
import Result from './Result';

function Results({ results, openPopup }) {
    return (
        <ul className="results">
            {results.map((result) => (
                <Result key={result.imdbID} result={result} openPopup={openPopup} />
            ))}
        </ul>
    );
}

export default Results;
