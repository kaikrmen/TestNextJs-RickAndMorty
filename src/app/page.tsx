import Image from 'next/image'
import Link from 'next/link'

import RickAndMorty from '@/assets/FullLogo.svg'
import CharactersImage from '@/assets/charactersImage.jpg'
import Characters from './characters/page'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-8">
      <Image src={RickAndMorty} height={500} width={700} alt="Rick and Morty" />
      <Characters></Characters>
    </main>
  )
}
