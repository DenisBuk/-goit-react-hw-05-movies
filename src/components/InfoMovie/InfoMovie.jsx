import PropTypes from 'prop-types';
import styles from './InfoMovie.module.scss';

const InfoMovie = ({ movie }) => { 
    const {
        title,
        name,
        overview,
        genres,
        release_date,
        first_air_date,
        poster_path,
        vote_average,
    } = movie;

    const userScore = Math.round(vote_average * 10);

    const imgNotFound =
        ``;

    const imgUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : imgNotFound;

}