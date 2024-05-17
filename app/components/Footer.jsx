'use client';
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import Image from "next/image";
import LocationIcon from "@/public/LocationIcon.svg"

export default function Footer() {
    const listColumnsMr = 36;
    const listItemsMb = 8;

    return (
        <Grid templateColumns={'2fr 3fr'}>
            <Flex height={'40vw'} bg={'#3d3d3dff'} align={'center'} justify={'center'} flexDir={'column'}>
                <Box>
                    <Text fontSize={'6xl'} mb={10}>PcariMovie</Text>
                    <Text maxW={'20vw'}>
                        Lorem ipsum dolor sit amet,
                        consec tetur adipis cing elit,
                        sed do eiusmod tempor incididunt ut labore et.
                    </Text>
                    <Text mt={10} mb={5} fontWeight={'bold'}>
                        Join Newsletters
                    </Text>
                    <Box>
                        <input type="text" placeholder="email" />
                    </Box>
                </Box>
            </Flex>
            <Flex height={'40vw'} bg={'#2e2e2eff'} p={16} flexDir={'column'} justify={'center'}>
                <Flex>
                    <Box mr={listColumnsMr}>
                        <Text mb={listItemsMb} fontWeight={'black'}>Product</Text>
                        <Text mb={listItemsMb}>Movies</Text>
                        <Text mb={listItemsMb}>TV Shows</Text>
                        <Text mb={listItemsMb}>Videos</Text>
                    </Box>
                    <Box mr={listColumnsMr}>
                        <Text mb={listItemsMb} fontWeight={'black'}>Media Group</Text>
                        <Text mb={listItemsMb}>Nice Studio</Text>
                        <Text mb={listItemsMb}>Nice News</Text>
                        <Text mb={listItemsMb}>Nice TV</Text>
                    </Box>
                    <Box mr={listColumnsMr}>
                        <Text mb={listItemsMb} fontWeight={'black'}>Sitemap</Text>
                        <Text mb={listItemsMb}>About</Text>
                        <Text mb={listItemsMb}>Careers</Text>
                        <Text mb={listItemsMb}>Press</Text>
                    </Box>
                </Flex>
                <Flex flexDir={'row'} align={'center'} mt={16}>
                    <Box mr={1}>
                    <Image src={LocationIcon} height={15} color="white"/>
                    </Box>
                    <Text fontSize={'sm'} mr={8}>8819 Ohio St. South Gate, California 90280</Text>
                    
                    <EmailIcon  mr={1}/>
                    <Text fontSize={'sm'} mr={8}>ourstudio@hello.com</Text>

                    <PhoneIcon  mr={1}/>
                    <Text fontSize={'sm'} mr={8}>+456 456-456-4564</Text>
                </Flex>
            </Flex>
        </Grid>
    )
}