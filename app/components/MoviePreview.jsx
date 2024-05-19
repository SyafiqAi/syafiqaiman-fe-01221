import { Box, Flex, Spacer, Text } from "@chakra-ui/react"
import { TimeIcon, ViewIcon } from '@chakra-ui/icons'

export default function MoviePreview(props) {
    let title = props.movie.Title
    let views = props.movie.Views
    let duration = props.movie.Duration.replace(' hour', 'hr').replace(' minutes', 'mins')
    let genre = props.movie.Genre
    let image = props.movie.Poster
    return (
        <Box h={'650px'} bgImage={image} bgSize={'cover'} position={'relative'}>
            {/* <Box h={'full'} w={'full'} border={'1px'} position={'absolute'} display={'block'} bgGradient='linear(to-r, green.200, pink.500)' top={0} left={0} zIndex={0}>
            </Box> */}
            <Flex position={'absolute'} top={0} left={0} flexDir={'column'} p={5} h={'full'} w={'full'} bgGradient='linear(to-b, #00000000, #000000aa)' >
                <Box bg={'secondary.yellow'} w={'fit-content'} p={2} color={'black'} borderRadius={'full'} textTransform={'capitalize'}>
                    <Text fontSize={'s'}>{genre}</Text>
                </Box>
                <Spacer />
                <Flex flexDir={'row'} mb={'5'}>
                    <Text fontSize={'s'}>
                        <TimeIcon mr={'2'} fontSize='md' />
                        {duration}
                    </Text>
                    <Text fontSize={'s'}>
                        <ViewIcon ml={'6'} mr={'2'} fontSize='md' />
                        {views} views
                    </Text>
                </Flex>
                <Text fontSize={'4xl'} fontWeight={'bold'}>
                    {title}

                </Text>

            </Flex>
        </Box>

    )
}