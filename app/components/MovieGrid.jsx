import { SimpleGrid, GridItem } from "@chakra-ui/react";
import MoviePreview from "./MoviePreview";

export default function MovieGrid(props) {
    let movies = props.movies;
    let colSpan = 1;
    let enlargeFirstItem = props.enlargeFirstItem || false;
    return (
        <SimpleGrid columns='3' spacing={6}>{
            movies.data.map((movie, i) => {
                if (enlargeFirstItem) {
                    colSpan = i === 0 ? 2 : 1;
                }
                return <GridItem colSpan={colSpan} key={movie.Movie_ID} ><MoviePreview movie={movie} /></GridItem>
            })
        }
        </SimpleGrid>
    )
}