import CountryInput from '@/ui/CountryInput'
import SelectRegion from '@/ui/SelectRegion'
import React, { use } from 'react'
import fetchData, { CountryType } from './fetchData'
import CountryView from '@/ui/CountryView'

export default function Page(): JSX.Element {
	const countries: { raw: CountryType[]; paginated: CountryType[][] } = use(
		fetchData()
	)

	return (
		<>
			<div className='w-full min-w-[315px] h-fit flex flex-col gap-y-12 px-4 items-center md:flex-row md:justify-between md:gap-x-2 md:px-16'>
				<CountryInput />
				<SelectRegion />
			</div>
			<div className='w-full min-w-[360px] h-fit flex flex-col flex-wrap items-center gap-y-8 px-14 py-8 md:flex-row md:justify-center md:gap-x-16'>
				<CountryView countries={countries} />
			</div>
		</>
	)
}
