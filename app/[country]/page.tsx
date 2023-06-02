'use client'

export default async function Page({
	params,
}: {
	params: { country: string }
}): Promise<JSX.Element> {
	const data = await fetch(
		`https://restcountries.com/v3.1/name/${params.country}`
	).then((data) => data.json())

	console.log(data)

	return (
		<div className='w-full h-fit grow bg-lightBackground flex flex-col gap-8 px-8 py-12 md:px-24 md:py-24 dark:bg-darkBackground'>
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
		</div>
	)
}
