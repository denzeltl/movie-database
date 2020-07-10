import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';

function App() {
    const [state, setState] = useState({
        searchbar: '',
        results: [],
        movie: {},
    });
    const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=bb6aec01';

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

    return (
        <div className="App">
            <header>
                <h1>Movie Database App</h1>
            </header>
            <main>
                <Search handleInput={handleInput} value={state.searchbar} handleSubmit={handleSubmit} />
                <Results results={state.results} />
            </main>
        </div>
    );
}

export default App;
