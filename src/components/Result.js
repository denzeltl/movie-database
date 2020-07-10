import React from 'react';
import img from './no-image.png';

function Result({ result }) {
    return (
        <li>
            <img src={result.Poster === 'N/A' ? img : result.Poster} alt="" />
            <h2>
                {result.Title} ({result.Year})
            </h2>
        </li>
    );
}

export default Result;
