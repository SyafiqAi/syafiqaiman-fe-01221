'use client'
import { Link } from '@chakra-ui/next-js'
import { Avatar, Box, Flex, Spacer, Text } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

export default function TopNavbar() {

    const navPadding = 14
    
    return (
        <Flex p={7} position='absolute' width={'full'} px={20} align={'center'}>
            <h1 className='inline'>
                <Text fontSize='3xl' fontWeight={'bold'}>
                    PcariMovie
                </Text>
            </h1>
            <Link href='/' _hover={{ color: 'yellow' }} ml={navPadding}>
                Home
            </Link>
            <Link href='/' _hover={{ color: 'yellow' }} ml={navPadding}>
                Movies
            </Link>
            <Link href='/' _hover={{ color: 'yellow' }} ml={navPadding}>
                TV Shows
            </Link>
            <Link href='/' _hover={{ color: 'yellow' }} ml={navPadding}>
                Videos
            </Link>
            <Link href='/' _hover={{ color: 'yellow' }} ml={navPadding}>
                FAQ
            </Link>
            <Link href='/' _hover={{ color: 'yellow' }} ml={navPadding}>
                Pricing
            </Link>
            <Link href='/' _hover={{ color: 'yellow' }} ml={navPadding}>
                Contact Us
            </Link>
            <Spacer />
            <Search2Icon ml={navPadding}/>
            <Avatar size='sm' name='John Glich'  ml={navPadding} />
            <Text ml={4}>John Glich</Text>

        </Flex>
    )
}