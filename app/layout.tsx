import '@/assets/styles/global.css'
import React, { use } from 'react'
import AppContextProvider from '@/context/AppContext'
import ThemeSwitcher from '@/ui/ThemeSwitcher'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}): JSX.Element {
	return (
		<html lang='en'>
			<head />
			<body>
				<AppContextProvider>
					<div className='w-full h-16 bg-white flex justify-between items-center px-4'>
						<h1 className='font-bold'>Where in the world?</h1>
						<ThemeSwitcher />
					</div>
					{children}
				</AppContextProvider>
			</body>
		</html>
	)
}
