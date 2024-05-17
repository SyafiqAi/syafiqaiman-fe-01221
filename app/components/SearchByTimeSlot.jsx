'use client';
import { useDispatch } from "react-redux";
import { fetchMoviesByTimeSlot } from '../../lib/features/searchMovies/searchMoviesSlice'

export default function SearchMovies() {
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault();
        let query = e.target[0].value
        dispatch(fetchMoviesByTimeSlot({timeStart: '00', timeEnd: '00'}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button
                aria-label="Search"
                type='submit'
            >
                Search
            </button>
        </form>
    )
}

