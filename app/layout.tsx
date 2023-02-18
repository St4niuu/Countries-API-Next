import '@/assets/styles/global.css'
import React, { use } from 'react'
import AppContextProvider from '@/context/AppContext'
import ThemeSetter from '@/ui/ThemeSetter'
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
					<ThemeSetter>
						<div className='w-full min-w-[375px] h-24 bg-white shadow-md flex justify-between items-center px-4'>
							<h1 className='font-bold'>Where in the world?</h1>
							<ThemeSwitcher />
						</div>
						{children}
					</ThemeSetter>
				</AppContextProvider>
			</body>
		</html>
	)
}
