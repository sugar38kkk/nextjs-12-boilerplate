import LargeHeading from 'components/ui/LargeHeading'
import Paragraph from 'components/ui/Paragraph'
import Image from 'next/image'
import { FC } from 'react'

const Main: FC = () => {
  return (
    <main className="relative h-screen overflow-x-hidden pt-12">
      <div className="container max-w-7xl w-full mx-auto h-full flex flex-col items-center lg:justify-center text-center justify-start">
        <div className="relative w-full h-full max-h-14 max-w-xl lg:max-w-3xl mb-8">
          <Image
            className="img-shadow "
            priority
            fill
            src={'./images/logo-light.svg'}
            alt="Logo"
            style={{ objectFit: 'contain' }}
            quality={100}
          />
        </div>
        <LargeHeading>React Advanced</LargeHeading>
        <Paragraph>
          Typescript, ReactJs, NextJs, Tailwindcss The library for web and
          native user interfaces
        </Paragraph>
        <div className="relative mt-12 w-full max-w-sm h-60">
          <Image
            priority
            className="img-shadow "
            quality={100}
            style={{ objectFit: 'contain' }}
            fill
            src="./images/hero-illustration.svg"
            alt="illustration"
          />
        </div>
      </div>
    </main>
  )
}

export default Main
