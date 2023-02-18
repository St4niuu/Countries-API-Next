import { CountryType } from '@/app/fetchData'

export default function paginate(countries: CountryType[]): CountryType[][] {
	let data = []
	for (let x = 0; x <= countries.length; x += 8) {
		data.push(countries.slice(x, x + 8))
	}
	if (data[data.length - 1].length === 0) {
		data = data.slice(0, data.length - 1)
	}
	return data
}
