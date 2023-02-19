import paginate from '@/functions/paginate'

export type CountryType = {
	name: string
	population: number
	region: string | undefined
	flagUrl: string | undefined
	capital: string | undefined
}

export default async function fetchData() {
	const data = await fetch('https://restcountries.com/v3.1/all')
		.then((response) => response.json())
		.then((countries) => {
			return countries.map((element: any): CountryType => {
				return {
					name: element.name.common,
					population: element.population,
					region: element.region,
					flagUrl: element.flags.png,
					capital: element.capital && element.capital[0],
				}
			})
		})
	return { raw: data, paginated: paginate(data) }
}
