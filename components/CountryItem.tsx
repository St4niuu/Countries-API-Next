'use client'

import { CountryType } from '@/app/page'
import { useRouter } from 'next/navigation'

export default function CountryItem({
	name,
	population,
	region,
	capital,
	imgUrl,
}: CountryType): JSX.Element {
	const router = useRouter()

	return (
		<div
			className='w-full max-w-[325px] h-[375px] flex flex-col rounded-lg shadow-md overflow-hidden cursor-pointer dark:bg-darkElement'
			onClick={() => router.push(`/${name}`)}
		>
			<img
				className='w-full h-[45%]'
				src={imgUrl}
				alt={`{${name.toLowerCase()}-flag}`}
			/>
			<div className='w-full h-fit grow flex flex-col gap-4 px-8 py-10'>
				<div className='text-big font-heavy dark:text-white'>{name}</div>
				<div className='w-full grow flex flex-col justify-center gap-1'>
					{[
						['Population', population],
						['Region', region],
						['Capital', capital],
					].map((element: (string | number)[]): JSX.Element => {
						return (
							<div key={element[0]}>
								<span className='font-medium dark:text-white'>
									{element[0]}:{' '}
								</span>
								<span className='dark:text-white'>{element[1]}</span>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
