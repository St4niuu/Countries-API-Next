import CountryInput from '@/ui/CountryInput'
import React from 'react'

export default function Page(): JSX.Element {
	return (
		<>
			<div className='w-full min-w-[375px] h-fit flex flex-col items-center'>
				<CountryInput />
			</div>
		</>
	)
}
