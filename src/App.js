import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Sidebar from "./Sidebar";


const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=70bde69caffef0294416c72116362f3d`
const API_MOVIE = 'https://api.themoviedb.org/3/movie/popular?api_key=70bde69caffef0294416c72116362f3d&language=en-US&page=1'
// console.log(API_URL)
const App = () => {
    const [allMovies, setAllMovies] = useState([]);

    // const searchMovies = async (title) => {
    //     const res = await fetch(`${API_URL}&language=en-US&query=${title}&page=1&include_adult=false`);
    //     const data = await res.json();
    //     setMovies(data.results);
    //     setMovies(title)
    // }

    const searchingMovies = async (title) => {
        const res = await fetch(`${API_URL}&language=en-US&query=${title}&page=1&include_adult=false`);
        const data = await res.json();
        title = data.results
        setAllMovies(title)
    }

    const listMovies = async () => {
        const res = await fetch(API_MOVIE);
        const data = await res.json();
        // console.log(data.results)
        setAllMovies(data.results);
    }

    useEffect(() => {
        listMovies();
    }, [])

    return (
        <div className="w-full h-full flex">
            <div className="w-64 h-full border-r-2 shadow-md p-2 fixed">
                <Sidebar onChange={(e) => searchingMovies(e.target.value)} />
            </div>
            <div className="w-full p-3 ml-64">
                <div className="p-5">
                    <h1 className="text-2xl text-gray-500 uppercase">Your Recent Movies</h1>
                        {
                            allMovies?.length > 0 ? (
                                <div className="w-full grid grid-cols-5 gap-x-5 gap-y-8 py-5">
                                    {allMovies.map((movie) => {
                                        return (
                                            <div className="w-full p-2 border rounded-md hover:scale-105 hover:cursor-pointer transition duration-500">
                                            <MovieCard movie={movie} />
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <div className="w-full flex justify-center">
                                    <h1 className="text-2xl text-gray-500">No Movies Found</h1>
                                </div>
                            )
                        }
                </div>
            </div>
            
        </div>
    )
};

export default App;