'use client';
import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import MovieGrid from "./MovieGrid";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { useRef } from "react";

export default function SearchResults() {
  const status = useSelector(state => state.searchMovies.status)
  const movies = useSelector(state => state.searchMovies.movies)

  let content;
  let contentRef = useRef(null)

  let scrollIntoView = () => {
    const {current} = contentRef
    current.scrollIntoView({behavior: 'smooth'});
  }

  if (status === 'loading') {
      content = <LoadingSpinner />
  } else if (status === 'succeeded') {
      content = <MovieGrid movies={movies}/>
      scrollIntoView();
  } else if (status === 'failed') {
      content = <p>failed</p>
  }

  if (status === 'idle') {
    return (<></>)
  }
  
  return (
      <Box bg={'primary.darkGray'} p={'16'} ref={contentRef}>
          <Flex align={'center'}>
              <Text fontSize={'6xl'} mb={10}>Search Results</Text>
          </Flex>
              {content}
      </Box>
  )
}

