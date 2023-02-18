import CountryInput from '@/ui/CountryInput'
import CountryItem from '@/ui/CountryItem'
import SelectRegion from '@/ui/SelectRegion'
import React, { use } from 'react'
import fetchData, { CountryType } from './fetchData'

export default function Page(): JSX.Element {
	const countries: CountryType[] = use(fetchData())

	return (
		<>
			<div className='w-full min-w-[315px] h-fit flex flex-col gap-y-12 px-4 items-center md:flex-row md:justify-between md:gap-x-2 md:px-16'>
				<CountryInput />
				<SelectRegion />
			</div>
			<div className='w-full min-w-[360px] h-fit flex flex-col gap-y-8 px-14'>
				{countries.map((element) => {
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
			</div>
		</>
	)
}
