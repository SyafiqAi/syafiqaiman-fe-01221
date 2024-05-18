'use client';
import { useDispatch } from "react-redux";
import { fetchMoviesByTimeSlot } from '../../lib/features/searchMovies/searchMoviesSlice'
import { Button, FormControl, Grid, HStack, Input, InputGroup, InputLeftElement, SimpleGrid, Stack } from "@chakra-ui/react";
import { CalendarIcon, SearchIcon } from "@chakra-ui/icons";

export default function SearchMovies() {
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault();
        let theater = e.target[0].value
        let timeStart = e.target[1].value
        let timeEnd = e.target[2].value
        
        let query = e.target[0].value
        dispatch(fetchMoviesByTimeSlot({ theater, timeStart, timeEnd }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement>
                            <SearchIcon color={'black'} mt={2} ml={4} />
                        </InputLeftElement>
                        <Input type="text" borderRadius={'full'} bg={'white'} color={'black'} placeholder="Theater name" size={'lg'} />
                    </InputGroup>
                    <SimpleGrid columns={2} gap={4}>
                        <InputGroup>
                            <InputLeftElement>
                                <CalendarIcon color={'black'} mt={2} ml={4} />
                            </InputLeftElement>
                            <Input type="text" borderRadius={'full'} bg={'white'} color={'black'} placeholder="23/12/2021 - 10.00 PM" size={'lg'} />
                        </InputGroup>
                        <InputGroup>
                            <InputLeftElement>
                                <CalendarIcon color={'black'} mt={2} ml={4} />
                            </InputLeftElement>
                            <Input type="text" borderRadius={'full'} bg={'white'} color={'black'} placeholder="23/12/2021 - 12.00 PM" size={'lg'} />
                        </InputGroup>
                    </SimpleGrid>
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

