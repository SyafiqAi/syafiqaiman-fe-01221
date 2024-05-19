'use client';
import HeroTemplate from '../components/HeroTemplate';
import SearchResults from '../components/SearchResults';
import { Stack, Text } from '@chakra-ui/react';

export default function Search({children}) {
  return (
    <div>
      <HeroTemplate>
        <Stack spacing={4}>
          <Text fontSize={'4xl'} fontWeight={'bold'}>Search your movies here!</Text>
          {children}
        </Stack>
      </HeroTemplate>
      <div>
        <SearchResults />
      </div>
    </div>
  )
}



