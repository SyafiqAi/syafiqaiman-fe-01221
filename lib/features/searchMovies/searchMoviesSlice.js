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
  }
})


export const fetchMoviesByTheater = createAsyncThunk('searchMovies/byTheatre', async (theater) => {
  console.log('search theater: ', theater)
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  let response = await fetch(`https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/specific_movie_theater?theater_name=${theater}&d_date=2020-04-04`, requestOptions)
  let result = await response.text();
  return result;
})

export const fetchMoviesByTimeSlot = createAsyncThunk('searchMovies/byTimeSlot', async (query) => {
  let timeStart = query.timeStart;
  let timeEnd = query.timeEnd;
  console.log('search time: ', timeStart, timeEnd);
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  // let response = await fetch("https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/timeslot?theater_name=ABC movies&time_start=2020-04-04 00:00:00&time_end=2020-04-05 00:00:00", requestOptions)
  let response = await fetch(`https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/timeslot?theater_name=ABC movies&time_start=${timeStart}&time_end=${timeEnd}`, requestOptions)
  let result = await response.text();
  return result;
})



export const { increment, decrement, incrementByAmount } = searchMoviesSlice.actions;

export default searchMoviesSlice.reducer;


