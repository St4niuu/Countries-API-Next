'use client'

import { useAppContext } from '@/context/AppContext'
import { useState, useEffect } from 'react'

export default function Filter(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false)
	const { filterValue, setFilterValue } = useAppContext()

	function handleQuit(event: any): void {
		if (!event.target.matches('.filterBox')) {
			setIsOpen(!isOpen)
			setFilterValue('')
		}
	}

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', handleQuit)
			return () => {
				document.removeEventListener('click', handleQuit)
			}
		}
	})

	return (
		<div
			className='filterBox w-4/6 min-w-[125px] h-16 bg-white flex justify-between items-center px-6 rounded-md shadow relative md:w-64 dark:bg-darkElement'
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className='dark:text-white'>
				{filterValue ? filterValue : 'Filter by Region'}
			</div>
			<svg
				width={10}
				height={15}
				viewBox='0 0 800 800'
				className={`cursor-pointer transition-transform duration-100 dark:fill-white ${
					isOpen ? 'rotate-180' : ''
				}`}
			>
				<use href='/arrow.svg#icon' />
			</svg>
			<div
				className={`w-full h-fit bg-white flex flex-col gap-2 px-6 py-4 rounded-md shadow-xl absolute top-[110%] left-0 transition-transform duration-150 origin-top dark:bg-darkElement ${
					isOpen ? 'scale-y-100' : 'scale-y-0'
				}`}
			>
				{['Africa', 'America', 'Asia', 'Europe', 'Oceania'].map(
					(element: string): JSX.Element => {
						return (
							<div
								key={element}
								className='w-full h-6 cursor-pointer dark:text-white'
								onClick={() => setFilterValue(element)}
							>
								{element}
							</div>
						)
					}
				)}
			</div>
		</div>
	)
}
