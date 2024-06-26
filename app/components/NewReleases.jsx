'use client';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNewMovies } from "@/lib/features/searchMovies/searchMoviesSlice";
import { Box, Flex, GridItem, Progress, Spacer, Text, keyframes } from "@chakra-ui/react";
import MovieGrid from "./MovieGrid";
import LoadingSpinner from "./LoadingSpinner";

export default function NewReleases() {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNewMovies());
    }, [])

    const status = useSelector(state => state.searchMovies.status)
    const movies = useSelector(state => state.searchMovies.movies)

    let content;

    if (status === 'loading') {
        content = <LoadingSpinner />
    } else if (status === 'succeeded') {
        content = <MovieGrid movies={movies} enlargeFirstItem={true}/>
    } else if (status === 'failed') {
        content = <p>failed</p>
    }

    return (
        <Box bg={'primary.darkGray'} p={'16'}>
            <Flex align={'center'}>
                <Text fontSize={'6xl'} mb={10}>New Releases</Text>
                <Spacer />
                <Text fontSize={'3xl'} mb={10}>View More</Text>
            </Flex>
                {content}
        </Box>
    )
}

