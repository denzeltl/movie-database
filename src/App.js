import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';

function App() {
    const [state, setState] = useState({
        searchbar: '',
        results: [],
        movie: {},
    });
    const apiUrl = 'http://www.omdbapi.com/?&apikey=bb6aec01';

    const handleInput = (e) => {
        let searchbar = e.target.value;
        setState((prevState) => {
            return {
                ...prevState,
                searchbar: searchbar,
            };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`${apiUrl}&s=${state.searchbar}`).then(({ data }) => {
            let results = data.Search;
            if (results) {
                setState((prevState) => {
                    return {
                        ...prevState,
                        results: results,
                    };
                });
            } else {
                return;
            }
        });
    };
    const openPopup = (movieId) => {
        axios.get(`${apiUrl}&i=${movieId}`).then(({ data }) => {
            setState((prevState) => {
                return {
                    ...prevState,
                    movie: data,
                };
            });
        });
        document.querySelector('.popup').classList.remove('hidden');
    };
    const closePopup = (e) => {
        console.log(e.target);
        if (e.target.className === 'button' || e.target.className === 'popup') {
            setState((prevState) => {
                return {
                    ...prevState,
                    movie: {},
                };
            });
            document.querySelector('.popup').classList.add('hidden');
        } else {
            return;
        }
    };

    return (
        <div className="App">
            <header>
                <h1>Movie Database App</h1>
            </header>
            <main>
                <Search handleInput={handleInput} value={state.searchbar} handleSubmit={handleSubmit} />
                <Results results={state.results} openPopup={openPopup} />
                <Popup movie={state.movie} closePopup={closePopup} />
            </main>
        </div>
    );
}

export default App;
