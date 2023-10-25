import React from 'react'

type Props = {}

export default function Searchbar({ }: Props) {
    return (
        <div className="flex justify-end w-full  bg-white rounded-md items-center font-semibold h-14 shadow-lg p-4 gap-2 outline-none border-none focus:outline-none">
            <input type="text" className='w-full rounded-md p-2 flex flex-wrap' />
            <p className=" rounded-md">Clear</p>
        </div>
    )
}