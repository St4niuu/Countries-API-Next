'use client'

import { useEffect, useState } from 'react'
import { useAppContext } from '@/context/AppContext'
import CountryItem from './CountryItem'
import { CountryType } from '@/app/page'

function paginate(data: CountryType[]): CountryType[][] {
	const result = []
	let counter = 0
	let tmp = []
	while (true) {
		if (counter == 8) {
			counter = 0
			result.push(tmp)
			tmp = new Array()
		}
		counter += 1
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
		<div className='w-full h-fit grow flex flex-col gap-8 px-8'>
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
	)
}
