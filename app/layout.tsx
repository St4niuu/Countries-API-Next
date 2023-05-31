import '@/assets/styles/global.css'
import ContextProvider from '@/context/AppContext'
import Header from '@/components/Header'

export const metadata = {
	title: 'Countries API',
	description: 'This is my implementation of the "Countries API" task.',
}

async function fetchData() {
	return await fetch('https://restcountries.com/v3.1/all').then((data) =>
		data.json()
	)
}

export default async function Layout({
	children,
}: {
	children: React.ReactNode
}): Promise<JSX.Element> {
	const data = await fetchData()

	return (
		<html lang='en'>
			<body>
				<ContextProvider>
					<Header />
					{children}
				</ContextProvider>
			</body>
		</html>
	)
}
