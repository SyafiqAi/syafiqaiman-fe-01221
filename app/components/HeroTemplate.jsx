import Image from 'next/image';
import PlayLogo from '@/public/playLogo.svg'
import { Flex, Box } from '@chakra-ui/react';

export default function HeroTemplate({ children }) {
    return (
        <Flex align={'center'} justify={'center'}>
            <div className="h-lvh flex justify-center items-center">
                <Image priority src={PlayLogo} alt='play logo' height={'350'} />
            </div>
            <Flex align={'center'} justify={'center'}>
                <Box w={'40vw'} ml={'75px'} p={'5'}>
                    {children}
                </Box>
            </Flex>
        </Flex>
    )
}