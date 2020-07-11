import React from 'react';
import img from './no-image.png';

function Result({ result, openPopup }) {
    return (
        <li onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster === 'N/A' ? img : result.Poster} alt={result.Title} />
            <h2>
                {result.Title} ({result.Year})
            </h2>
        </li>
    );
}

export default Result;
