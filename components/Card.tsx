import React from 'react'
import Image from 'next/image'
import data from 'data.json'
type Props = {
    data: string
}

export default function Card({ }: Props) {
    return (
        <>
            {data.map((data) => (<div key={data.id} className='flex justify-between sm:flex-row flex-col gap-4 sm:p-4 sm:px-8 p-4 px-6 bg-lightGrayishCyanBackground rounded-md shadow-2xl'>
                <div className="flex gap-4 sm:flex-row flex-col sm:items-center ">
                    <Image src={data.logo} alt={''} width={80} height={80} />

                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 font-semibold">
                            <p className="text-desaturatedDarkCyan ">{data.company}</p>
                            <p className="bg-desaturatedDarkCyan p-1 rounded-3xl px-2 text-lightGrayishCyanBackground">NEW!</p>
                            <p className="bg-veryDarkGrayishCyan p-1 rounded-3xl px-2 text-lightGrayishCyanBackground">FEATURED</p>
                        </div>
                        <p className="font-bold text-veryDarkGrayishCyan ">{data.position}</p>
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

                    <p className="hover:bg-desaturatedDarkCyan bg-lightGrayishCyanFilterTablets rounded-lg p-2 text-desaturatedDarkCyan font-semibold hover:text-lightGrayishCyanBackground">{data.role}</p>
                    <p className="hover:bg-desaturatedDarkCyan bg-lightGrayishCyanFilterTablets rounded-lg p-2 text-desaturatedDarkCyan font-semibold hover:text-lightGrayishCyanBackground">{data.level}</p>
                    <p className="hover:bg-desaturatedDarkCyan bg-lightGrayishCyanFilterTablets rounded-lg p-2 text-desaturatedDarkCyan font-semibold hover:text-lightGrayishCyanBackground">{data.languages}</p>
                    <p className="hover:bg-desaturatedDarkCyan bg-lightGrayishCyanFilterTablets rounded-lg p-2 text-desaturatedDarkCyan font-semibold hover:text-lightGrayishCyanBackground">{data.tools}</p>
                </div>
            </div>))}
        </>

    )
}