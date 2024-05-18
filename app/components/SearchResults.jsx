'use client';
import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import MovieGrid from "./MovieGrid";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

export default function SearchResults() {
  const status = useSelector(state => state.searchMovies.status)
  const movies = useSelector(state => state.searchMovies.movies)

  let content;

  if (status === 'loading') {
      content = <LoadingSpinner />
  } else if (status === 'succeeded') {
      content = <MovieGrid movies={movies}/>
  } else if (status === 'failed') {
      content = <p>failed</p>
  }

  if (status === 'idle') {
    return (<></>)
  }
  
  return (
      <Box bg={'#1e1e1eff'} p={'16'}>
          <Flex align={'center'}>
              <Text fontSize={'6xl'} mb={10}>Search Results</Text>
          </Flex>
              {content}
      </Box>
  )
}

