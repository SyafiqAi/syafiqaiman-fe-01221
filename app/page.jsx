'use client';
import NewReleases from '@/app/components/NewReleases'


export default function Home() {
  return (
    <div>
      <div className="h-[90vh] flex justify-center items-center">
        <p>
          hello
        </p>
      </div>
      <div className="bg-zinc-800">
        <NewReleases></NewReleases>
      </div>
    </div>
  )
}

