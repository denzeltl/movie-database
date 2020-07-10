import React from 'react';

function Result({ result }) {
    return (
        <li key={result.imdbID}>
            <img src={result.Poster} alt="" />
            <h2>
                {result.Title} ({result.Year})
            </h2>
        </li>
    );
}

export default Result;
