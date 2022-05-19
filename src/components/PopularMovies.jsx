import React from "react";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import "./../styles/PopularMovies.css";

const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    const fetchPopularMovies = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIES_DB_API_KEY}&language=en-US&page=1`
        );
        const movies = await data.json();
        setPopularMovies((_prevPopularMovies) => movies.results);
    };

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    return (
        <>
            <h2 className="popular-movies-header">Popular Movies</h2>
            <div className="popular-movies">
                {popularMovies.map((movie) => {
                    return <MovieCard movie={movie} />;
                })}
            </div>
        </>
    );
};

export default PopularMovies;
