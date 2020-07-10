import React from 'react';

function Search({ handleInput, value, handleSubmit }) {
    return (
        <form className="search" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a movie..." onChange={handleInput} value={value} />
            <button>Search</button>
        </form>
    );
}

export default Search;
