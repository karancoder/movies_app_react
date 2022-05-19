import React from "react";
import "./../styles/MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <Link to={"/movie/" + movie.id}>
                <img
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt={movie.title}
                    className="movie-card-img"
                />
            </Link>
            <div className="description">
                <h2 className="movie-card-title">{movie.title}</h2>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
};

export default MovieCard;
