'use client';
import { useDispatch } from "react-redux";
import { fetchMoviesByTimeSlot } from '@/lib/features/searchMovies/searchMoviesSlice'
import { Box, Button, Flex, FormControl, Grid, HStack, Input, InputGroup, InputLeftElement, SimpleGrid, Stack } from "@chakra-ui/react";
import { CalendarIcon, SearchIcon } from "@chakra-ui/icons";
import TimeSlotPicker from "@/app/components/TimeSlotPicker";

export default function SearchByTimeSlot() {
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
                    <Grid templateColumns={'1fr 1fr'} gap={4}>
                        <Grid>
                            <TimeSlotPicker placeholder=''/>
                        </Grid>
                        <Grid>
                            <TimeSlotPicker />
                        </Grid>
                        {/* weird layout but other layouts don't work with the datepicker. */}
                    </Grid>
                    <Button
                        size={'lg'}
                        borderRadius={'full'} bg={'secondary.yellow'}
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

