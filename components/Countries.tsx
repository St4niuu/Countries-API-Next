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
	const [elements, setElements] = useState(paginate(countries))
	const [toDisplay, setToDisplay] = useState(elements[page])

	const { inputValue, filterValue } = useAppContext()

	return (
		<>
			<div className='w-full min-w-[325px] h-fit grow flex flex-col items-center gap-8 px-8 md:flex-row md:flex-wrap md:justify-center'>
				{toDisplay.map((element: CountryType, index: number): JSX.Element => {
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
		</>
	)
}
