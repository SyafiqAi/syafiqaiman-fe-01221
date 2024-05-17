'use client';
import NewReleases from '@/app/components/NewReleases';
import Image from 'next/image';
import PlayLogo from '@/public/playLogo.svg'

export default function Home() {
  return (
    <div>
      <div className="h-lvh flex justify-center items-center">
        <Image priority src={PlayLogo} alt='play logo'/>
      </div>
      <div>
        <NewReleases></NewReleases>
      </div>
    </div>
  )
}

