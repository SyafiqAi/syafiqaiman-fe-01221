'use client';
import SearchByTimeSlot from '../components/SearchByTimeSlot'
import HeroTemplate from '../components/HeroTemplate';
import SearchResults from '../components/SearchResults';
import { Text } from '@chakra-ui/react';

export default function Search({children}) {
  return (
    <div>
      <HeroTemplate>
        <Text fontSize={'4xl'} fontWeight={'bold'}>Search your movies here!</Text>
        {children}
      </HeroTemplate>
      <div>
        <SearchResults />
      </div>
    </div>
  )
}



