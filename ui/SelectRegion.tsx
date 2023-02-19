'use client'

import React, { useState } from 'react'
import { getContext } from '@/context/AppContext'

export default function SelectRegion(): JSX.Element {
	const [isDropped, setIsDropped]: [
		boolean,
		React.Dispatch<React.SetStateAction<boolean>>
	] = useState(false)

	const { filter, setFilter } = getContext()

	return (
		<div
			className='w-8/12 h-16 bg-white self-start flex items-center px-8 rounded-md shadow-xl relative dark:bg-darkElement dark:text-white md:w-56'
			onClick={() => setIsDropped(!isDropped)}
		>
			{filter ? filter : 'Filter by Region'}
			<svg
				className={'w-[10px] h-[10px] absolute right-4 top-[50%] translate-y-[-50%] transition-all fill-dark dark:fill-white '.concat(
					isDropped ? 'rotate-0' : 'rotate-[180deg]'
				)}
			>
				<use href='/arrow.svg#icon' />
			</svg>
			<div
				className={'w-full bg-white flex flex-col gap-y-2 px-8 py-4 rounded-md shadow-md absolute top-[110%] left-0 origin-top transition-all dark:bg-darkElement dark:text-white '.concat(
					isDropped ? 'scale-y-1' : 'scale-y-0'
				)}
			>
				{['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].map((element) => {
					return (
						<div
							key={element}
							className='w-full h-fit cursor-pointer'
							onClick={() => setFilter(element)}
						>
							{element}
						</div>
					)
				})}
			</div>
		</div>
	)
}
