import axios from 'axios'

const KEY = '8f097ac1772f5d24a794202a251ed2ca';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrandingMovies = async () => { 
    const response = await axios.get(
        `${BASE_URL}/trending/all/day?api_key=${KEY}`
    );
    return response.data;
};

export const getMoviesQuerry = async query => { 
    const response = await axios.get(
        `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );
    return response.data;
};

export const getMovieById = async id => { 
    const response = await axios.get(
        `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
    );
    return response.data;
};

export const getMovieCredits = async id => { 
    const response = await axios.get(
        `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data.credits;
};

export const getMovieReviews = async id => { 
    const response = await axios.get(
        `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return response.data.results;
};