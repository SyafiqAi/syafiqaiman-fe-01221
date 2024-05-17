'use client';
import NewReleases from '@/app/components/NewReleases';
import HeroTemplate from './components/HeroTemplate';
import { Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <HeroTemplate>
        <Text fontSize={'6xl'} fontWeight={'bold'}>Find your movies here!</Text>
        <Text>
          Explore our gallery full of exciting films from all around the globe only for your entertainment.
          No hidden charges or disturbing ads.
        </Text>
      </HeroTemplate>
      <div>
        <NewReleases></NewReleases>
      </div>
    </div>
  )
}

