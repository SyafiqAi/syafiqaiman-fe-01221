'use client';
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, fetchMoviesByTheater, fetchMoviesByTimeSlot } from '../lib/features/searchMovies/searchMoviesSlice'

export default function Home() {
  const status = useSelector(state => state.searchMovies.status)
  const movies = useSelector(state => state.searchMovies.movies)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
    let query = e.target[0].value
    dispatch(fetchMoviesByTimeSlot({timeStart: '1', timeEnd: '1'}))
  }

  let content;

  if (status === 'loading') {
    content = <p>loading</p>
  } else if (status === 'succeeded') {
    console.log(movies);
    content = movies.data.map(movie => {
      return (<p key={movie.Movie_ID}>{movie['Title']}</p>)
    });
  } else if (status === 'failed') {
    content = <p>failed</p>
  }

  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="" id="" />
          <button
            aria-label="Increment value"
            type='submit'
          >
            Search
          </button>
        </form>

        <h2>movies:</h2>
        <div>
          {content}
        </div>

      </div>
    </div>
  )
}

