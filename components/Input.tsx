'use client'

import { useAppContext } from '@/context/AppContext'

export default function Input(): JSX.Element {
	const { theme, inputValue, setInputValue } = useAppContext()

	return (
		<div className='w-full min-w-[300px] h-16 bg-white flex items-center gap-6 pl-10 pr-6 rounded-md shadow-xl md:w-1/6 dark:bg-darkElement'>
			<svg height={20} width={20} className='fill-gray-500 dark:fill-white'>
				<use href='/magnifying-glass.svg#icon' />
			</svg>
			<input
				className='bg-transparent grow caret-gray-500 dark:text-white dark:caret-white dark:placeholder-white'
				placeholder='Search for a country... '
			/>
		</div>
	)
}
