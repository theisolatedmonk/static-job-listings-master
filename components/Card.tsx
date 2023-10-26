'use client'
// import React, { useState } from 'react'
import Image from 'next/image'
import data from '@/app/data.json'
type Props = {
    data: string
}

export default function Card({ }: Props) {
    // const [classes, setClasses] = useState(false)
    return (
        <>
            <div className="flex flex-col gap-4">
                {data.map((data) => (<div key={data.id} className={`flex justify-between sm:flex-row flex-col gap-4 sm:p-4 sm:px-8 p-4 px-6 bg-lightGrayishCyanBackground rounded-md shadow-md  ${data.new && data.featured ? 'border-l-[4px] border-l-desaturatedDarkCyan' : ''}`}>
                    <div className={`flex gap-4 sm:flex-row flex-col sm:items-center `}>
                        <Image src={data.logo} alt={''} width={80} height={80} />

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 font-semibold">
                                <p className="text-desaturatedDarkCyan ">{data.company}</p>
                                <p className={`bg-desaturatedDarkCyan p-1 rounded-3xl px-2 text-lightGrayishCyanBackground ${data.new ? 'flex' : 'hidden'}`}>NEW!</p>
                                <p className={`bg-veryDarkGrayishCyan p-1 rounded-3xl px-2 text-lightGrayishCyanBackground  ${data.featured ? 'flex' : 'hidden'}`}>FEATURED</p>
                            </div>
                            <p className="font-bold text-veryDarkGrayishCyan cursor-pointer">{data.position}</p>
                            <div className="flex  justify-start gap-4 text-sm  items-center text-darkGrayishCyan">

                                <p className="">{data.postedAt}</p>
                                <p className="bg-darkGrayishCyan h-1 w-1 rounded-full"></p>
                                <p className="">{data.contract}</p>
                                <p className="bg-darkGrayishCyan h-1 w-1 rounded-full"></p>
                                <p className="">{data.location}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="sm:hidden w-full  " />
                    <div className="flex gap-2 sm:items-center sm:justify-end justify-start sm:flex-row flex-wrap ">

                        <p className="hover:bg-desaturatedDarkCyan bg-lightGrayishCyanFilterTablets rounded-lg p-2 text-desaturatedDarkCyan font-semibold hover:text-lightGrayishCyanBackground cursor-pointer">{data.role}</p>
                        <p className="hover:bg-desaturatedDarkCyan bg-lightGrayishCyanFilterTablets rounded-lg p-2 text-desaturatedDarkCyan font-semibold hover:text-lightGrayishCyanBackground cursor-pointer">{data.level}</p>
                        {data.languages.map((d, i) => <p key={i} className="hover:bg-desaturatedDarkCyan bg-lightGrayishCyanFilterTablets rounded-lg p-2 text-desaturatedDarkCyan font-semibold hover:text-lightGrayishCyanBackground cursor-pointer">{d} </p>)}

                        <p className="hover:bg-desaturatedDarkCyan bg-lightGrayishCyanFilterTablets rounded-lg p-2 text-desaturatedDarkCyan font-semibold hover:text-lightGrayishCyanBackground cursor-pointer">{data.tools}</p>
                    </div>
                </div>))}
            </div>
        </>

    )
}