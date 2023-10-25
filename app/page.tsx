import Image from 'next/image'

import Card from '@/components/Card'
import Searchbar from '@/components/Searchbar'

export default function Home() {
  return (
    <div
      className="w-full h-screen flex-col flex gap-3 font-Montserrat bg-lightGrayishCyanBackground ">
      <Image src={'./images/bg-header-mobile.svg'} alt={''} width={100} height={100} className='w-full bg-darkGrayishCyan
sm:hidden' />
      <Image src={'./images/bg-header-desktop.svg'} alt={''} width={100} height={100} className='w-full bg-darkGrayishCyan
hidden sm:flex' />
      <div className="absolute w-full sm:px-20 top-32  ">
        <Searchbar />
      </div>

      <div className="sm:px-20 mt-20 ">
        <Card data={'string'} />
      </div>
    </div>
  )
}
