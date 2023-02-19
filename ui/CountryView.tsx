'use client'

import React from 'react'
import CountryItem from './CountryItem'
import { CountryType } from '@/app/fetchData'
import { getContext } from '@/context/AppContext'

export default function CountryBox({
	countries,
}: {
	countries: { raw: CountryType[]; paginated: CountryType[][] }
}): JSX.Element {
	const { page, search, filter } = getContext()
	let result = undefined

	if (!search && !filter) result = countries.paginated[page]
	else {
		if (search && !filter)
			result = countries.raw.filter((country) =>
				country.name.toLowerCase().includes(search.toLowerCase())
			)
		else if (!search && filter)
			result = countries.raw.filter((country) => country.region === filter)
		else
			result = countries.raw.filter(
				(country) =>
					country.region === filter &&
					country.name.toLowerCase().includes(search.toLowerCase())
			)
	}

	return (
		<>
			{result.map((element) => {
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
