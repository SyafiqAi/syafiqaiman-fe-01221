import { Box, Flex, Spacer, Text } from "@chakra-ui/react"
import { TimeIcon, ViewIcon } from '@chakra-ui/icons'

export default function MoviePreview(props) {
    let title = props.movie.Title
    let views = props.movie.Views
    let duration = props.movie.Duration.replace(' hour', 'hr').replace(' minutes', 'mins')
    let genre = props.movie.Genre
    return (
        <Flex flexDir={'column'} p={5} h={'650px'} border={'1px'}>
            <Box bg={'yellow'} w={'fit-content'} p={2} color={'black'} borderRadius={'full'} textTransform={'capitalize'}>
                <Text fontSize={'xs'}>{genre}</Text>
            </Box>
            <Spacer />
            <Flex flexDir={'row'} mb={'5'}>
                <Text fontSize={'xs'}>
                    <TimeIcon mr={'2'} fontSize='md' />
                    {duration}
                </Text>
                <Text fontSize={'xs'}>
                    <ViewIcon ml={'6'} mr={'2'} fontSize='md' />
                    {views} views
                </Text>
            </Flex>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
                {title}

            </Text>
        </Flex>

    )
}