import React from 'react'
import Image from 'next/image'
type Props = {}

export default function Card({ }: Props) {
    return (
        <div className='flex justify-between sm:flex-row flex-col gap-4 p-2'>
            <div className="flex gap-2 sm:flex-row flex-col sm:items-center ">
                <Image src={'./images/photosnap.svg'} alt={''} width={60} height={60} />

                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <p className="">Photosnap</p>
                        <p className="">NEW!</p>
                        <p className="">FEATURED</p>
                    </div>
                    <p className="font-bold ">Senior Frontend Developer</p>
                    <div className="flex justify-between text-sm items-center">
                        <p className="">1d ago</p>
                        <p className="bg-gray-400 h-1 w-1 rounded-full"></p>
                        <p className="">Full Time</p>
                        <p className="bg-gray-400 h-1 w-1 rounded-full"></p>
                        <p className="">USA only</p>
                    </div>
                </div>
            </div>
            <hr className="sm:hidden w-full  " />
            <div className="flex gap-2 sm:items-center sm:justify-center justify-start sm:flex-row flex-wrap ">

                <p className="">font</p>
            </div>
        </div>
    )
}