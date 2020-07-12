import React from 'react';
import Result from './Result';

function Results({ results, openPopup, searchUndefined }) {
    return (
        <section>
            {searchUndefined ? (
                <p className="no-results">No results found.</p>
            ) : (
                <ul className="results">
                    {results.map((result) => (
                        <Result key={result.imdbID} result={result} openPopup={openPopup} />
                    ))}
                </ul>
            )}
        </section>
    );
}

export default Results;
