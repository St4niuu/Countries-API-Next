'use client'

import { useAppContext } from '@/context/AppContext'

export default function Header(): JSX.Element {
	const { theme, setTheme } = useAppContext()

	function handleThemeChange(): void {
		switch (theme) {
			case 'light':
				return setTheme('dark')
			case 'dark':
				return setTheme('light')
		}
	}

	return (
		<div
			className={`w-full min-w-[300px] h-28 flex justify-between items-center px-4 md:h-24 md:px-16 ${
				theme === 'light' ? 'bg-white' : 'bg-darkElement text-white'
			}`}
		>
			<div className='text-big font-heavy md:text-[150%]'>
				Where in the world?
			</div>
			<div
				className='h-1/4 flex items-center gap-3 cursor-pointer transition-all duration-100 active:scale-90'
				onClick={handleThemeChange}
			>
				<img
					className='w-fit h-full'
					src={theme === 'light' ? '/moon.svg' : '/sun.svg'}
					alt='theme-icon'
				/>
				<div className='font-heavy'>
					{theme === 'light' ? 'Dark mode' : 'Light mode'}
				</div>
			</div>
		</div>
	)
}
