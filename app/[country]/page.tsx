'use client'

async function getData(country: string) {
	return await fetch(`https://restcountries.com/v3.1/name/${country}`, {
		cache: 'no-cache',
	}).then((data) => data.json())
}

export default async function Page({
	params,
}: {
	params: { country: string }
}): Promise<JSX.Element> {
	const data = (await getData(params.country))[0]

	return (
		<div className='w-full h-fit grow bg-lightBackground flex flex-col gap-16 px-8 py-12 md:px-24 md:py-24 dark:bg-darkBackground'>
			<div
				className='w-40 h-12 bg-lightElement flex justify-center items-center gap-1 pr-4 rounded shadow-lg cursor-pointer dark:bg-darkElement'
				onClick={() => window.history.back()}
			>
				<svg
					className='w-fit h-1/2 fill-black rotate-180 dark:fill-white'
					viewBox='0 0 1954 1232'
				>
					<use href='/arrow-back.svg#icon' />
				</svg>
				<span className='dark:text-white'>Back</span>
			</div>
			<div className='w-full h-fit grow bg-lightBackground flex flex-col gap-12 md:grow-0 md:flex-row md:gap-56 dark:bg-darkBackground'>
				<img
					className='w-full h-48 md:w-1/2 md:h-fit'
					src={data.flags.svg}
					alt={`${data.name.common.toLowerCase()}'s flag`}
				/>
				<div className='w-full h-fit grow bg-lightBackground flex flex-col gap-8 md:w-1/2 md:gap-12 md:py-12 dark:bg-darkBackground'>
					<span className='text-[175%] font-heavy dark:text-white'>
						{data.name.common}
					</span>
					<div className='w-full h-fit flex flex-col gap-8 md:flex-row md:gap-32'>
						<div>
							{[
								[
									'Native Name',
									data.name.nativeName[Object.keys(data.name.nativeName)[0]]
										.official,
								],
								['Population', data.population],
								['Region', data.region],
								['Sub Region', data.subregion],
								['Capital', data.capital[0] && data.capital],
							].map((element, index) => {
								return (
									<div key={index} className='text-big dark:text-white'>
										<span className='font-medium'>{element[0]}: </span>
										{element[1]}
									</div>
								)
							})}
						</div>
						<div>
							{[
								['Top Level Domain', data.tld[0] && data.tld],
								['Currencies', data.currencies],
								['Languages', data.languages],
							].map((element, index) => {
								return (
									<div key={index} className='text-big dark:text-white'>
										<span className='font-medium'>{element[0]}: </span>
										{typeof element[1] === 'object'
											? (function output() {
													switch (index) {
														case 1:
															const tmp = []
															for (const property in element[1]) {
																tmp.push(element[1][property].name)
															}
															return tmp.join(', ')
														default:
															return Object.values(element[1]).join(', ')
													}
											  })()
											: element[1]}
									</div>
								)
							})}
						</div>
					</div>
					{data.borders && (
						<div className='w-full h-fit flex flex-col gap-4'>
							<span className='text-[150%] font-medium dark:text-white'>
								Border Countries:
							</span>
							<div className='w-full h-fit flex flex-wrap gap-8'>
								{data.borders.map((element: string) => {
									return (
										<div
											key={element}
											className='w-fit h-12 bg-lightElement grid place-items-center px-8 rounded shadow-lg dark:text-white dark:bg-darkElement'
										>
											{element}
										</div>
									)
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
