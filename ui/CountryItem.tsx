import React from 'react'
import { CountryType } from '@/app/fetchData'

export default function CountryItem({
	name,
	population,
	region,
	flagUrl,
	capital,
}: CountryType): JSX.Element {
	return (
		<div className='w-full max-w-[22rem] h-[350px] bg-white flex flex-col gap-y-6 rounded-2xl shadow-xl overflow-hidden dark:bg-darkElement md:w-[21%] md:min-w-[20rem] md:h-[425px]'>
			<img
				className='w-full h-[50%]'
				src={flagUrl}
				alt={name.toLowerCase().concat('-flag')}
			/>
			<div className='w-full h-fit flex flex-col gap-y-6 px-8 md:text-[115%]'>
				<h1 className='font-bold text-black dark:text-white'>{name}</h1>
				<div className='w-full h-fit flex flex-col'>
					{[
						['Population', population],
						['Region', region],
						['Capital', capital],
					].map((element: (string | number | undefined)[]): JSX.Element => {
						return (
							<div
								key={element[0]}
								className='text-black font-bold dark:text-white'
							>
								{element[0]}:{' '}
								<span className='text-black font-light dark:text-white'>
									{element[1]}
								</span>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
