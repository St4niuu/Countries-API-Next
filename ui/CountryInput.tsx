'use client'

import React from 'react'
import { getContext } from '@/context/AppContext'

export default function CountryInput(): JSX.Element {
	const { search, setSearch } = getContext()

	return (
		<div className='w-full h-16 bg-white flex items-center gap-x-4 px-8 shadow-xl rounded-md dark:bg-darkElement md:w-[30%] md:min-w-[290px]'>
			<svg className='w-[20px] h-[20px] fill-gray-400 dark:fill-white'>
				<use href='/magnifying-glass.svg#icon' />
			</svg>
			<input
				placeholder='Search for a country...'
				className='grow bg-white dark:bg-darkElement dark:text-white dark:placeholder:text-white'
				onChange={(e) => setSearch(e.target.value)}
				value={search}
			/>
		</div>
	)
}
