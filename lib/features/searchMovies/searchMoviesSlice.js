import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  status: 'idle',
  error: null
}

export const searchMoviesSlice = createSlice({
  name: 'searchMovies',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchMoviesByTheater.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchMoviesByTheater.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched movies to the array
        state.movies = action.payload
      })
      .addCase(fetchMoviesByTheater.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchMoviesByTimeSlot.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchMoviesByTimeSlot.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched movies to the array
        state.movies = action.payload
      })
      .addCase(fetchMoviesByTimeSlot.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchNewMovies.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchNewMovies.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched movies to the array
        state.movies = action.payload
      })
      .addCase(fetchNewMovies.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})


export const fetchMoviesByTheater = createAsyncThunk('searchMovies/byTheatre', async (query) => {
  let theater = query.theater
  let date = formatDate(query.date)
  // console.log('search theater, date: ', theater, date)
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  //d_date=2020-04-04
  let response = await fetch(`https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/specific_movie_theater?theater_name=${theater}&d_date=${date}`, requestOptions)
  let result = await response.json();
  return result;
})

export const fetchMoviesByTimeSlot = createAsyncThunk('searchMovies/byTimeSlot', async (query) => {
  let theater = query.theater;
  let timeStart = formatTimeSlot(query.timeStart);
  let timeEnd = formatTimeSlot(query.timeEnd);
  // console.log('search time: ', timeStart, timeEnd);
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  // time_start=2020-04-04 00:00:00&time_end=2020-04-05 00:00:00
  let response = await fetch(`https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/timeslot?theater_name=${theater}&time_start=${timeStart}&time_end=${timeEnd}`, requestOptions)
  let result = await response.json();
  return result;
})



export const fetchNewMovies = createAsyncThunk('searchMovies/new', async () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  let response = await fetch("https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/new_movies/?r_date=2020-01-01", requestOptions);
  let result = await response.json();
  return result;
})



export default searchMoviesSlice.reducer;


function formatDate(date) {
  return date.replace('/', '-');
}

function formatTimeSlot(timeSlot) {
  if (!timeSlot) {
    return '2020-04-04 00:00:00'
  }
  let [theDate, theTime] = timeSlot.split(' - ');
  let date = formatDate(theDate);
  let time = theTime
    .replace('.', ':')
    .replace(' AM', '')
    .replace(' PM', '')
  time += ':00'

  return date + ' ' + time;
}