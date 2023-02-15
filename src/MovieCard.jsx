import React from "react";
import { Icon } from '@iconify/react';


const MovieCard = ({ movie }) => {
    return (
        <div className="w-full">
        <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.title} Poster`}
        />
        <div className="p-2">
            <h3 className="text-lg text-white leading-5 mb-2">{movie.title}</h3>
            <p className="text-gray-400 text-sm inline-flex gap-2 items-center"><Icon icon="fluent:movies-and-tv-16-regular" />{movie.release_date}</p>
        </div>
        </div>
    );
}

export default MovieCard;