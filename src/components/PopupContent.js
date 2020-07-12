import React from 'react';
import star from './star.svg';
import img from './no-image.png';

function PopupContent({ movie, closePopup }) {
    return (
        <>
            <div className="head">
                <div className="head__title">
                    <h2 className="title">
                        {movie.Title} <span className="year">({movie.Year})</span>
                    </h2>
                    <div className="rating">
                        <img src={star} alt="Star" />
                        <div>
                            <p className="rate">
                                <span>{movie.imdbRating}</span>/10
                            </p>
                            <p className="votes">{movie.imdbVotes}</p>
                        </div>
                    </div>
                </div>
                <div className="head__details">
                    <p>{movie.Rated}</p>
                    <p>{movie.Runtime}</p>
                    <p>{movie.Genre}</p>
                    <p>
                        {movie.Released} ({movie.Country})
                    </p>
                </div>
            </div>
            <div className="body">
                <img src={movie.Poster === 'N/A' ? img : movie.Poster} alt={movie.Title} />
                <div>
                    <p className="plot">{movie.Plot}</p>
                    <p className="director">
                        <span>Director:</span> {movie.Director}
                    </p>
                    <p className="writers">
                        <span>Writers:</span> {movie.Writer}
                    </p>
                    <p className="casts">
                        <span>Casts:</span> {movie.Actors}
                    </p>
                    <p className="language">
                        <span>Language:</span> {movie.Language}
                    </p>
                </div>
            </div>
            <button className="button" onClick={closePopup}>
                Close
            </button>
        </>
    );
}

export default PopupContent;
