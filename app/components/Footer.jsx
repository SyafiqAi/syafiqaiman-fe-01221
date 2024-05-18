'use client';
import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import Image from "next/image";
import LocationIcon from "@/public/LocationIcon.svg"
import NewsletterInput from "./NewsletterInput";

export default function Footer() {
    const listColumnsMr = 36;
    const listItemsMb = 8;

    return (
        <Grid templateColumns={'2fr 3fr'}>
            <Flex height={'40vw'} bg={'#3d3d3dff'} align={'center'} justify={'center'} flexDir={'column'}>
                <Stack spacing={10}>
                    <Text fontSize={'6xl'}>PcariMovie</Text>
                    <Text maxW={'20vw'}>
                        Lorem ipsum dolor sit amet,
                        consec tetur adipis cing elit,
                        sed do eiusmod tempor incididunt ut labore et.
                    </Text>
                    <NewsletterInput />
                </Stack>
            </Flex>
            <Flex height={'40vw'} bg={'#2e2e2eff'} p={16} flexDir={'column'} justify={'center'}>
                <Stack direction={'row'} spacing={36}>
                    <Stack spacing={8}>
                        <Text fontWeight={'black'}>Product</Text>
                        <Text>Movies</Text>
                        <Text>TV Shows</Text>
                        <Text>Videos</Text>
                    </Stack>
                    <Stack spacing={8}>
                        <Text fontWeight={'black'}>Media Group</Text>
                        <Text>Nice Studio</Text>
                        <Text>Nice News</Text>
                        <Text>Nice TV</Text>
                    </Stack>
                    <Stack spacing={8}>
                        <Text fontWeight={'black'}>Sitemap</Text>
                        <Text>About</Text>
                        <Text>Careers</Text>
                        <Text>Press</Text>
                    </Stack>
                </Stack>
                <Stack flexDir={'row'} align={'center'} mt={24} spacing={8}>
                    <Flex align={'center'}>
                        <Image src={LocationIcon} style={{width:'auto', height:15}} color="white" alt="location icon" />
                        <Text fontSize={'sm'} ml={1}>8819 Ohio St. South Gate, California 90280</Text>
                    </Flex>
                    <Flex align={'center'}>
                        <EmailIcon />
                        <Text fontSize={'sm'} ml={1}>ourstudio@hello.com</Text>
                    </Flex>
                    <Flex align={'center'}>
                        <PhoneIcon />
                        <Text fontSize={'sm'} ml={1}>+271 386-647-3637</Text>
                    </Flex>

                </Stack>
            </Flex>
        </Grid>
    )
}