'use client';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewMovies } from "@/lib/features/searchMovies/searchMoviesSlice";

export default function SearchMovies() {
    let dispatch = useDispatch();
    useEffect(() => {
        getNewReleases();
        dispatch(fetchNewMovies());
    }, [])

    function getNewReleases() {

    }

    const status = useSelector(state => state.searchMovies.status)
    const movies = useSelector(state => state.searchMovies.movies)

    let content;

    if (status === 'loading') {
        content = <p>loading</p>
    } else if (status === 'succeeded') {
        content = movies.data.map(movie => {
            return (<p key={movie.Movie_ID}>{movie['Title']}</p>)
        });
    } else if (status === 'failed') {
        content = <p>failed</p>
    }

    return (
        <div>
            <div>
                <h2>movies:</h2>
                <div>
                    {content}
                </div>

            </div>
        </div>
    )
}

