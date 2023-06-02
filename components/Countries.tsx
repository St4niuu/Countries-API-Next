'use client'

import { useEffect, useState } from 'react'
import { useAppContext } from '@/context/AppContext'
import CountryItem from './CountryItem'
import { CountryType } from '@/app/page'

function paginate(data: CountryType[]): CountryType[][] {
	const result = []
	let quantity = 0
	let tmp = []
	while (true) {
		if (quantity == 25) {
			quantity = 0
			result.push(tmp)
			tmp = new Array()
		}
		quantity += 1
		tmp.push(data.shift())
		if (data.length == 0) {
			result.push(tmp)
			break
		}
	}
	return result
}

export default function Countries({
	countries,
}: {
	countries: CountryType[]
}): JSX.Element {
	const [page, setPage] = useState(0)
	const [elements, setElements] = useState(paginate([...countries]))
	const [toDisplay, setToDisplay] = useState(elements[page])
	const [pagesState, setPagesState] = useState(0)

	const { inputValue, filterValue } = useAppContext()

	useEffect(() => {
		setToDisplay(elements[page])
	}, [elements, page])

	useEffect(() => {
		if (inputValue || filterValue) {
			setElements(
				paginate(
					countries.filter((element: CountryType): boolean => {
						switch (!!filterValue) {
							case true:
								return (
									element.name
										.toLowerCase()
										.includes(inputValue.toLowerCase()) &&
									element.region.toLowerCase() == filterValue.toLowerCase()
								)
							case false:
								return element.name
									.toLowerCase()
									.includes(inputValue.toLowerCase())
						}
					})
				)
			)
		} else {
			setElements(paginate([...countries]))
		}
		setPage(0)
		setPagesState(0)
	}, [inputValue, filterValue])

	return (
		<>
			<div className='w-full min-w-[325px] h-fit grow flex flex-col items-center gap-8 px-8 md:flex-row md:flex-wrap md:justify-center'>
				{toDisplay[0] &&
					toDisplay.map((element: CountryType, index: number): JSX.Element => {
						return (
							<CountryItem
								key={index}
								name={element.name}
								population={element.population}
								region={element.region}
								capital={element.capital}
								imgUrl={element.imgUrl}
							/>
						)
					})}
			</div>
			<div className='w-fit h-12 flex justify-center items-center gap-8'>
				<img
					className={`w-fit h-1/2 rotate-[90deg] cursor-pointer ${
						pagesState > 0 ? '' : 'invisible'
					}`}
					src='/arrow.svg#icon'
					alt='navigation-left'
					onClick={() => setPagesState(pagesState - 1)}
				/>
				<div className='w-36 h-fit overflow-hidden'>
					<div
						style={{ transform: `translateX(calc(${pagesState}*-3.25rem))` }}
						className={`w-fit h-fit flex gap-3 transition-transform duration-200 ${
							[1, 2].includes(elements.length) ? 'w-full justify-center' : ''
						}`}
					>
						{new Array(elements.length)
							.fill(true)
							.map((element: boolean, index: number): JSX.Element => {
								return (
									<div
										key={index}
										className={`w-10 h-12 font-medium flex-none grid place-items-center rounded-lg cursor-pointer active:scale-95 transition-transform duration-75 ${
											index == page
												? 'bg-zinc-500 text-white'
												: 'bg-zinc-300 dark:bg-white'
										}`}
										onClick={() => {
											setPage(index)
											window.scrollTo(0, 0)
										}}
									>
										{index + 1}
									</div>
								)
							})}
					</div>
				</div>
				<img
					className={`w-fit h-1/2 rotate-[270deg] cursor-pointer ${
						pagesState >= 0 && pagesState < elements.length - 3
							? ''
							: 'invisible'
					}`}
					src='/arrow.svg#icon'
					alt='navigation-right'
					onClick={() => setPagesState(pagesState + 1)}
				/>
			</div>
		</>
	)
}
