import React from 'react';
import Loader from 'react-loader-spinner';
import PopupContent from './PopupContent';

function Popup({ movie, closePopup, movieLoading }) {
    return (
        <div className="popup hidden" onClick={closePopup}>
            <div className="container">{movieLoading ? <Loader type="ThreeDots" color="#54d0d6" /> : <PopupContent movie={movie} closePopup={closePopup} />}</div>
        </div>
    );
}

export default Popup;
