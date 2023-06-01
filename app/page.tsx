import Input from '@/components/Input'
import Filter from '@/components/Filter'
import Countries from '@/components/Countries'

export type CountryType = {
	name: string
	population: number
	region: string
	capital: string
	imgUrl: string
}

async function fetchData() {
	return await fetch('https://restcountries.com/v3.1/all')
		.then((data) => data.json())
		.then((data) =>
			data.map((element: any): CountryType => {
				return {
					name: element.name.common,
					population: element.population,
					region: element.region,
					capital: Array.isArray(element.capital)
						? element.capital[0]
						: element.capital,
					imgUrl: element.flags.png,
				}
			})
		)
}

export default async function Page(): Promise<JSX.Element> {
	const data = await fetchData()

	return (
		<div className='w-full h-fit bg-lightBackground grow flex flex-col items-center gap-12 px-6 py-8 dark:bg-darkBackground'>
			<div className='w-full h-fit flex flex-col gap-12 md:flex-row md:justify-between md:px-16'>
				<Input />
				<Filter />
			</div>
			<Countries countries={data} />
		</div>
	)
}
