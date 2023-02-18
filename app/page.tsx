import CountryInput from '@/ui/CountryInput'
import SelectRegion from '@/ui/SelectRegion'
import React from 'react'

export default function Page(): JSX.Element {
	return (
		<>
			<div className='w-full min-w-[315px] h-fit flex flex-col gap-y-12 px-4 items-center md:flex-row md:justify-between md:gap-x-2 md:px-16'>
				<CountryInput />
				<SelectRegion />
			</div>
		</>
	)
}
