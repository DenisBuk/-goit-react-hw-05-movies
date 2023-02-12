import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import * as API from '../../services/fetchMoviesApi';
import Loading from "components/Loading/Loading";
import MoviesList from "components/MoviesList/MoviesList";
import styles from './MovieSearch.module.scss';

const MovieSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    const [movies, setMovie] = useState(null);
    const [totalResultMovie, setTotalResMovie] = useState(null);
    const [showLoading, setShowLoading] = useState(false);
    const [inputSearch, setInputSearch] = useState(query);

    useEffect(() => {
        if (query === '') return;

        setMovie(null);
        setTotalResMovie(null);
        setShowLoading(true);

        API.getMoviesQuerry(query)
            .then(data => {
                setMovie(data.results);
                setTotalResMovie(data.total_results);
                setShowLoading(false);
            })
            .catch(console.log);
    }, [query]);

    const handleInputChange = e => { 
        setInputSearch(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const queryNormalized = form.query.value.toLowerCase().trim();

        setSearchParams({ query: queryNormalized });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="query"
                    className={styles.input}
                    value={inputSearch}
                    onChange={handleInputChange}
                    placeholder="Enter movie name"
                />

                <button type="submit" className={styles.submit}>
                    Search
                </button>
            </form>

            {showLoading && <Loading />}
            {movies && <MoviesList movies={movies} />}

            {totalResultMovie === 0 && <div>Not found movies</div>}
        </>
    )
};


export default MovieSearch;