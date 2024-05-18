'use client';
import { useDispatch } from "react-redux";
import { fetchMoviesByTheater } from '../../lib/features/searchMovies/searchMoviesSlice'
import { Button, FormControl, Grid, HStack, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { CalendarIcon, SearchIcon } from "@chakra-ui/icons";

export default function SearchMovies() {
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault();
        let theater = e.target[0].value;
        let date = e.target[1].value;
        dispatch(fetchMoviesByTheater({theater, date}));
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <Stack spacing={4}>
                    <Grid templateColumns={'3fr 2fr'} gap={4}>
                        <InputGroup>
                            <InputLeftElement>
                                <SearchIcon color={'black'} mt={2} ml={4} />
                            </InputLeftElement>
                            <Input type="text" borderRadius={'full'} bg={'white'} color={'black'} placeholder="Search by theater" size={'lg'} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement>
                                <CalendarIcon color={'black'} mt={2} ml={4} />
                            </InputLeftElement>
                            <Input type="text" borderRadius={'full'} bg={'white'} color={'black'} placeholder="23/12/2021" size={'lg'}  />
                        </InputGroup>
                    </Grid>
                    <Button
                        size={'lg'}
                        borderRadius={'full'} bg={'yellow'}
                        px={10}
                        w={'fit-content'}
                        aria-label="Search"
                        type='submit'
                    >
                        Search
                    </Button>
                </Stack>
            </FormControl>
        </form>
    )
}

