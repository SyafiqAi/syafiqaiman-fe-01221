'use client'
import { Link } from '@chakra-ui/next-js'
import { Avatar, Box, Flex, HStack, Popover, Spacer, Text } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import NavbarSearchButton from './NavbarSearchButton'
import { usePathname } from 'next/navigation';
import NavbarLink from './NavbarLink'

export default function TopNavbar() {

    const navPadding = 14

    return (
        <Flex p={7} position='absolute' width={'full'} px={20} align={'center'} overflowY={'visible'} overflowX={'clip'} >
            <HStack spacing={14}>
                <Link href={'/'}>
                    <h1 className='inline'>
                        <Text fontSize='3xl' fontWeight={'bold'}>
                            PcariMovie
                        </Text>
                    </h1>
                </Link>
                <NavbarLink href='/'>
                    Home
                </NavbarLink>
                <NavbarLink href='/movies'>
                    Movies
                </NavbarLink>
                <NavbarLink href='/tv_shows'>
                    TV Shows
                </NavbarLink>
                <NavbarLink href='/videos'>
                    Videos
                </NavbarLink>
                <NavbarLink href='/faq'>
                    FAQ
                </NavbarLink>
                <NavbarLink href='/pricing'>
                    Pricing
                </NavbarLink>
                <NavbarLink href='/contact_us'>
                    Contact Us
                </NavbarLink>
            </HStack>
            <Spacer />

            <NavbarSearchButton />
            <Avatar size='sm' name='John Glich' ml={navPadding} />
            <Text ml={4}>John Glich</Text>

        </Flex>
    )
}