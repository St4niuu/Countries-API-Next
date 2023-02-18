'use client'

import React from 'react'
import CountryItem from './CountryItem'
import { CountryType } from '@/app/fetchData'
import { getContext } from '@/context/AppContext'

export default function CountryBox({
	countries,
}: {
	countries: CountryType[][]
}): JSX.Element {
	const { page } = getContext()

	return (
		<>
			{countries[page].map((element) => {
				return (
					<CountryItem
						key={element.name}
						name={element.name}
						population={element.population}
						region={element.region}
						flagUrl={element.flagUrl}
						capital={element.capital}
					/>
				)
			})}
		</>
	)
}
