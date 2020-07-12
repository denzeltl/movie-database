import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';

function App() {
    const [state, setState] = useState({
        searchbar: '',
        results: [],
        movie: {},
        loading: false,
        searchUndefined: false,
        movieLoading: false,
    });
    const apiUrl = 'https://www.omdbapi.com/?&apikey=bb6aec01';

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
        if (state.searchbar) {
            setState((prevState) => {
                return {
                    ...prevState,
                    searchUndefined: false,
                    loading: true,
                    results: [],
                };
            });
            axios.get(`${apiUrl}&s=${state.searchbar}`).then(({ data }) => {
                let results = data.Search;
                if (results) {
                    setState((prevState) => {
                        return {
                            ...prevState,
                            searchUndefined: false,
                            results: results,
                            loading: false,
                        };
                    });
                } else {
                    setState((prevState) => {
                        return {
                            ...prevState,
                            searchUndefined: true,
                            loading: false,
                        };
                    });
                }
            });
        } else {
            return;
        }
    };
    const openPopup = (movieId) => {
        setState((prevState) => {
            return {
                ...prevState,
                movieLoading: true,
            };
        });
        axios.get(`${apiUrl}&i=${movieId}`).then(({ data }) => {
            setState((prevState) => {
                return {
                    ...prevState,
                    movie: data,
                    movieLoading: false,
                };
            });
        });
        document.querySelector('.popup').classList.remove('hidden');
    };
    const closePopup = (e) => {
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
                {state.loading ? <Loader type="ThreeDots" color="#54d0d6" /> : <Results results={state.results} openPopup={openPopup} searchUndefined={state.searchUndefined} />}
                <Popup movie={state.movie} closePopup={closePopup} movieLoading={state.movieLoading} />
            </main>
        </div>
    );
}

export default App;
