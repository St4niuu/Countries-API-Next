import '@/assets/styles/global.css'
import ContextProvider from '@/context/AppContext'
import Header from '@/components/Header'

export const metadata = {
	title: 'Countries API',
	description: 'This is my implementation of the "Countries API" task.',
}

export default function Layout({
	children,
}: {
	children: React.ReactNode
}): JSX.Element {
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
