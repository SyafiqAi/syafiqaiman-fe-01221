'use client'
import { Link } from '@chakra-ui/next-js'
import { Box, Text } from '@chakra-ui/react'

export default function TopNavbar() {
    return (
        <Box p={2} position='fixed'>
                PcariMovie
            <Link href='/' color='blue.400' _hover={{ color: 'blue.500' }}>
                Home
            </Link>
            <Link href='/' color='blue.400' _hover={{ color: 'blue.500' }}>
                Movies
            </Link>
            <Link href='/' color='blue.400' _hover={{ color: 'blue.500' }}>
                TV Shows
            </Link>
            <Link href='/' color='blue.400' _hover={{ color: 'blue.500' }}>
                Videos
            </Link>
            <Link href='/' color='blue.400' _hover={{ color: 'blue.500' }}>
                FAQ
            </Link>
            <Link href='/' color='blue.400' _hover={{ color: 'blue.500' }}>
                Pricing
            </Link>
            <Link href='/' color='blue.400' _hover={{ color: 'blue.500' }}>
                Contact Us
            </Link>
        </Box>
    )
}