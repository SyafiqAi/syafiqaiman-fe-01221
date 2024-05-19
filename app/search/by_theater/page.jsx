'use client';
import { useDispatch } from "react-redux";
import { fetchMoviesByTheater } from '@/lib/features/searchMovies/searchMoviesSlice'
import { Box, Button, Flex, FormControl, Grid, HStack, Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { CalendarIcon, SearchIcon } from "@chakra-ui/icons";
import DatePicker from "@/app/components/DatePicker";

export default function SearchByTheater() {
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
                    <Flex>
                        <InputGroup mr={4}>
                            <InputLeftElement>
                                <SearchIcon color={'black'} mt={2} ml={4} />
                            </InputLeftElement>
                            <Input type="text" borderRadius={'full'} bg={'white'} color={'black'} placeholder="Search by theater" size={'lg'} />
                        </InputGroup>
                        <DatePicker />
                    </Flex>

                    
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

